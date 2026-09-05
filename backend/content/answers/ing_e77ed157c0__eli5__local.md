---
qid: ing_e77ed157c0__eli5__local
question: 'Explain: 1.1.3.2.2. Information-criteria based model selection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 214
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:11-05:00'
sources: []
---

Think of building a house (your prediction) and choosing the right blueprints (the statistical model).  
The **information‑criterion** is like a “budget report” that tells you how well a blueprint fits the land while also penalising extra rooms that make the house unnecessarily big.

* **Model** – A set of rules that turns data into predictions.  
* **Criterion** – A single number that balances two things:  
  1. **Goodness‑of‑fit** (how accurately the model explains the data).  
  2. **Complexity penalty** (extra parameters are like extra rooms; they cost money and can lead to a crooked house).

You calculate this number for each candidate blueprint, then pick the one with the lowest score—just as a builder would choose the most economical design that still fits the plot well. The result is a model that explains the data enough without over‑engineering it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
