---
qid: ing_a683868419__star__local
question: 'Explain: High Level Design — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 344
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:07-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a data‑pipeline platform that processed user telemetry in near real‑time. The existing cron‑based scheduler couldn’t scale beyond 200 jobs per minute and had no fault tolerance.

**Task:**  
I was tasked with designing a distributed job scheduler that could handle 10,000+ jobs/second, guarantee at-least‑once execution, and automatically recover from node failures without manual intervention.

**Action:**  
I started by modeling the workload as a DAG of tasks. I chose Apache Kafka for event streaming to decouple producers (job submitters) from consumers (scheduler workers). A lightweight ZooKeeper ensemble stored job metadata and lock information; each worker fetched a batch of jobs from a partitioned “ready” topic, claimed them via optimistic concurrency on ZooKeeper, and executed them using containerized workers in Kubernetes. I implemented a retry back‑off strategy with exponential jitter to avoid thundering herd, and used Redis Streams for dead‑letter queues. To guarantee fairness, I introduced token bucket throttling per tenant. Monitoring was built into Prometheus/Grafana dashboards that tracked job latency, success rates, and worker health.

**Result:**  
The new scheduler handled 12,000 jobs/second with <150 ms average latency and a 99.8% success rate under peak load. Failure recovery was automatic—worker restarts re‑queued orphaned jobs within seconds. I learned that decoupling scheduling logic from execution via streaming primitives simplifies scaling, and that observability is critical for diagnosing distributed race conditions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
