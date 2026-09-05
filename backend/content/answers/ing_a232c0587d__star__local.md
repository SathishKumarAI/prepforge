---
qid: ing_a232c0587d__star__local
question: 'Explain: Job Store — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 366
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:03-05:00'
sources: []
---

**Situation** – At my previous company we had a batch analytics platform that ran hundreds of nightly ETL jobs on a Kubernetes cluster. The existing cron‑based scheduler was brittle: when the cluster rebooted or a node failed, jobs would either double‑run or be lost, and we couldn’t guarantee exactly‑once execution across regions.

**Task** – I was tasked with designing a fault‑tolerant distributed job store that could schedule, track, and replay jobs at scale (10k+ tasks per day) while ensuring idempotent execution and minimal latency for trigger queries.

**Action** – I chose a CQRS pattern: a write side built on Apache Kafka topics for immutable event streams (“JobCreated”, “JobScheduled”, “JobCompleted”), and a read side using Cassandra to materialize job state per node. A lightweight “Scheduler Service” consumes the stream, assigns jobs to worker pods via gRPC, and persists heartbeats in Redis for quick liveness checks. To avoid double‑execution I added a unique deduplication key (jobId+runId) stored in a distributed lock service (etcd). We also introduced a retry policy with exponential backoff and a dead‑letter queue for permanently failing jobs.

**Result** – After deployment, job loss dropped from 3% to <0.01%, average scheduling latency improved by 30 ms, and the system now supports multi‑region failover with zero downtime. I learned that coupling an immutable event log with a fast read model is key for distributed schedulers, and that proper idempotency handling saves both time and engineering effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
