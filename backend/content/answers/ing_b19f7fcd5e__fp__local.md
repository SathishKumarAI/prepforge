---
qid: ing_b19f7fcd5e__fp__local
question: 'Explain: ‘acks=1’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 448
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:51-05:00'
sources: []
---

**Kafka’s `acks=1`: the minimal‑latency, majority‑safety trade‑off**

When a producer sends a record, it must decide how much *commitment* to ask of the cluster before considering the write successful. The fundamental problem is: **how do we guarantee that a record won’t be lost while keeping latency low?**  
Kafka models this with three acks modes:

| `acks` | What the broker guarantees |
|--------|---------------------------|
| 0      | No confirmation – fastest, but records can vanish on broker failure. |
| 1      | The leader acknowledges receipt immediately after persisting to its local log. |
| -1 (or `all`) | All ISR replicas acknowledge; ensures durability even if the leader dies. |

With `acks=1`, the *leader* writes the record to its disk and then replies to the producer **without waiting for any follower**. This is essentially a “write‑through” guarantee: the leader’s log is the single source of truth at that moment, so as soon as the acknowledgment arrives, the producer can safely retire the in‑flight message.

Why does this work?  
- **Optimization:** The acknowledgment latency equals the round‑trip time to one broker (the leader). Followers are free to catch up asynchronously, keeping throughput high.  
- **Probabilistic safety:** Even though followers might lag, the probability that a leader fails before persisting its log is low; any lost records will be recovered from the follower logs once they catch up.

**Non‑obvious insight:** *`acks=1` is not “weak”—it’s merely a *separation of concerns* between latency and durability.* By decoupling immediate acknowledgment from full replication, Kafka lets producers stay fast while still giving the cluster ample time to converge the data across replicas. This design mirrors how distributed consensus systems (e.g., Raft) separate the leader’s write‑commit phase from follower replication, achieving a sweet spot that many applications rely on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
