---
qid: ing_22a0d7db06__faang__local
question: 'Explain: In-Progress Jobs — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 462
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:04:44-05:00'
sources: []
---

**Clarify**

You want a system that accepts jobs (e.g., ML training tasks), keeps them in progress, and ensures they finish reliably across many workers.  
Assumptions to confirm:  
* Jobs are idempotent or can be rolled back.  
* Workers may fail or leave the cluster at any time.  
* We need strong guarantees of *exact‑once* completion and minimal latency for scheduling decisions.

**Approach**

1. **Job Queue & Metadata Store** – use a distributed log (Kafka/Redis Streams) to enqueue jobs; persist state in a replicated KV store (etcd/Cassandra).  
2. **Scheduler Service** – polls the queue, assigns jobs to workers via a worker‑registry service that tracks availability and capacity.  
3. **Heartbeat & Lease** – each worker sends periodic heartbeats; leases expire after *N* seconds → job is re‑queued if heartbeat missing.  
4. **Result Collector** – on completion, worker writes result + status atomically to the KV store; scheduler updates job state to `COMPLETED`.  

**Depth**

- **Complexity:** enqueue O(1); scheduling O(log W) where *W* is workers; re‑queueing cost amortized.  
- **Fault tolerance:** replication of metadata ensures no single point of failure; leases prevent lost jobs.  
- **Scalability:** Kafka partitions allow linear scaling of job ingestion; worker registry can shard by region.

**Edge Cases**

- Duplicate heartbeats → idempotent lease renewals.  
- Network partition: workers may think the scheduler is down; use consensus (Raft) to elect a leader for state updates.  
- Job size > memory: spill to disk or split into sub‑jobs.

**Optimize & Communicate**

Explain that we trade a slight overhead in heartbeat traffic for strong reliability. Highlight how we monitor metrics (job latency, re‑queue rate) and plan to add exponential backoff for retries. Conclude by summarizing the end‑to‑end flow: enqueue → schedule → execute → complete, with guarantees of at most once execution even under failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
