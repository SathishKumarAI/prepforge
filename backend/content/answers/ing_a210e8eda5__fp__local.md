---
qid: ing_a210e8eda5__fp__local
question: What are you using that lock for? — How to do distributed locking \u2014
  Martin Kleppmann\u2019s blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 464
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:15-05:00'
sources: []
---

**Distributed locking – why the “lock” is a bridge between consistency and availability**

In a single‑process program a mutex guarantees that only one thread can mutate shared state at a time.  
In a distributed system there are *separate replicas* that may run on different machines, each with its own clock and network partitions.  
The fundamental problem the lock solves is: **how do we preserve mutual exclusion when messages can be delayed or lost?**

We model the system as a set of nodes \(N\) exchanging asynchronous messages. The goal is to enforce an *ordering* on critical‑section entries such that no two nodes enter concurrently.  
Two properties must hold:

1. **Safety** – at most one node holds the lock.
2. **Liveness** – eventually some node can acquire it.

A naïve approach (e.g., a single coordinator) violates *partition tolerance*: if the coordinator fails, the system stalls.  
The deep principle is **CAP’s trade‑off**: we must give up strict consistency during partitions and rely on *probabilistic guarantees* instead of deterministic ones.

Hence distributed locks are built around **leader election + quorum consensus**:

- A node becomes leader via a reliable algorithm (e.g., Raft).
- The leader grants the lock to a request only after receiving acknowledgments from a majority quorum.  
  This ensures that, even if some replicas are unreachable, any two successful grants must overlap on at least one common replica, preventing concurrent ownership.

**Non‑obvious insight:**  
The *quorum size* is not just about fault tolerance; it also provides **temporal safety**. By requiring a majority, the lock implicitly enforces that any two grants are bounded by the leader’s heartbeat interval. Thus, if the network delay exceeds this interval, the system will automatically re‑elect a new leader, preventing stale locks from persisting indefinitely.

In short, distributed locking turns a global ordering problem into a local consensus one: safety is guaranteed by quorums; liveness survives partitions by allowing leaders to step down and new ones to take over.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
