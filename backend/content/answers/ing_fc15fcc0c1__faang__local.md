---
qid: ing_fc15fcc0c1__faang__local
question: 'Explain: Scheduling Service — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 464
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:26:00-05:00'
sources: []
---

**Clarify**  
We need a distributed system that accepts jobs (compute‑intensive or I/O‑bound), stores their metadata, and guarantees execution on the right worker nodes while handling failures, scaling, and backpressure.  
Assumptions to confirm:  
- Jobs are stateless once queued; state is persisted externally.  
- Workers can be added/removed dynamically.  
- SLA: at least 99.9 % job completion within a configurable window.  

**Approach**  
1. **API layer** – REST/GRPC endpoint that persists jobs in a durable queue (e.g., Kafka, SQS).  
2. **Scheduler tier** – a stateless scheduler service that pulls batches from the queue, assigns to workers via consistent hashing or a central registry.  
3. **Worker nodes** – pull assigned jobs, report status back to a coordination store (etcd/Consul).  
4. **Failure handling** – heartbeats; if a worker dies, its jobs are re‑queued.  
5. **Scaling** – autoscale workers based on queue depth; scheduler instances behind a load balancer.  

**Depth**  
- Queue → ensures durability and decouples submission from execution.  
- Scheduler uses round‑robin + priority queues for fairness.  
- Complexity: O(1) assignment, O(n log n) if we maintain a heap of worker loads.  
- Trade‑off: Central scheduler can be a bottleneck; mitigate with sharding or gossip protocols.

**Edge Cases**  
- Duplicate job submissions → dedup via idempotent key in queue.  
- Long‑running jobs exceeding SLA → trigger escalation to a “retry” queue.  
- Network partitions → use consensus (Raft) for status consistency.

**Optimize & Communicate**  
Explain that we can replace the single scheduler with a peer‑to‑peer assignment protocol if latency becomes critical, and highlight monitoring dashboards for SLAs. This narrative shows structured thinking, clear assumptions, depth in design choices, and awareness of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
