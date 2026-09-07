---
qid: ing_65827c7c51__faang__local
question: 'Explain: Requirements Gathering — Design a Distributed Job Scheduler -
  System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 501
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:31-05:00'
sources: []
---

**Clarify**  
We need to design a *distributed job scheduler* that accepts user‑defined jobs (cron, one‑off, recurring), runs them on a cluster of workers, guarantees at‑least‑once or exactly‑once semantics, and provides visibility/alerting. Assume: millions of jobs per day, low latency for scheduling decisions, high fault tolerance, and horizontal scalability.

**Approach**  
1. **Architecture layers** – API gateway → Scheduler service (coordinator) → Worker pool → Persistence layer (metadata + job queue).  
2. **Job metadata store** – a distributed KV/DB (e.g., Cassandra or DynamoDB) for idempotent job definitions and state.  
3. **Task queue** – a partitioned message broker (Kafka/Kinesis) where each worker pulls tasks from its assigned partitions.  
4. **Worker health & lease** – workers register in ZooKeeper/etcd; the scheduler assigns jobs based on load, reassigns on failure.

**Depth**  
- *Scheduling*: Scheduler polls metadata store for due jobs, writes a “ready” record to Kafka with unique task ID.  
- *Execution*: Workers consume tasks, lock via DB transaction (optimistic concurrency), execute job code, report success/failure back to scheduler.  
- *Exactly‑once*: Use idempotent job handlers; dedupe by checking task ID before execution.  
- *Fault tolerance*: If a worker dies mid‑execution, its lease expires; the scheduler requeues the task.  
- *Complexity*: O(log N) for metadata lookups, constant amortized cost per message in Kafka.  

**Edge Cases**  
- Duplicate task IDs → dedupe logic.  
- Clock skew between nodes → use NTP or logical clocks.  
- Long‑running jobs vs. worker timeouts → implement heartbeat/keepalive.  
- Scaling workers → dynamic partition reassignment.

**Optimize & Communicate**  
We can shard the job store by hash of job ID to balance load, and use vector clocks for conflict resolution. Explain that each component is stateless except for the persistence layer, enabling horizontal scaling. Highlight trade‑offs: Kafka gives high throughput but eventual consistency; a relational DB offers stronger guarantees at cost of latency. Conclude with monitoring hooks (metrics, logs) and how to iterate on capacity planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
