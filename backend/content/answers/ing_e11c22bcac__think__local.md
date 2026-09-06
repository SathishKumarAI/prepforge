---
qid: ing_e11c22bcac__think__local
question: 'Explain: Job Execution Table — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 557
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:51:08-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   • *What is “Job Execution Table”?* – a metadata store that tracks job lifecycle (state, schedule, dependencies).  
   • *Distributed scheduler constraints:* high‑availability, fault‑tolerance, elastic scaling, multi‑tenant isolation.  
   • Assume we have a cluster of worker nodes, a shared storage layer (e.g., S3/DB), and networking between components.

**2️⃣ Adopt a layered mental model**  
   - **Metadata layer**: persistent table + indexes (job ID, status, owner).  
   - **Scheduling engine**: decides when/where to run jobs.  
   - **Execution controller**: dispatches tasks to workers, monitors progress.  
   - **Recovery & consistency**: idempotent state transitions, lease mechanism.

**3️⃣ Step‑by‑step reasoning**  
   1. *Design the schema:* columns for job ID, type, params, schedule (cron), dependencies, status, timestamps, owner.  
   2. *Choose storage:* relational DB with strong ACID for correctness or a NoSQL store (e.g., DynamoDB) with conditional writes for scalability.  
   3. *Implement the scheduler:* pull‑based workers poll the table for READY jobs; use optimistic locking to claim a job (`UPDATE … WHERE status='READY'`).  
   4. *Execution flow:* worker updates status → RUNNING, reports heartbeats → HEARTBEAT table, on completion → SUCCEEDED/FAILED.  
   5. *Fault tolerance:* if a heartbeat misses beyond timeout, scheduler reverts job to READY; use leases or distributed locks (etcd/Zookeeper).  
   6. *Scaling:* add more workers; the metadata store must handle concurrent claims.

**4️⃣ Avoid common pitfalls**  
   - **Race conditions**: rely on atomic updates rather than “read‑then‑write”.  
   - **Single point of failure**: replicate the metadata store and use leader election for the scheduler process.  
   - **Over‑polling**: use long‑poll or push notifications (e.g., SNS) to reduce load.

**5️⃣ Sanity‑check & articulate**  
   • Verify that every state transition is atomic and idempotent.  
   • Test corner cases: job failure, worker crash, network partition.  
   • Communicate clearly: “We’ll use a central Job Execution Table in XDB, workers claim jobs via conditional updates, heartbeats for liveness, and a lease system to recover stalled jobs.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
