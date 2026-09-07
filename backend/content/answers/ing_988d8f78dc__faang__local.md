---
qid: ing_988d8f78dc__faang__local
question: 'Explain: System API Design — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 510
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:39:19-05:00'
sources: []
---

**Clarify**  
We need a distributed scheduler that accepts job definitions (cron‑style or one‑off), assigns them to workers across data centers, guarantees at‑least‑once execution, handles failures, and scales to millions of jobs. Key assumptions: *jobs are stateless, may run on any worker; workers register via heartbeat; we can use a shared DB/coordination service.*  

**Approach**  
1. **API layer** – REST/GRPC for Create/Read/Update/Delete (CRUD) job metadata.  
2. **Metadata store** – a sharded NoSQL table keyed by `job_id` + schedule hash; store next run time, retries, status.  
3. **Scheduler service** – a pool of stateless scheduler instances that poll the store for due jobs (e.g., using a priority queue in Redis or a “next_run” index).  
4. **Worker registry** – workers register to ZooKeeper/Consul; heartbeats keep an up‑to‑date list of healthy nodes.  
5. **Dispatch** – scheduler pulls a due job, picks a worker (round‑robin or weighted by load), and pushes the job via message queue (Kafka).  
6. **Execution & ack** – worker runs job, posts result/heartbeat to Kafka; scheduler marks success or schedules retry after backoff.

**Depth**  
- *Complexity*: CRUD ops O(log n) on sharded store; dispatch is O(1).  
- *Fault tolerance*: if a scheduler dies before ack, job stays in “pending” and will be re‑fetched.  
- *Scalability*: horizontal scaling of schedulers and workers; sharding keeps metadata operations bounded.

**Edge Cases**  
- Clock drift → use NTP or logical clocks for scheduling.  
- Network partitions → eventual consistency; jobs may run twice, acceptable if idempotent.  
- Burst loads → backpressure via Kafka consumer lag metrics.

**Optimize & Communicate**  
To reduce latency, cache the “next_run” list in Redis and push expirations to workers. For reliability, implement a lease on job assignment (e.g., set `assigned_to` with TTL). I would explain this flow diagrammatically, highlighting how each component isolates failure modes and scales independently—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
