---
qid: ing_72d99c646d__think__local
question: 'Explain: Coordinator — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 535
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:37:30-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   * Ask the interviewer what “distributed job scheduler” means (batch vs stream, latency goals).  
   * Decide on constraints: data size, fault‑tolerance level, scale (thousands of workers), and whether jobs are stateless or stateful.

**2. Pick a mental model / framework**  
   * Use the classic **“system design layers”** approach:  
     - Client/producer interface  
     - Scheduler core (coordinator)  
     - Worker pool & task dispatch  
     - Persistence & state store  
     - Monitoring & recovery.  
   * Map each layer to known patterns (e.g., Raft for consensus, Pub/Sub for task distribution).

**3. Reason step‑by‑step toward a concrete design**  
   1. **Job ingestion**: REST/GRPC API + message queue → persistent job table.  
   2. **Coordinator responsibilities**:  
        * Maintain job metadata (dependencies, priority).  
        * Use a leader election (Raft) to avoid split‑brain.  
        * Periodically pick ready jobs and push to workers via a broker or direct RPC.  
   3. **Worker interaction**: pull‑based polling vs push; keep track of heartbeats for liveness.  
   4. **State & fault tolerance**: store job state in a distributed KV (e.g., etcd) and checkpoint intermediate results.  
   5. **Scalability**: shard the job table, use consistent hashing to balance load among coordinators.

**4. Common traps to avoid**  
   * Forgetting that coordination itself must be fault‑tolerant—don’t design a single “Coordinator” without leader election.  
   * Overlooking back‑pressure: if workers are slower than job arrival, the queue will grow unbounded.  
   * Ignoring idempotency; duplicate task dispatch can corrupt results.

**5. Sanity‑check & verbalize**  
   * Verify that a failure of one coordinator doesn’t stall all jobs (replicated state).  
   * Confirm that workers can recover from crashes and resume unfinished tasks.  
   * Walk through an example: submit 10,000 jobs → how they’re queued, scheduled, executed, and marked complete—highlight any bottlenecks or edge cases.  

By following this structured thinking process you’ll present a clear, robust design that addresses scalability, reliability, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
