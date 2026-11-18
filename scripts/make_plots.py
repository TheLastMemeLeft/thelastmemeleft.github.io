"""Build the ATLAS research figures as static SVGs (dark + light variants).

Numbers come ONLY from the vault note
  Obsidian Vault/Areas/ATLAS Lab/Research/Result 2026-11-10 - Thesis DFT slabs.md
(audited 2026-11-10; dG = dE + 0.24 eV). Edit DATA below if that note changes.

Run with any Python that has matplotlib, e.g.
  C:\\Users\\aryan\\miniforge3\\envs\\atlas-ml\\python.exe scripts\\make_plots.py
Writes public/figures/{dg,ddg}-{dark,light}.svg
"""
from pathlib import Path

import logging

import matplotlib

logging.getLogger("matplotlib.font_manager").setLevel(logging.ERROR)

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

OUT = Path(__file__).resolve().parent.parent / "public" / "figures"

# (label, dG up, dG down) in eV. Thesis values as reported in Abbasi 2023 (its own correction convention).
DG = [
    ("Thesis DFT (PBE+U)", -0.51, 0.40),
    ("UMA oc25", -0.42, 0.35),
    ("UMA omat", -0.33, 0.33),
    ("UMA oc22", -0.32, 0.31),
    ("UMA omat + D3", -0.31, 0.29),
    ("UMA oc22 + D3", -0.28, 0.26),
]
# (label, ddG) in eV; last row is the first, hand-built slab (best setup) before the real DFT slabs arrived.
DDG = [
    ("UMA oc25", 0.77),
    ("UMA omat", 0.66),
    ("UMA oc22", 0.62),
    ("UMA omat + D3", 0.60),
    ("UMA oc22 + D3", 0.54),
    ("First rebuilt slab", 0.41),
]
THESIS_DDG = 0.91

# Reference categorical palette (dataviz skill), slot 1 blue / slot 2 orange, stepped per mode.
THEMES = {
    "dark": dict(text="#fafafa", muted="#a1a1aa", grid="#3f3f46", up="#3987e5", down="#d95926", neutral="#71717a"),
    "light": dict(text="#09090b", muted="#52525b", grid="#d4d4d8", up="#2a78d6", down="#eb6834", neutral="#a1a1aa"),
}

plt.rcParams.update({
    "svg.fonttype": "none",
    "font.family": ["Inter", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
    "font.size": 15,
})


def style(ax, t):
    for s in ("top", "right", "left"):
        ax.spines[s].set_visible(False)
    ax.spines["bottom"].set_color(t["grid"])
    ax.tick_params(colors=t["muted"], length=0, labelsize=14)
    ax.xaxis.grid(True, color=t["grid"], linewidth=0.6)
    ax.set_axisbelow(True)
    for lab in ax.get_yticklabels():
        lab.set_color(t["text"])


def dg_plot(t, path):
    fig, ax = plt.subplots(figsize=(6.4, 4.6))
    ys = list(range(len(DG)))[::-1]
    for y, (lab, up, down) in zip(ys, DG):
        ax.plot([up, down], [y, y], color=t["grid"], linewidth=2, zorder=1, solid_capstyle="round")
        ax.scatter([up], [y], s=90, color=t["up"], zorder=3, edgecolors="none")
        ax.scatter([down], [y], s=90, color=t["down"], zorder=3, edgecolors="none")
        ax.text(up - 0.05, y, f"{up:+.2f}", ha="right", va="center", fontsize=13, color=t["muted"])
        ax.text(down + 0.05, y, f"{down:+.2f}", ha="left", va="center", fontsize=13, color=t["muted"])
    ax.axvline(0, color=t["muted"], linewidth=1, linestyle=(0, (3, 3)), zorder=0)
    ax.set_yticks(ys, [d[0] for d in DG])
    ax.set_xlim(-0.85, 0.75)
    ax.set_ylim(-0.6, len(DG) - 0.1)
    ax.set_xlabel("ΔG(H*)  (eV)", color=t["muted"], fontsize=14)
    style(ax, t)
    ax.text(-0.83, len(DG) - 0.4, "binds H (grab)", color=t["muted"], fontsize=13, ha="left")
    ax.text(0.73, len(DG) - 0.4, "releases H", color=t["muted"], fontsize=13, ha="right")
    h_up = ax.scatter([], [], s=90, color=t["up"], label="Polarization up")
    h_dn = ax.scatter([], [], s=90, color=t["down"], label="Polarization down")
    leg = ax.legend(handles=[h_up, h_dn], loc="upper center", bbox_to_anchor=(0.5, -0.17), ncol=2,
                    frameon=False, fontsize=14)
    for txt in leg.get_texts():
        txt.set_color(t["text"])
    fig.tight_layout()
    fig.savefig(path, transparent=True)
    plt.close(fig)


def ddg_plot(t, path):
    fig, ax = plt.subplots(figsize=(6.4, 4.4))
    ys = list(range(len(DDG)))[::-1]
    for y, (lab, v) in zip(ys, DDG):
        c = t["neutral"] if lab.startswith("First") else t["up"]
        ax.barh(y, v, height=0.56, color=c, zorder=2)
        ax.text(v + 0.015, y, f"{v:.2f}", va="center", ha="left", fontsize=13, color=t["text"])
    ax.axvline(THESIS_DDG, color=t["down"], linewidth=2, zorder=3)
    ax.text(THESIS_DDG - 0.02, len(DDG) - 0.15, f"Thesis DFT {THESIS_DDG:.2f}", color=t["text"],
            fontsize=13, ha="right", va="center")
    ax.set_yticks(ys, [d[0] for d in DDG])
    ax.set_xlim(0, 1.05)
    ax.set_ylim(-0.6, len(DDG) + 0.1)
    ax.set_xlabel("ΔΔG = ΔG(down) − ΔG(up)  (eV)", color=t["muted"], fontsize=14)
    style(ax, t)
    fig.tight_layout()
    fig.savefig(path, transparent=True)
    plt.close(fig)


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for mode, t in THEMES.items():
        dg_plot(t, OUT / f"dg-{mode}.svg")
        ddg_plot(t, OUT / f"ddg-{mode}.svg")
    for p in sorted(OUT.glob("*.svg")):
        print(p.name, p.stat().st_size, "bytes")
