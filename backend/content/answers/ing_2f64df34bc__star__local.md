---
qid: ing_2f64df34bc__star__local
question: 'Explain: Performance — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 309
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:36-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time recommendation engine that served millions of users per day. The backend initially used PostgreSQL for all user activity logs, but the query latency for aggregating clickstreams spiked to 250 ms during peak hours, breaking our SLA.

**Task:**  
I needed to redesign the data layer so that aggregation queries returned in under 80 ms while still preserving ACID guarantees for critical write operations like order placement.

**Action:**  
I profiled the workload and found that most reads were key‑value lookups of session state and simple range scans on a timestamp field. I migrated those tables to Redis (in‑memory NoSQL) for caching, using Lua scripts to maintain consistency with PostgreSQL via CDC pipelines. For write‑heavy transactional data, I kept PostgreSQL but introduced partitioning by date and vacuum tuning. I also added an ElasticSearch index for full‑text search that was previously hitting the relational DB.

**Result:**  
Read latency dropped from 250 ms to 45 ms on average, while write throughput improved by 30 %. The system now meets its 99.9% SLA. I learned that a hybrid approach—using SQL for strict consistency and NoSQL for high‑speed reads—is often the most pragmatic design in large‑scale ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
