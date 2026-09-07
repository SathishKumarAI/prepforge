---
qid: ing_a232c0587d__faang__local
question: 'Explain: Job Store — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 503
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:01:31-05:00'
sources: []
---

**Clarify**  
We need a *distributed* scheduler that accepts jobs (with optional dependencies, priority, time windows), persists them, and guarantees at‑least‑once execution across many worker nodes.  
Assumptions to confirm:  
- Jobs are stateless once dispatched.  
- Workers report completion; retries on failure.  
- Scale: thousands of jobs per second, hundreds of workers.

**Approach**  
1. **API Layer** – REST/GRPC for `Submit`, `Cancel`, `Status`.  
2. **Job Store** – sharded NoSQL (Cassandra/Spanner) keyed by job ID; secondary index on *nextRun* timestamp.  
3. **Scheduler Service** – a cluster of stateless workers that poll the store for jobs whose `nextRun ≤ now` and lock them via lightweight lease (compare‑and‑set).  
4. **Execution** – dispatch to worker nodes through a message queue (Kafka/NSQ) guaranteeing at‑least‑once delivery.  
5. **Retry & Dead‑Letter** – exponential backoff, max attempts; failed jobs go to DLQ for manual inspection.

**Depth**  
- *Locking*: use optimistic concurrency on the `lockedBy` field; if two schedulers pick the same job, only one succeeds.  
- *Complexity*:  
  - Submit: O(log N) for index update.  
  - Scheduler poll: O(k log S) where k=jobs polled, S=shards.  
  - Queue delivery: amortized O(1).  
- *Fault tolerance*: replicas of the job store; queue guarantees message persistence.

**Edge Cases**  
- Clock skew between schedulers → use NTP or logical clocks.  
- Network partitions causing duplicate dispatches → idempotent workers.  
- Sudden surge in jobs → backpressure via Kafka topic partition scaling.

**Optimize & Communicate**  
To reduce latency, keep a *priority queue* per shard in memory (e.g., Reddis sorted set) that mirrors the store; schedulers pull from it and sync to DB on commit. Explain trade‑offs: extra cache consistency cost vs. lower poll latency. Conclude by highlighting how this design scales horizontally, tolerates failures, and meets SLA requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
