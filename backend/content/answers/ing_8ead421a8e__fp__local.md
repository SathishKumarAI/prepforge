---
qid: ing_8ead421a8e__fp__local
question: 'Explain: Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 384
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:08:28-05:00'
sources: []
---

**Functional Requirements – Distributed Job Scheduler**

1. **Job ingestion & queuing**  
   *Why?* A scheduler is a bottleneck only if it cannot absorb bursts. We need an append‑only log (Kafka/Redis Streams) that guarantees at‑least‑once delivery and preserves ordering per job family.  

2. **Task placement & resource accounting**  
   *Why?* Each worker has finite CPU, memory, I/O. The scheduler must maintain a global state graph of node capacities and enforce constraints via an admission control policy (e.g., max‑concurrency, back‑pressure).  

3. **Fault tolerance & retry logic**  
   *Why?* In a distributed setting failures are inevitable. The system must detect stale heartbeats, re‑queue failed tasks with exponential back‑off, and support idempotent execution via unique task IDs.  

4. **Scalability & partitioning**  
   *Why?* To avoid the scheduler becoming a single point of contention, we shard jobs by hash(key) and replicate metadata (Raft/Consul). Workers poll only their shard, reducing coordination traffic.  

5. **Observability & SLA enforcement**  
   *Why?* Operators need latency metrics, success rates, and dead‑letter queues for outliers. The scheduler exposes Prometheus metrics and an API to adjust QoS tiers dynamically.

**Non‑obvious insight:** Treat the scheduler as a *constraint‑satisfaction solver* rather than a queue manager. Every scheduling decision is a linear program over resource constraints; by exposing this abstraction, we can plug in advanced optimizers (e.g., greedy + local search) that automatically improve utilization without changing API contracts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
