---
qid: ing_4f254eb99e__faang__local
question: 'Explain: Distributed Job Queue — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 568
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:35-05:00'
sources: []
---

**Clarify**

> *Goal:* Build a distributed job scheduler that accepts user‑submitted jobs (batch or stream), distributes them across worker nodes, guarantees at‑least‑once execution, and scales horizontally.  
> **Assumptions to confirm:**  
> 1. Workload mix (CPU vs I/O heavy).  
> 2. SLA requirements (latency, throughput).  
> 3. Failure model (network partitions, node crashes).  
> 4. Persistence needs (job durability, retries).  

**Approach**

1. **Job ingestion layer** – REST/GRPC API + Kafka topic (`jobs`).  
2. **Metadata store** – Cassandra / DynamoDB for job state (queued, running, failed).  
3. **Scheduler service** – pulls from `jobs` topic, assigns to worker nodes via a round‑robin or priority queue in Redis.  
4. **Worker nodes** – long‑running processes that poll the scheduler’s assignment store and execute jobs.  
5. **Heartbeat & health checks** – workers register in ZooKeeper; scheduler marks tasks as failed if heartbeat stops.  

**Depth**

- *Enqueue:* API writes job meta + payload to Kafka → durable storage.  
- *Dispatch:* Scheduler consumes from Kafka, writes an “assignment” record (job_id → worker_id) into Redis with a TTL.  
- *Execution:* Worker reads assignment, pulls payload from S3/DB, runs task, reports status back to metadata store.  
- *Retry logic:* On failure or heartbeat loss, scheduler re‑queues job after exponential backoff.  

*Complexities*:  
- Kafka → O(1) enqueue; Scheduler poll O(log N).  
- Redis TTL ensures at‑most‑once delivery per worker.  
- Consistency achieved via idempotent job execution.  

**Edge Cases**

- Network partition: scheduler may double‑assign; use unique request IDs for idempotence.  
- Worker crash mid‑run: heartbeat timeout triggers retry.  
- Job size > memory: stream payload from S3 instead of in‑memory.  

**Optimize & Communicate**

- **Batch dispatching:** pull N jobs per poll to reduce network chatter.  
- **Back‑pressure:** pause ingestion if Redis queue grows beyond threshold.  
- **Observability:** Prometheus metrics (queue depth, latency), OpenTelemetry tracing for end‑to‑end job flow.  

Explain trade‑offs: Kafka guarantees order & durability but adds latency; Redis offers fast assignment but requires TTL management. Highlight that the design balances throughput, fault tolerance, and simplicity—key signals for a top‑tier interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
