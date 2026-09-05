---
qid: ing_ce2d6f618d__star__local
question: 'Explain: Other UCs — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:38-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with building a real‑time recommendation engine for an e‑commerce platform that served 12 million users daily. The pipeline needed to ingest clickstream data, run feature extraction, and serve predictions with sub‑second latency.

**Task**  
I had to design the data layer that could handle high write throughput from the streaming ingestion while allowing fast reads for the inference service. The challenge was also to keep schema evolution simple as new features were added every sprint.

**Action**  
I chose Apache Cassandra as the backbone because of its linear scalability and tunable consistency. I modeled the data in a wide‑column format where each row represented a user session, columns stored feature vectors, and time‑to-live (TTL) values automatically purged stale sessions. Using the DataStax Java driver I implemented batch writes from Kafka consumers and lightweight transactions for critical counters. For read amplification I built materialized views per prediction model and leveraged Cassandra’s secondary indexes sparingly to keep query plans predictable. Finally, I set up a rolling upgrade pipeline with nodetool repair and hinted handoff monitoring so that no downtime occurred during cluster expansion.

**Result**  
The ingestion rate grew from 3 k events/s to 18 k events/s without impacting read latency; the prediction service responded in <50 ms for 99.5% of requests. The system handled a 200% traffic spike during a flash sale with no data loss. I learned that Cassandra’s flexible schema and tunable consistency make it ideal for ML pipelines where writes dominate and real‑time reads are critical, but careful index design and TTL management are essential to avoid query slowdowns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
