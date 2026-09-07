---
qid: ing_fdc96e1954__faang__local
question: 'Explain: Non-Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 488
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:30:09-05:00'
sources: []
---

**Clarify**

We need a *distributed job scheduler* that can accept, schedule, and execute arbitrary jobs across many worker nodes.  
Assumptions:  
• Jobs are stateless or provide their own state persistence.  
• Workload is bursty; some jobs may be long‑running.  
• SLA: 99.9 % availability, latency ≤ 1 s for job start.  
• Workers can join/leave at any time.

**Approach**

1. **Decouple components** – API gateway → Scheduler service → Worker pool.  
2. **Central coordination** – Use a consistent key‑value store (e.g., etcd) to keep the queue and node registry.  
3. **Distributed lock + heartbeat** for worker liveness.  
4. **Job assignment** – Scheduler polls ready jobs, picks an available worker via round‑robin or least‑loaded strategy, writes job metadata into a per‑worker queue (Kafka topic).  
5. **Fault tolerance** – If a worker fails heartbeats, the scheduler requeues its in‑flight jobs.

**Depth**

- *Scheduler* runs as stateless pods; each instance reads from etcd using CAS to claim a job (`etcd txn`). Complexity: O(log N) per claim.  
- *Worker* subscribes to its Kafka partition; workers are idempotent, so retries are safe.  
- Persistence of job results in S3 + metadata in DynamoDB for fast lookup.  
- Autoscaling: monitor queue depth → scale scheduler pods; monitor worker lag → spawn more workers.

**Edge Cases**

- Duplicate job submission → deduplication key stored in etcd.  
- Network partition → split‑brain avoided by quorum reads/writes.  
- Job failure after partial execution → worker reports status, scheduler retries up to N times.

**Optimize & Communicate**

We can shard the queue per namespace to reduce contention, add priority queues for critical jobs, and use Bloom filters to speed membership checks. I’d explain trade‑offs: stronger consistency (etcd) vs latency, or eventual consistency with a broker like Kafka for higher throughput. This structure shows clear reasoning, scalability, fault tolerance, and aligns with FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
