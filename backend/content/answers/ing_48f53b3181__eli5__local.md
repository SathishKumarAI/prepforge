---
qid: ing_48f53b3181__eli5__local
question: 'Explain: High and Low Database Cardinality Definition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 201
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:45-05:00'
sources: []
---

Imagine you’re sorting apples into baskets.  
*High cardinality* is like having a basket that can hold **thousands of different apple varieties**—each one is unique, so the basket is very “full” with distinct items. In a database, a column with high cardinality (e.g., email addresses) contains many unique values; each row is almost its own bucket.

*Low cardinality* is like a basket that holds only **a few types of apples**—maybe just red and green. The same value repeats many times. A low‑cardinality column (like gender or country code) has only a handful of distinct entries, so most rows share the same value.

In machine learning, knowing whether a feature is high‑ or low‑cardinality helps decide how to encode it and how much information it can provide for predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
