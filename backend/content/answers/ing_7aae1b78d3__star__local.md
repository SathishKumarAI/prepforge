---
qid: ing_7aae1b78d3__star__local
question: 'Explain: 4.2 Scaling Scheduling Service — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 375
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:25-05:00'
sources: []
---

**Situation** – While leading the data‑pipeline team at a fintech startup, our batch processing jobs were hitting peak times and overloading a single node scheduler. The SLA required 99% of jobs to finish within 2 hrs, but we were seeing 30 % of runs stall behind each other.

**Task** – Design a horizontally scalable distributed job scheduler that balances load, guarantees ordering for dependent tasks, and recovers from node failures without manual intervention.

**Action** – I chose Apache Kafka as the event bus to publish job intents and used ZooKeeper for leader election. The scheduler was split into three services:  
1) **Job Manager** – receives job definitions, validates DAGs, and writes a “ready” message to Kafka.  
2) **Worker Nodes** – consume ready jobs from a partitioned topic, run them via Docker containers, and emit status updates.  
3) **State Store** (Redis Cluster) – keeps per‑job metadata (status, retries, back‑off). I implemented optimistic locking with Lua scripts to avoid race conditions when multiple workers claim the same job. For fault tolerance, each worker writes heartbeats; if a heartbeat is missed for 30 s, the Job Manager requeues the task.

**Result** – After deployment, we cut average job completion time from 3.2 hrs to 1.4 hrs and increased throughput by 250 %. The system handled 10× the concurrent jobs with zero manual scaling, and I learned that coupling Kafka’s partitioning with Redis’ atomic operations is key for resilient distributed scheduling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
