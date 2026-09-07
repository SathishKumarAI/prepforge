---
qid: ing_9144ec4c31__faang__local
question: 'Explain: Worker Nodes — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 478
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:22:10-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *distributed job scheduler* that runs on multiple worker nodes (e.g., containerized services). Key assumptions:  
• Jobs are stateless and can be retried; they may have dependencies or priorities.  
• The system must scale horizontally, tolerate node failures, and guarantee at‑least‑once execution.  
• We’ll expose a REST/GRPC API for job submission and status queries.

**Approach**  
1. **Central Coordinator** – a master service that accepts jobs, persists metadata in a replicated DB (e.g., PostgreSQL + WAL).  
2. **Worker Registry** – workers register with the coordinator via heartbeats; the coordinator maintains a “ready” list.  
3. **Scheduling Policy** – implement a priority queue per worker type, with weighted fair‑share and back‑pressure.  
4. **Job Dispatch** – master pushes jobs to workers over a message bus (Kafka/RabbitMQ). Workers pull tasks, execute, and report completion.  
5. **Fault Tolerance** – if a heartbeat misses, the coordinator reassigns in‑flight jobs; completed jobs are idempotently recorded.

**Depth**  
- **Data model**: `jobs(id PK, payload, priority, status, assigned_worker, retries)`.  
- **Complexity**: scheduling O(log N) per job via a heap; dispatch is O(1).  
- **Trade‑offs**: Centralized coordinator simplifies consistency but can be a bottleneck; we mitigate with sharding (partition by hash of job id) or a leader election.

**Edge Cases**  
- Worker crash during execution → job must be retried.  
- Network partitions → use quorum reads to avoid stale assignments.  
- High priority burst → throttle scheduler to protect low‑priority jobs.

**Optimize & Communicate**  
Future improvements: move to a fully distributed scheduler (e.g., Kubernetes controller) for elasticity, add autoscaling based on queue depth, and expose metrics via Prometheus. I’d explain the design in a whiteboard session, emphasizing how each component satisfies scalability, reliability, and observability, aligning with FAANG expectations of clear, structured reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
