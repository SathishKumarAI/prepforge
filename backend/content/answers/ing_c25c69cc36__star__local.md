---
qid: ing_c25c69cc36__star__local
question: 'Explain: Replication — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 359
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:37-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection platform at FinTechX, our nightly batch model processed 1 M transaction records and stored predictions in a PostgreSQL cluster. After a spike in user growth, the query latency jumped from 200 ms to 3 s during peak hours, threatening SLA breaches.

**Task:**  
Redesign the database layer so it could handle 10× the write volume, keep read latency under 300 ms, and support real‑time model inference without downtime.

**Action:**  
1. Decomposed monolith into a horizontally scalable PostgreSQL cluster using Patroni for HA and logical replication to sync shards.  
2. Implemented partitioning on the `predictions` table by date and added a composite index on `(user_id, created_at)` to accelerate point lookups.  
3. Migrated hot reads to a read‑replica pool backed by Citus, enabling distributed joins across 8 nodes.  
4. Employed Kafka for change data capture (CDC), streaming new predictions into an in‑memory Redis cache for instant inference.  
5. Benchmarked with pgbench and adjusted replica lag thresholds; automated failover scripts ensured zero manual intervention.

**Result:**  
Write throughput increased to 12 M TPS, read latency dropped to 180 ms on average, and the system sustained a 15× traffic surge during a regulatory audit without outages. I learned that proactive partitioning combined with real‑time CDC can turn a brittle monolith into a resilient, scalable data backbone for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
