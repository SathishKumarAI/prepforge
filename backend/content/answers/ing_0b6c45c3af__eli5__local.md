---
qid: ing_0b6c45c3af__eli5__local
question: Images are 2D and video is 3D, but an LLM's positional encoding is 1D. What
  breaks if you just flatten the patches, and how do modern VLMs handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 247
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:53:45-05:00'
sources: []
---

Imagine a photo as a flat sheet of colored tiles (2‑D), a video as a stack of those sheets over time (3‑D), and a language model as a single row of beads that can only read one dimension at a time. If you simply flatten the tiles into one long line, the beads lose the “left‑right” and “up‑down” relationships: two tiles that are neighbors on the sheet might end up far apart in the line, so the model cannot tell them to be together. Likewise, stacking many flattened lines for a video removes the sense of depth between frames.

Modern vision–language models keep the spatial layout intact by treating each patch as a token with its own 2‑D coordinates (x, y). They add a positional “fingerprint” that tells the model where in the image or frame each patch sits. For videos, they also give a third coordinate (t) so the model can understand how patches move over time. This way the single‑dimensional sequence of tokens still carries all the 3‑D structure needed for accurate understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
