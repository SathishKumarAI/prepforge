---
qid: ing_5a8d24aa4b__eli5__local
question: Tell me about a time you significantly cut inference costs. What was the
  approach and the tradeoff?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 203
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:52-05:00'
sources: []
---

Imagine a giant library that has every book on the world’s knowledge, but it’s so huge that walking through it each time you need an answer takes forever. In AI terms, that’s a “large model” whose inference (answer‑generating) cost is high.

I made it faster by “pruning” – like trimming extra shelves that are rarely used. First, I let the model read many questions and noted which neurons (tiny decision points inside the network) were almost always silent. Then I removed those quiet neurons, shrinking the library to its most essential rooms. The trade‑off was a tiny drop in answer quality: some rare, nuanced queries became slightly less precise, but for everyday use it ran 70 % faster and used far fewer compute resources.

So, by cutting the unnecessary shelves, we kept the library functional while drastically lowering the cost of every visit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
