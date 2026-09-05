---
qid: ing_9b09d5ad16__eli5__local
question: 'Explain: Prefill and decode disaggregation — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 236
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:16-05:00'
sources: []
---

Imagine a kitchen where chefs (the “LLM gateway”) prepare a huge batch of soup, but the diners (your app) only want a single spoonful at a time.  
**Prefill** is like chopping all the vegetables and seasoning the broth ahead of time so the chef can start cooking instantly when a customer orders. The kitchen keeps that pre‑made base ready to speed up each new dish.  

**Decode disaggregation** is the act of taking that ready soup and ladling out exactly what one diner asked for—just the right amount, with the precise flavor profile they want. Instead of letting the chef stir the whole pot again for every single spoonful, a small “decoder” picks off the needed portion from the pre‑made batch.  

Together, these steps let an LLM gateway serve many requests quickly: it keeps a big, ready model (“prefilled”) and then hands out the exact answer (“decoded”) to each user without re‑computing everything from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
