---
qid: ing_94feb49854__star__local
question: 'Explain: Distributed — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 373
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:46-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our fraud‑detection model was generating millions of predictions per day. The single‑node PostgreSQL database we were using couldn't keep up; latency spiked to 8 s and the team could not deploy new models in time for regulatory windows.

**Task**  
I had to design a scalable data layer that could ingest, store, and serve prediction results with sub‑second read/write latency while maintaining eventual consistency across the company’s three global offices.

**Action**  
I chose Apache Cassandra because of its linear scalability and tunable consistency. I modeled the data as a wide‑row table: `predictions (user_id PK, timestamp CK, model_version, fraud_score)`. Using CQL, I defined a composite primary key to enable efficient range queries per user. I set the replication factor to 3 with a NetworkTopologyStrategy so each datacenter had its own replica. I also leveraged Cassandra’s built‑in secondary indexes for quick lookups on `model_version` and implemented lightweight transactions (LWT) only where strict ordering was required, avoiding their performance penalty elsewhere. Finally, I scripted automatic compaction and hinted handoff monitoring with Prometheus to keep the cluster healthy.

**Result**  
Read latency dropped from 8 s to under 200 ms, and write throughput increased from 2k req/s to 50k req/s, comfortably handling a projected 10× user growth. The model rollout time fell from days to hours, enabling real‑time fraud alerts. I learned that choosing the right consistency level and data model in Cassandra is critical for balancing latency against reliability in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
