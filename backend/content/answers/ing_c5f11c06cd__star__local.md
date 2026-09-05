---
qid: ing_c5f11c06cd__star__local
question: 'Explain: 4.1 SQL vs NoSQL — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 339
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:53-05:00'
sources: []
---

**Situation**  
I was tasked at my previous company to build a distributed job scheduler that could queue, execute, and retry batch jobs across hundreds of worker nodes while guaranteeing exactly‑once execution and providing real‑time visibility for ops.

**Task**  
Design a system that scales horizontally, handles high write throughput from producers, and supports complex queries (e.g., job status over time) without sacrificing consistency or latency.

**Action**  
I chose a hybrid storage model: **NoSQL** (Cassandra) for the event stream of job submissions and state changes because it offers linear scalability and tunable consistency; we set QUORUM reads to ensure eventual correctness. For relational analytics—like aggregating failures per service, joining with SLA tables—I used an **SQL** database (PostgreSQL) with materialized views updated by a change‑data‑capture pipeline from Cassandra via Debezium. Workers poll a lightweight “ready” queue in Redis for low‑latency dispatch, and use the Cassandra write to record execution start. I implemented idempotent job handlers and leveraged Kafka for replaying failed jobs. Monitoring dashboards query PostgreSQL for SLA metrics while real‑time status comes from Redis.

**Result**  
The scheduler handled 1 M jobs/day with <50 ms dispatch latency, reduced duplicate executions by 99%, and cut ops incidents related to missed jobs by 70%. I learned that combining NoSQL’s horizontal scalability with SQL’s strong analytical power often yields the best trade‑off for distributed job systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
