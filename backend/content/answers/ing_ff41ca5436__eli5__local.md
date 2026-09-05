---
qid: ing_ff41ca5436__eli5__local
question: 'Explain: Cost-Benefit Analysis — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 219
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:19:19-05:00'
sources: []
---

Imagine your AI is a chef who can make many dishes (possible answers). The first round of cooking produces a rough menu, but some dishes are still a bit off—maybe too salty or under‑seasoned.  
Cost‑benefit analysis is like the chef tasting each dish (scoring) and weighing two things: how much effort it takes to tweak it (“cost”) versus how much better it will taste after tweaking (“benefit”).  

Reranking strategies are the chef’s decision rules for ordering the dishes on the final menu.  
- **Greedy rerank** picks the tastiest dish first, then keeps going until the kitchen is full.  
- **Beam search** keeps a handful of promising dishes in mind at each step, discarding the rest.  

By comparing cost and benefit, the chef (AI) chooses which answers to refine or replace, ensuring the final menu looks great while using only the necessary effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
