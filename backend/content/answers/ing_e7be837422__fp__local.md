---
qid: ing_e7be837422__fp__local
question: 'Explain: 4.5 Addressing Single Points of Failure — Design a Distributed
  Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 492
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:12:06-05:00'
sources: []
---

**Why the scheduler must be *redundant***  
A distributed job scheduler is the brain that decides when and where a task runs. If its control plane collapses, every worker sits idle or repeats work – a classic single point of failure (SPOF). The only way to guarantee *continuous* throughput is to treat the scheduler as a replicated service whose state can survive any node’s death.

**The fundamental problem: consensus on job placement**  
Workers poll the scheduler for jobs. Two conflicting workers could receive the same job, causing duplication and wasted resources. Thus every job must be assigned by a *consensus protocol* that guarantees exactly‑once delivery regardless of network partitions or node failures.

**Why Paxos / Raft?**  
Both protocols provide *eventual consistency* while tolerating arbitrary failures: they agree on a linear sequence of “assign job X to worker Y” operations. The key insight is that the scheduler’s state space (the set of pending jobs) is *append‑only*: once a job is scheduled it never moves. This monotonicity lets us use a **log replication** model, where each log entry encodes one assignment. Any node can replay the log to rebuild its local view.

**Design pattern: Leader + Followers + Gossip**  
1. **Leader election** (Raft’s term): the leader serializes job assignments into the replicated log.  
2. **Followers** persist the log and serve as read replicas for workers, reducing load on the leader.  
3. **Gossip** for membership changes ensures that when a follower dies the cluster reorganises quickly without a global lock.

**Non‑obvious insight: Treat the scheduler as a *state machine* rather than a simple database**  
By modelling job assignment as deterministic state transitions (e.g., “JOB → ASSIGNED”), we can use any event‑sourcing framework that guarantees idempotence. This removes the need for heavy locking or transaction logs, and lets workers replay events to recover from transient failures.

In short, a distributed scheduler must be a replicated log‑based state machine that uses consensus to avoid duplication, with leaders and followers to balance load—thereby eliminating the single point of failure while keeping the system simple and mathematically sound.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
