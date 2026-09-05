---
qid: ing_eb20fc14ef__eli5__local
question: 'Explain: Cardinality Examples'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 209
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:47:34-05:00'
sources: []
---

**Cardinality in machine learning is about how many different values a feature can take, just like counting the number of distinct colors in a box of crayons.**

Imagine you’re sorting crayons:  
* **Low cardinality (few colors)** – maybe only red, blue, and green. That’s easy to manage; you can give each color its own slot in a table or one‑hot vector with just three entries.  
* **High cardinality (many colors)** – thousands of shades. Storing every single shade separately would use too much space and slow the model down. Instead, you group similar shades into buckets (like “light,” “medium,” “dark”) or embed each shade into a smaller continuous vector that captures its essence.

So, cardinality tells us whether we should treat a feature as a simple categorical label or compress it with techniques like embedding to keep models efficient and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
