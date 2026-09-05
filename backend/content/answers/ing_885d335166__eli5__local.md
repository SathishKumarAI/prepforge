---
qid: ing_885d335166__eli5__local
question: Compare L1 and L2 regularization. Why does L1 produce sparse weights?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 196
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:30-05:00'
sources: []
---

Think of a recipe that uses many spices (the model’s weights).  
**L2 regularization** is like adding a gentle drizzle of salt: it nudges every spice toward zero, but leaves most still present, just a little lighter.  

**L1 regularization** is like turning on a pressure cooker with a very tight lid: the pressure forces some spices all the way out of the pot—those weights become exactly zero—while only a few stay inside. Because L1 adds the absolute value of each weight to the cost, it’s cheaper for the optimizer to set many weights to zero than to keep them small but non‑zero.  

So L1 produces *sparse* models: most coefficients drop out completely, leaving a simpler, easier‑to‑understand set of important features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
