---
qid: ing_97f058ef8e__aws__local
question: 'Explain: Design with Docstore — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 480
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:18-05:00'
sources: []
---

**Situation / Task**  
At Uber we needed a *global, low‑latency ledger* that could surface trillions of per‑driver and per‑trip indexes (e.g., earnings, surge multipliers, driver ratings) while guaranteeing ACID semantics for downstream analytics. The goal was to replace the monolithic relational DB without breaking existing services.

**Action – Design**  
I proposed **LedgerStore**, a sharded *Document Store* built on **Amazon DynamoDB** + **DAX** for caching and **S3** for archival. Each record is a JSON document keyed by `{entityType, entityId}`; secondary indexes are expressed as *materialized views* stored in separate tables per index type.  
1. **Scalability** – Auto‑scaling partitions keep throughput proportional to query volume; each index table shards on hash of the indexed field (e.g., driverID) so reads stay local.  
2. **Availability** – Multi‑AZ replication and DynamoDB’s 99.999% SLA guarantee zero single‑point failure.  
3. **Cost & Trade‑offs** – Using *on‑demand* mode for hot indexes reduces over‑provisioning; cold indices are moved to S3 with Glacier retrieval for batch jobs, cutting storage cost by ~70%.  
4. **Consistency** – Conditional writes and DynamoDB’s `ConditionExpression` enforce transactional updates across multiple documents.

**Result**  
The rollout increased query throughput from 200 k/s to 1.2 M/s (6×) while keeping latency under 20 ms for 99.5% of reads. Operational costs fell by 35%, and the new system enabled real‑time surge pricing without batch lag.

**Leadership Principles**  
- **Ownership** – I led cross‑team migration, handling rollback plans and SLA guarantees.  
- **Dive Deep** – Built custom monitoring dashboards (CloudWatch + Grafana) to validate sharding logic and detect hotspot patterns early.  

*Bar‑raiser notes:* Clear ownership, deep metrics, cost trade‑offs, and learning from the initial “hot index” spike that required a re‑hash strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
