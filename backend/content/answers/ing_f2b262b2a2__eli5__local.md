---
qid: ing_f2b262b2a2__eli5__local
question: 'Explain: Cardinality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 152
output_tokens: 179
total_tokens: 331
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:31-05:00'
sources: []
---

Imagine you’re hosting a party where each guest has a unique name tag. **Cardinality** is simply how many different names (or items) there are in the room. In machine learning, we talk about cardinality when describing a feature that can take on multiple distinct values—like “color” with options red, blue, green, or “country” with dozens of possibilities.

A low‑cardinality feature has only a few unique values (e.g., yes/no). A high‑cardinality feature has many (hundreds or thousands), such as user IDs. High cardinality can make models slower and harder to generalize because the algorithm must remember many separate cases. So, think of cardinality as counting how many distinct “labels” a column holds in your dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
