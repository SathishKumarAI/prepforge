---
qid: ing_7373f6946a__eli5__local
question: 'Explain: You train natively in int8 rather than doing post-training quantization.
  Defend that.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 219
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:39:34-05:00'
sources: []
---

Imagine a chef who wants to make a soup exactly the way it tastes after cooking, not just “tasting” it later and adding spices on top.  
Training *natively in INT‑8* is like letting the chef use only whole‑numbered measuring spoons from the start: every ingredient (weight) and every stir (activation) is recorded in 8‑bit integers. The recipe learns to adjust itself with that limited precision, so when you finally serve it, no extra “spice” step is needed.  

Post‑training quantization would be like cooking the soup first with all the fancy measuring tools (floating‑point), then going back and guessing how many teaspoons of salt were used and adding them later—often off by a bit.  
By training in INT‑8 from day one, you avoid those guesswork adjustments, keep the model smaller, faster, and usually more accurate on real devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
