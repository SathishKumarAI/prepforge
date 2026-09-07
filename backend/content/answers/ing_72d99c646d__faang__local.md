---
qid: ing_72d99c646d__faang__local
question: 'Explain: Coordinator — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 472
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:05-05:00'
sources: []
---

**Clarify**  
We need a distributed job scheduler that accepts jobs (ETL, ML training, inference) and assigns them to worker nodes across multiple clusters while respecting constraints: resource limits, dependencies, fault‑tolerance, and SLA guarantees. Assume we have persistent storage (e.g., etcd/Consul), a message broker (Kafka), and stateless workers.

**Approach**  
1. **Job ingestion layer** – REST API + Kafka producer to enqueue jobs.  
2. **Metadata store** – relational DB or NoSQL for job definitions, state, DAGs.  
3. **Scheduler engine** – runs on a master node; pulls ready jobs from the queue, evaluates resource availability via a *resource manager* (e.g., Kubernetes API).  
4. **Executor dispatcher** – pushes job assignments to workers through a lightweight protocol (gRPC) or via Kafka topics per worker pool.  
5. **Heartbeat & health check** – workers publish liveness; scheduler reschedules on timeout.  
6. **Retries & back‑off** – exponential back‑off, max attempts stored in metadata.

**Depth**  
- Scheduler complexity: O(n log n) for priority queue of ready jobs.  
- Worker load balancing via consistent hashing or Kubernetes pod affinity.  
- Fault tolerance: use Kafka’s consumer group rebalancing; store job state idempotently so resubmission is safe.  
- SLA enforcement: assign priorities and track latency, trigger alerts if deadlines miss.

**Edge Cases**  
- Circular dependencies → detect during DAG validation.  
- Resource starvation → implement fair‑share or quota limits.  
- Network partitions → rely on Kafka’s replication to avoid lost jobs.  
- Worker crash mid‑task → heartbeat timeout triggers reschedule; use checkpoints for long ML training.

**Optimize & Communicate**  
Future improvements: autoscale workers based on queue depth, integrate with a job‑level scheduler like Airflow for complex DAGs, and add predictive scaling using ML to forecast load. I’d present this flow diagrammatically, walk through a sample job lifecycle, and highlight trade‑offs between consistency (strict ordering) vs. throughput (batching).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
