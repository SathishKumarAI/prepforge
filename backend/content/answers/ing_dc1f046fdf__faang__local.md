---
qid: ing_dc1f046fdf__faang__local
question: 'Explain: Distributed Job Scheduler — System Design Interview Cheat Sheet
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 494
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:15-05:00'
sources: []
---

**Distributed Job Scheduler – Cheat‑Sheet**

| Stage | What to cover |
|-------|---------------|
| **Clarify** | “We need a system that accepts arbitrary jobs (batch, streaming), schedules them on a cluster, guarantees fault‑tolerance and provides visibility.”  Ask: *What are the latency/throughput targets?* *How many concurrent users/jobs?* *Do we need multi‑tenant isolation?* |
| **Approach** | 1️⃣ **Job Ingestion** – REST/GRPC API + message queue (Kafka). <br>2️⃣ **Metadata Store** – relational DB or etcd for job DAGs, state, ownership. <br>3️⃣ **Scheduler Core** – pull jobs from queue, apply priority & resource constraints, emit placement intents. <br>4️⃣ **Executor Layer** – worker nodes (K8s pods) that pull intents, run containers, report status. <br>5️⃣ **Recovery** – heartbeats + leader election; on failure, re‑enqueue job. |
| **Depth** | Scheduler algorithm: *Earliest Deadline First* with backpressure. Use *resource pool* abstraction so workers advertise available CPU/mem. Complexity: O(log N) for priority queue ops; O(1) placement lookup if hash‑partitioned. Fault‑tolerance via leader election (Raft). |
| **Edge Cases** | • Job timeouts or infinite loops → worker watchdog.<br>• Conflicting resource requests → throttling, back‑off.<br>• Schema changes in job metadata → optimistic locking. |
| **Optimize & Communicate** | 1️⃣ **Horizontal scaling** – partition the scheduler by namespace; each shard runs its own leader. <br>2️⃣ **Caching** – keep hot jobs in memory to avoid DB round‑trips. <br>3️⃣ **Observability** – metrics (queue depth, job latency), tracing per job.  Explain trade‑offs: tighter consistency vs higher throughput, larger cache vs memory cost. |

*Key takeaways for interviewers:* clear problem restatement, step‑by‑step design plan, algorithmic choices with complexity, edge‑case coverage, and a concise discussion of scalability & observability—all within ~200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
