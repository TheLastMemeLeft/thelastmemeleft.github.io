"""Social preview card (public/og.png, 1200x630) shown when the link is pasted in LinkedIn/Slack."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402

OUT = Path(__file__).resolve().parent.parent / "public" / "og.png"
fig = plt.figure(figsize=(12, 6.3), dpi=100, facecolor="#09090b")
fig.text(0.07, 0.70, "Aryan Agarwal", color="#fafafa", fontsize=58, fontweight="bold", family="sans-serif")
fig.text(0.07, 0.56, "ML-for-materials researcher & software engineer", color="#a1a1aa", fontsize=28, family="sans-serif")
fig.text(0.07, 0.36, "ATLAS Lab @ UC San Diego  ·  IBM  ·  Ally", color="#60a5fa", fontsize=24, family="monospace")
fig.text(0.07, 0.12, "thelastmemeleft.github.io", color="#8b8b95", fontsize=20, family="monospace")
fig.savefig(OUT, facecolor=fig.get_facecolor())
print(OUT, OUT.stat().st_size)
