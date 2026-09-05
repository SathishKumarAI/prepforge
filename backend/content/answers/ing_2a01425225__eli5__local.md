---
qid: ing_2a01425225__eli5__local
question: Explain post-training quantization versus quantization-aware training. What
  breaks when you push weights to 2-4 bits, and how do you recover quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 250
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:42:03-05:00'
sources: []
---

Think of a painting that’s been scanned into a computer.  
**Post‑training quantization** is like taking the finished scan and forcing every color to fit into only a few shades (say 2–4 bits per pixel). The brushstrokes stay the same, but many subtle hues are rounded to the nearest available tone; details can blur or colors shift.

**Quantization‑aware training** is like repainting the picture while already knowing you’ll later reduce the color palette. During each brushstroke (training step) the artist imagines what the limited shades will look like and adjusts the strokes so the final image still looks right after rounding.

When weights are pushed to 2–4 bits, **the fine‑grained variations that let a neural net learn nuanced patterns disappear**—tiny weight changes become invisible. Quantization‑aware training “recovers quality” by letting the model learn with simulated low‑precision arithmetic in the loop, so it learns weights that stay useful even after rounding. In short, post‑training is quick but blunt; quantization‑aware training is slower but preserves accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
