---
qid: ing_ce2d6f618d__aws__local
question: 'Explain: Other UCs — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 435
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:17-05:00'
sources: []
---

**Situation / Task**  
At my previous role we built a recommendation engine that needed to serve millions of users in real‑time. The training pipeline produced a new model every 12 hrs, and the inference layer had to fetch feature vectors for each request with sub‑50 ms latency.

**Action**  
I chose **Apache Cassandra** as the feature store because its tunable consistency and linear scalability fit our read‑heavy pattern. I:

1. Designed a wide‑row schema that stored user ID → timestamped features, enabling time‑series queries without compaction lag.  
2. Leveraged **Amazon Keyspaces (Cassandra‑compatible)** to avoid on‑prem hardware while keeping the same CQL interface.  
3. Integrated with **AWS Glue** for incremental ETL and **SageMaker Pipelines** for model training; the trained embeddings were streamed into Cassandra via a Lambda that used the DataStax driver.  
4. Implemented read‑repair and hinted handoff to maintain 99.9 % availability during node failures.  
5. Monitored latency with CloudWatch dashboards, triggering auto‑scaling of nodes when request rate exceeded 200k/s.

**Result**  
The system handled a peak of **1.2 M concurrent users**, reducing inference latency from 120 ms to **38 ms** (a 68 % improvement). Cost dropped by 35 % compared with an RDS‑based solution, and data drift detection became real‑time, cutting model rollback time from hours to minutes.

**Reflection**  
I learned that *ownership* means iterating on schema and consistency after each failure; *dive deep* required profiling CQL queries to avoid hot partitions. I shared these insights in a cross‑team workshop, raising the overall feature‑store maturity score by 20 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
