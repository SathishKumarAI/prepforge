---
qid: ing_8ead421a8e__faang__local
question: 'Explain: Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 490
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:15:51-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *distributed job scheduler* (e.g., for batch jobs, ETL pipelines). I’ll assume: • Jobs are independent or have explicit dependencies. • We need high availability, fault‑tolerance, and linear scalability. • Metrics: throughput, latency, SLA compliance. • No single point of failure; nodes can join/leave dynamically.

**Approach**  
1. **Architecture layers** – API gateway → Scheduler service (leader election) → Task queue → Workers.  
2. **State store** – Use a distributed KV store (etcd/Consul or Raft‑based DB) to keep job metadata, DAGs, and worker heartbeats.  
3. **Scheduling algorithm** – Topological sort of DAG, then priority‑queue + resource estimation; use a *token bucket* per worker for rate limiting.  
4. **Worker discovery** – Workers register with the scheduler, publish capacity. Scheduler pushes jobs via message broker (Kafka/NSQ).  
5. **Failure handling** – Heartbeats → if missing > timeout, mark worker dead and re‑enqueue tasks. Use idempotent job execution or versioned payloads.

**Depth**  
- *Complexity*: Scheduling O(V+E) for DAG build; dispatching O(log N) per task (priority queue).  
- *Scalability*: Adding a node increases capacity linearly; leader election ensures only one scheduler instance runs.  
- *Consistency*: Raft guarantees linearizable reads/writes of job state, preventing duplicate execution.

**Edge Cases**  
- Cyclic dependencies → reject job submission.  
- Long‑running tasks that crash mid‑execution → use checkpoints or replay logs.  
- Sudden worker surge → backpressure via token bucket.

**Optimize & Communicate**  
Start with a single‑leader design for simplicity, then explain adding a *secondary scheduler* for failover and sharding job queues per region to reduce latency. Emphasize observability: expose Prometheus metrics (queue depth, task latencies) and log structured events for debugging. Conclude by summarizing trade‑offs: stronger consistency vs. higher latency; more workers vs. increased coordination overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
