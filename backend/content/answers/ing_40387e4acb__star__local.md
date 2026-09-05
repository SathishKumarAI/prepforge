---
qid: ing_40387e4acb__star__local
question: 'Explain: Inside Cassandra: an interview with Marcel Birkner at Instana'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 363
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:45-05:00'
sources: []
---

**Situation**  
When I joined the Data Ops team at a fintech startup, our real‑time fraud detection model was ingesting millions of events per day. We were using Cassandra as the primary store for user activity logs, but the read latency for training batches was spiking to 300 ms during peak hours, hurting our nightly retraining schedule.

**Task**  
I had to reduce batch query latency below 80 ms without breaking schema or compromising write throughput, so that we could pull fresh data every night and keep the model’s accuracy high.

**Action**  
First I profiled the Cassandra cluster with `nodetool tpstats` and discovered that our wide‑row queries were hitting multiple partitions per node. I restructured the keyspace: split the time‑series column into a composite partition key (`user_id`, `date`) and added an indexed clustering column (`event_type`). Then I tuned compaction strategy to `SizeTieredCompactionStrategy` for write‑heavy workloads and switched to `DynamoDBStyleCompactionStrategy` for reads. Finally, I introduced a materialized view that pre‑aggregated events per user per day, eliminating the need for expensive on‑the‑fly joins during batch extraction.

**Result**  
Read latency dropped from 300 ms to 45 ms, and our nightly training window shrank by 30 %. The model’s precision improved by 2.5 % because we could use fresher data. I learned that thoughtful key design and targeted compaction can dramatically change Cassandra’s performance profile without adding infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
