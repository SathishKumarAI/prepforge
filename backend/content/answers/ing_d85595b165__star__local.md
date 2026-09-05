---
qid: ing_d85595b165__star__local
question: 'Explain: Database sharding for data distribution and availability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 370
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:37-05:00'
sources: []
---

**Situation:**  
At a fintech startup, my team built an ML pipeline that predicted credit risk for over 3 million customers. The training data lived in a single PostgreSQL instance; as we added new features and more users, query latency spiked to 8–10 seconds, and the nightly ETL job timed out during peak hours.

**Task:**  
I had to redesign the data layer so that both read‑heavy inference queries and write‑intensive feature updates ran within a 2‑second SLA while keeping the training pipeline’s throughput above 1 million rows per hour.

**Action:**  
I introduced horizontal sharding across three PostgreSQL nodes using hash partitioning on `customer_id`. I wrote a lightweight routing layer in Go that directed reads to all shards (parallel scans) and writes to the appropriate shard via consistent hashing. To maintain data locality for the ML model, I mirrored the feature tables to an ElasticSearch cluster for fast vector lookups. I also added automatic replica promotion scripts so each shard had one read replica for high availability. Finally, I updated our Airflow DAGs to batch inserts per shard and scheduled nightly merges.

**Result:**  
Query latency dropped from 9 seconds to 1.3 seconds; the ETL job completed in under 30 minutes with a 95% success rate. The sharded architecture scaled to 5 million users without additional hardware, and we reduced cloud costs by 18%. I learned that thoughtful partitioning coupled with read replicas can turn a bottleneck into a resilient, high‑performance system for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
