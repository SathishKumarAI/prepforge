---
qid: ing_513db852a0__faang__local
question: 'Explain: Job Table — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 431
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:53:24-05:00'
sources: []
---

**Clarify**  
We need a system that accepts jobs (batch or streaming), assigns them to workers across a cluster, guarantees correct ordering/serialization, and scales horizontally while handling failures. Assume we have: *n* worker nodes, *m* job types, no single‑point failure, 99.9 % availability.

**Approach**  
1. **Decouple ingestion & execution** – an HTTP API pushes jobs into a durable queue (Kafka/Redis Streams).  
2. **Partitioned work queues** – each worker subscribes to a topic partition; partitions map to job types or hash‑ranges for load balance.  
3. **Lease‑based lock** – workers claim a lease on a job record in a distributed KV store (etcd/Consul) to avoid duplicate execution.  
4. **Execution & feedback** – worker runs the task, writes status back to a results store (PostgreSQL + write‑ahead log).  
5. **Failure handling** – if a lease expires or the worker dies, another worker retries after exponential backoff.

**Depth**  
- *Throughput*: Kafka guarantees >10k msgs/s per partition; horizontal scaling adds partitions.  
- *Consistency*: Exactly‑once semantics via idempotent workers and transactional writes to the results DB.  
- *Latency*: Queueing delay <100 ms under normal load, increased by backpressure.  
- *Complexity*: O(1) for enqueue/dequeue, O(log n) for lease acquisition.

**Edge Cases**  
- Duplicate job IDs → deduplication in queue consumer.  
- Worker overload → dynamic partition reassignment.  
- Network partitions → fallback to a secondary queue or quorum‑based lock.

**Optimize & Communicate**  
We can batch status writes, use a CDN for static results, and monitor with Prometheus. I’d explain trade‑offs (e.g., Kafka vs Redis Streams) and how each component guarantees scalability, reliability, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
