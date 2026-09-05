---
qid: ing_9aa08b44fc__eli5__local
question: Compare INT8, FP8, and FP4 for serving. What breaks, and how do you validate
  that a quantized endpoint is "good enough"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 340
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:41-05:00'
sources: []
---

Imagine a library where books are stored in three different “formats” of paper:  
* **INT8** – thick, plain paper (8‑bit integers).  
* **FP8** – slightly thinner, glossy paper that can show shades between black and white (8‑bit floating point).  
* **FP4** – ultra‑thin paper that only shows a few tones (4‑bit floating point).

When you serve an AI model, each format trades off how much detail it keeps. INT8 keeps the most detail but needs more space; FP8 saves space while still letting the model “feel” subtle changes; FP4 is the lightest but can lose nuance.

**What breaks?**  
- **INT8** may mis‑represent very small values, hurting precision.  
- **FP8** can suffer from rounding when numbers are close together.  
- **FP4** often drops too much information—tiny differences disappear, so predictions drift.

**How to check if it’s “good enough”?**  
1. Run a test set through the quantized model and compare its accuracy or loss to the original (float‑32) version.  
2. Look at key metrics that matter in your application (e.g., top‑k accuracy, BLEU score).  
3. If the drop is below an acceptable threshold (often 1–2 % for many tasks), the model is fine.  

Think of it like printing a photo: if the color shift and blur are imperceptible to the eye, you’re happy with the compressed version.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
