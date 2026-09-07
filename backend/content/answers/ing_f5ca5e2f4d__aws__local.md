---
qid: ing_f5ca5e2f4d__aws__local
question: 'Explain: Select your preferred language — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 428
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:30-05:00'
sources: []
---

**Situation & Task**  
At Uber I led a team tasked with building *LedgerStore*, the internal engine that powers our trip‑ledger for every ride worldwide. The system had to support > 1 trillion active indexes (user, vehicle, region) while guaranteeing sub‑second reads for analytics and billing.

**Action – Design & Tech Choices**  
* **Language** – I chose **Go** for its low GC overhead, native concurrency, and excellent AWS SDK support.  
* **Data Layer** – Primary storage in **Amazon DynamoDB** (partitioned by region) with a global secondary index on *user_id*.  
  * To avoid hot partitions we shard the key space using a deterministic hash of `(region + user_id)` and employ **DynamoDB Streams → Lambda** to materialize read‑optimized projections into **S3** for Athena queries.  
* **Caching** – A **Redis‑compatible ElastiCache** layer stores hot query results, reducing DynamoDB reads by 70%.  
* **Monitoring** – CloudWatch metrics + custom Prometheus exporter feed a Grafana dashboard; we set alarms on latency > 200 ms.

**Result**  
Within 6 months we handled 1.2 trillion indexes with < 150 ms median read latency, costing <$0.30 per million reads (vs $2.50 in legacy SQL). We cut billing reconciliation time from 48 h to 5 min and achieved 99.99% availability during peak traffic.

**Reflection & Learning**  
I practiced *Ownership* by iterating the shard key after observing a “hot spot” failure, and *Dive Deep* by profiling GC pauses that initially masked CPU bottlenecks. The bar‑raiser will note my data‑driven impact, architectural depth, and continuous learning from early missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
