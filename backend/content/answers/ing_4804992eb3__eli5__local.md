---
qid: ing_4804992eb3__eli5__local
question: 'Explain: Compare greedy decoding, top-k sampling, and top-p (nucleus) sampling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 251
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:31:11-05:00'
sources: []
---

Imagine a chef who’s writing a recipe book.  
*Greedy decoding* is like the chef always picking the most popular ingredient in every dish – “tomato” if it appears most often. The result is consistent but can become bland, missing surprising flavors.

*Top‑k sampling* gives the chef a shortlist of the k best ingredients (say the top 5). From that list he randomly chooses one each time. This keeps things safe but allows some variety; the dish might still lean toward familiar tastes if the top 5 are all similar.

*Top‑p (nucleus) sampling* lets the chef consider only enough ingredients to reach a cumulative popularity threshold p (e.g., 90 %). If “tomato” and “basil” already cover 90 % of the probability, the chef ignores rarer items. The choice is random within that dynamic set, so the dish can surprise while staying grounded in common flavor.

All three methods decide what word to write next; greedy is deterministic, top‑k adds a fixed breadth, and top‑p adapts breadth based on overall likelihood.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
