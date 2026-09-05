---
qid: ing_f7e6a1fdab__eli5__local
question: 'Explain: Sketch how you would serve a 671B-parameter MoE model with low
  latency under GPU-memory constraints.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 251
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:32-05:00'
sources: []
---

Imagine a big pizza‑shop that has 671 billion dough‑flavors (the “experts”) but only two ovens (GPU memory). When a customer orders a pizza, the shop’s manager (the router) quickly decides which few chefs should work on it and sends only those chefs’ dough to the ovens. The chefs don’t need all the ovens; they just need enough space for their part of the recipe.

To keep wait times short, the shop keeps a small “pizza‑batch” in the oven—just enough slices for one order—so it never has to load the whole kitchen each time. It also arranges the chefs so that the same few can handle many orders in quick succession, reusing their dough (caching) and avoiding the slow step of moving all 671 billion flavors into memory.

In this way the shop serves every pizza quickly even though it has far more flavors than its ovens can hold at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
