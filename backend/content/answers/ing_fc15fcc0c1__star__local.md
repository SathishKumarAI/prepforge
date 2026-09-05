---
qid: ing_fc15fcc0c1__star__local
question: 'Explain: Scheduling Service — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 336
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:49-05:00'
sources: []
---

**Situation** – While leading the backend team at a SaaS analytics firm, we had a batch‑processing pipeline that ran 300+ nightly jobs across three regions. The existing cron‑based scheduler caused race conditions, duplicate runs, and no SLA guarantees for high‑priority tasks.

**Task** – Build a fault‑tolerant distributed job scheduler that ensures exactly‑once execution, respects priority queues, and scales to 10k concurrent jobs per hour while providing real‑time status dashboards.

**Action** – I designed a master–worker architecture using Kafka for the job queue and ZooKeeper for leader election. Jobs are stored in a PostgreSQL table with a `status` column and a `scheduled_time`. A lightweight “scheduler” service pulls from Kafka, assigns jobs to worker nodes via gRPC, and writes back completion timestamps. To guarantee idempotence I added a hash‑based deduplication layer and leveraged Redis for distributed locks on job IDs. Workers run in Docker containers orchestrated by Kubernetes; the scheduler automatically scales based on queue depth. Metrics are exposed through Prometheus, and alerts trigger if any job exceeds its SLA.

**Result** – The new system cut duplicate executions to <0.01%, reduced average latency from 45 min to 12 min, and increased throughput to 15k jobs/hour. I learned that combining a message broker with distributed locking balances scalability and consistency, and that observability is key for maintaining SLAs in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
