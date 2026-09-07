---
qid: ing_785908e539__faang__local
question: 'Explain: Pending Jobs (Not Started) — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 504
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:59-05:00'
sources: []
---

**Clarify**

You’re asked to build a *distributed job scheduler* that tracks jobs in the “Pending” state (not yet started).  
Key assumptions:  
1. Jobs are submitted by users or services, may have dependencies, and can be retried on failure.  
2. The system must scale to millions of concurrent jobs, guarantee at‑least‑once execution, and provide visibility into job status.  
3. Availability is critical – the scheduler should not lose pending jobs even if a node fails.

**Approach**

1. **API Layer** – REST/GRPC for submit/query/delete.  
2. **Persistence** – a write‑through Kafka topic + durable store (Cassandra) to capture job metadata.  
3. **Scheduler Nodes** – stateless workers that poll the “pending” queue, claim jobs via optimistic locking, and push to a worker pool.  
4. **Worker Pool** – separate executors (e.g., Kubernetes pods) that actually run jobs; they report completion back to scheduler.  
5. **Monitoring & Retry** – use a time‑wheel for retries, exponential backoff, and dead‑letter queue.

**Depth**

- *Job claim* uses a compare‑and‑set on the “status” field in Cassandra (PENDING→RUNNING).  
- Scheduler nodes read from Kafka offsets to stay idempotent; if a node crashes before committing the status change, another node can re‑claim.  
- Complexity: O(1) per job claim; throughput bounded by Kafka and Cassandra write latency (~10–20 ms).  
- Trade‑off: using two systems (Kafka + Cassandra) gives durability but adds operational overhead.

**Edge Cases**

- Duplicate submissions → deduplication via unique job ID in Cassandra.  
- Clock skew across nodes → rely on event time from Kafka, not system clock.  
- Partition failure → replicas ensure no single point of loss; pending jobs re‑appear after offset rewind.

**Optimize & Communicate**

Explain that adding a *lease* mechanism (TTL) for RUNNING jobs prevents starvation and allows graceful recovery. Show how metrics (pending count, processing latency) feed into autoscaling the scheduler pool. Conclude with a brief diagram and highlight the key trade‑offs you’d discuss in an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
