---
qid: ing_a683868419__faang__local
question: 'Explain: High Level Design — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 716
total_tokens: 954
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:06-05:00'
sources: []
---

**Clarify**

We’re building a *Distributed Job Scheduler* that accepts user‑defined jobs (cron, ad‑hoc, DAGs), schedules them across many worker nodes, and guarantees at‑least‑once execution with fault tolerance.  
Key assumptions to confirm:  
- Scale? 10⁵+ jobs, 10³ workers.  
- SLA: ≤ 5 s latency from submit → run.  
- Job state (queued, running, failed) must survive node failures.  
- Jobs can be long‑running or short; we need retry/backoff.

**Approach**

1. **API Layer** – REST/GRPC to accept job definitions and status queries.  
2. **Metadata Store** – distributed KV store (e.g., etcd, Cassandra) for job descriptors, worker heartbeats, lease info.  
3. **Scheduler Service** – stateless microservice that pulls jobs from a priority queue (Kafka or Redis Streams).  
4. **Worker Registry & Lease** – each worker registers and periodically renews a lease; scheduler assigns jobs to workers with the lowest load.  
5. **Execution Engine** – workers pull assigned job, run it in a container, report completion/failure back to Scheduler.  
6. **Retry / Backoff Policy** – stored per job type; Scheduler re‑queues failed jobs with exponential backoff.  
7. **Observability** – metrics (Prometheus), logs, and tracing (OpenTelemetry).  

**Depth**

- **Job Queue**: Use a partitioned Kafka topic keyed by `job_type` to balance load. Each message includes job payload, retries left, and timestamp.  
- **Worker Lease**: Store in etcd with TTL; if a worker dies, its lease expires and Scheduler re‑queues pending jobs.  
- **Scheduling Algorithm**: Weighted round‑robin plus dynamic scaling—Scheduler tracks `active_jobs` per worker; selects the one with minimal queue length. Complexity O(log N) using a min‑heap of workers.  
- **Fault Tolerance**: All critical state in replicated KV store. Scheduler is stateless, so any instance can take over. Workers acknowledge job completion; if no ack within timeout, Scheduler marks job as failed and requeues.  
- **Scalability**: Horizontal scaling of Scheduler instances behind a load balancer; each reads from Kafka partitions.  

**Edge Cases**

- *Clock skew*: use logical timestamps in job metadata to order events.  
- *Duplicate executions*: idempotent job IDs; workers check `completed_jobs` set before running.  
- *Network partition*: etcd quorum ensures consistent leases; Scheduler may become unavailable temporarily.  
- *Burst of jobs*: Kafka’s back‑pressure and consumer group scaling handle spikes.

**Optimize & Communicate**

- **Performance**: Use in‑memory caching for worker metrics to reduce KV lookups (O(1)).  
- **Cost**: Offload heavy queueing to managed services (Kafka, Cloud Pub/Sub).  
- **Future Enhancements**: Add DAG support via directed graph store; implement adaptive scheduling based on historical runtimes.  

*In sum*, the design leverages distributed consensus for state, a decoupled event stream for job flow, and stateless schedulers that can be elastically scaled—meeting latency, reliability, and scalability goals typical of FAANG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
