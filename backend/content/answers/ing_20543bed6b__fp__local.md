---
qid: ing_20543bed6b__fp__local
question: 'Explain: 4.3 Handling failure of Jobs — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 421
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:43-05:00'
sources: []
---

### 4.3 Handling Failure in a Distributed Job Scheduler  

**Fundamental problem** – In a cluster, a *job* is a unit of work that may span multiple worker nodes and can fail for many reasons (node crash, network partition, resource exhaustion). The scheduler must guarantee **liveness** (every job eventually completes) while preserving **consistency** (no duplicate executions or lost results).  

1. **State model** – Treat the system as a *state machine* with three states: *queued*, *running*, *completed*. Transitions are triggered by events (dispatch, finish, heartbeat‑timeout).  
2. **Failure detection** – Use *heartbeat* plus *stale‑timeouts* to detect node failure. A job that has not reported progress beyond a threshold is considered failed.  
3. **Recovery policy** – Adopt the *exact‑once* principle: upon detecting failure, re‑enqueue the job in the *queued* state. This relies on idempotent task execution or compensating actions (e.g., database transactions).  
4. **Consensus for ownership** – Use a lightweight consensus layer (Raft/Etcd) to elect a *job owner*. The owner persists job metadata; if it dies, another node takes over and re‑queues any in‑flight jobs.  

**Non‑obvious insight:**  
The scheduler’s *liveness* hinges on the **time‑to‑detect** versus **time‑to‑recover** trade‑off. A shorter heartbeat improves responsiveness but increases false positives; a longer one reduces churn but risks prolonged job stalls. Tuning this balance is guided by the *probability distribution of node failures*, not merely their mean time to failure. By modeling failure as an exponential process, you can analytically set the timeout that minimizes expected total job completion time while keeping duplicate executions negligible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
