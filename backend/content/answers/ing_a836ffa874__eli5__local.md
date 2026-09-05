---
qid: ing_a836ffa874__eli5__local
question: 'Explain: Rollover — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 253
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:43-05:00'
sources: []
---

Imagine you’re filling a giant filing cabinet with new customer records. Every day you add more files, but the cabinet has limited space and gets slower when it’s too full. In Elasticsearch, a **data stream** is like that cabinet: it holds many small “shards” (tiny storage units) of data that keep growing.

A **rollover** is the rule that says, “When the current shard reaches a certain size or age, stop writing to it and start a new one.” Think of it as deciding to open a fresh drawer once the old one gets too crowded. This keeps each drawer small and fast, while still letting you keep all the records in the same logical stream.

- **Shard**: A tiny storage unit that holds part of your data.
- **Data stream**: A continuous series of shards that together represent a dataset (like daily logs).
- **Rollover policy**: The set of rules (size, age) that triggers moving to a new shard.

So, rollover is simply the automatic “new drawer” switch that keeps your data fast and manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
