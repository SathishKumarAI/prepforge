---
qid: ing_0274f6438e__fp__local
question: 'Explain: How to do distributed locking — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 434
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:10:20-05:00'
sources: []
---

**Distributed locking – a first‑principles view**

The *problem* is to serialize access to a shared resource that lives on multiple nodes: each node must know whether the resource is “busy” or “free”, and no two nodes may claim it simultaneously.  
In a single machine this is trivial (a mutex). In a cluster, however, we lack a common clock and a single memory cell; any solution must be *consistent* over a partially‑synchronous network.

**Why a consensus protocol?**  
If two processes could read the same “free” flag concurrently and both set it to “busy”, we would violate safety. Therefore the system must agree on an order of lock acquisitions. This is exactly what a **Paxos/Raft consensus log** guarantees: each proposal (a lock request) becomes the next entry in a replicated, totally ordered log. The node that writes the entry first obtains the lock; subsequent entries are rejected until the lock is released.

**Deep principle – *information flow*.**  
The lock’s state is information that must be propagated to all replicas. Consensus ensures that every replica eventually learns the same value, preventing “split brain” where different nodes think they hold the lock. The *commit* step in Raft (or Paxos) is a form of **majority voting** over network messages—an application of the *majority quorum* principle from distributed databases.

**Non‑obvious insight:**  
A lock can be implemented without a dedicated “lock service” by piggybacking on any replicated log (e.g., Kafka). The lock is just another entry in the stream; acquiring it means producing to the topic and waiting for that offset to be committed. This removes a single point of failure and scales with the underlying log’s throughput.

In short, distributed locking is *consensus + majority quorum* applied to the state of “locked/unlocked”, ensuring safety even when nodes crash or messages are delayed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
