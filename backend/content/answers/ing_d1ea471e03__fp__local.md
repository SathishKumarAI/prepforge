---
qid: ing_d1ea471e03__fp__local
question: 'Explain: Databases — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 422
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:26:53-05:00'
sources: []
---

**Why a DB must choose TCP or UDP**

A database is essentially a *state machine* that must preserve consistency across machines.  
The state transition function (INSERT, UPDATE…) has to be applied **in the same order everywhere**; otherwise the replicas diverge and transactions fail the ACID guarantees.  
This ordering requirement is a *concurrency‑control* problem solved by an underlying *communication protocol*.

| Feature | TCP | UDP |
|---------|-----|-----|
| Reliability | Guarantees delivery, in‑order, no duplication (via ACKs, sequence numbers) | No guarantee – packets can be lost, reordered or duplicated. |
| Overhead | Protocol state, handshakes, retransmissions | Stateless; minimal header. |
| Latency | Higher due to handshake and retransmission logic | Lower, but unsafe for stateful ops. |

**Why TCP is the default**

From an *information‑theoretic* viewpoint, every replica needs a **mutual information** of 1 bit per operation: each side must know exactly which operation came next.  
TCP’s ACK mechanism ensures that the entropy of the message stream is zero; any lost packet would increase uncertainty and break consistency.  

UDP can be used only when *loss tolerance* is built into the application layer (e.g., gossip protocols, eventual consistency). In those cases, the system trades **consistency for speed**: a lost update may simply be replayed later.

**Non‑obvious insight**

Even if you use UDP for “fast” replication, you still need *some* ordering guarantee.  
A clever trick is to piggyback a lightweight sequence number on each message and let the receiver **buffer out‑of‑order packets** until missing ones arrive (or time out). This hybrid scheme gives you most of UDP’s low latency while retaining enough order information for deterministic replication—exactly what distributed databases need without paying full TCP overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
