---
qid: ing_196b650a82__star__local
question: How many examples? — Few Shot And Icl
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 317
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:10-05:00'
sources: []
---

**Situation** – While leading a data‑science sprint for our recommendation engine, we hit a wall: the new content category had only 120 labeled examples, but our model needed thousands to perform well. The deadline was two weeks before the product launch.

**Task** – I had to bootstrap accurate predictions with minimal data and ensure the solution could be deployed within the sprint without extra annotation work.

**Action** – I chose a few‑shot + in‑context learning strategy using GPT‑4’s prompt engineering. First, I curated 8 high‑quality examples that covered the spectrum of user intent and added them as context to the prompt. Then, I leveraged chain‑of‑thought prompting to let the model reason through each case before giving its final classification. To reduce variance, I wrapped the few‑shot inference in a lightweight ensemble: running the same prompt 5 times with different temperature settings and voting on the final label. Finally, I validated against a hold‑out set of 200 unseen items and iterated on the prompt until precision hit 84%.

**Result** – The model achieved 82% F1 on the new category—just 3 points shy of our target—and we shipped the feature on schedule. I learned that carefully crafted few‑shot prompts can replace thousands of labels, but they still need rigorous validation and ensemble tricks to tame stochasticity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
