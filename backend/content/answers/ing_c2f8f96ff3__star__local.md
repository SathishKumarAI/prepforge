---
qid: ing_c2f8f96ff3__star__local
question: 'Explain: Responses — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 334
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:43-05:00'
sources: []
---

**Situation**  
In a recent fraud‑detection project, we had to ingest millions of transaction logs into Elastic so that our ML model could query them in real time during the nightly retraining cycle.

**Task**  
Design an efficient index schema that supports fast similarity searches on categorical fields (merchant, user ID) and numeric ranges (amount, timestamp), while keeping shard count manageable for a 5‑TB dataset.

**Action**  
I started by drafting a mapping with `keyword` types for exact matches and `float` for amounts. Using the Elasticsearch REST API, I scripted a bulk index creation (`PUT /transactions-2024`) with custom analyzers: a `whitespace` tokenizer for merchant names and a `date_range` type for timestamps. I set `number_of_shards` to 10 based on cluster size, added an alias `transactions_current` for zero‑downtime rollovers, and enabled the `index.refresh_interval` to -1 during bulk loads to boost throughput. After creating the index, I ran a benchmark query (`_search`) to verify latency under 50 ms for top‑N similarity hits.

**Result**  
The new index reduced search latency from 180 ms to 45 ms and cut memory usage by ~30 %. The nightly retraining pipeline now completes 10% faster, freeing compute resources for additional model experiments. I learned the importance of balancing shard count with mapping complexity and how small analyzer tweaks can dramatically affect query performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
