---
qid: ing_2b9a7a192c__fp__local
question: 'Explain: How to do distributed locking — Martin Kleppmann’s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 438
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:16-05:00'
sources: []
---

### Distributed Locking – A First‑Principles View

At its core a lock is an **information‑theoretic constraint**: only one process may hold a resource at any time.  
In a single machine this is trivial, but in a distributed system the *state* that says “process A holds X” must be **consistent across nodes**.  

1. **Consistency vs. Availability** – The CAP theorem tells us we cannot keep the lock both always available and always consistent when network partitions occur.  
2. **Consensus as the only safe mechanism** – To guarantee uniqueness, all participants must agree on a single owner. That is exactly what a consensus protocol (Paxos/Raft) solves: it turns many unreliable messages into a single agreed‑upon value.
3. **Lease‑based optimizations** – Instead of holding a lock for an arbitrary time, nodes acquire a *lease* with a short expiry. If the lease holder crashes, others can reclaim it once the timer expires. This trades strict consistency for lower latency: only one leader is elected per lease period.
4. **Non‑obvious insight** – A lease’s expiry is not just a timeout; it’s an **entropy source** that prevents *livelock* in highly concurrent environments. By adding a small random jitter to the lease duration, we reduce the probability that many nodes simultaneously try to reacquire the same lock, thereby smoothing contention without extra coordination.

In practice, a distributed lock service (e.g., etcd, ZooKeeper) implements this by:
- Using Raft to elect a leader.
- The leader stores the lock state in its log.
- Clients issue `acquire/renew/release` requests; if they miss heartbeats they lose ownership automatically.

Thus, the need for global agreement and the trade‑offs of CAP dictate that distributed locking must be built on consensus plus lease optimization, with jitter as a subtle yet powerful anti‑livelock tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
