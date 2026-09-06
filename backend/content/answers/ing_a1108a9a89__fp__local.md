---
qid: ing_a1108a9a89__fp__local
question: 'Explain: Minimum in-sync replica — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 427
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:48:03-05:00'
sources: []
---

**Why Kafka needs an *in‑sync* quorum for `acks=all`**

When a producer writes a record, the leader broker must decide “is this write safe?”  
The only thing that guarantees durability is that **at least one follower has stored the
record in its own log**. If the leader crashes before replicating to any follower,
the data would be lost. Hence Kafka introduces *in‑sync replicas* (ISRs):  
a set of followers whose last‑known‑good offset equals the leader’s current offset.

The configuration `min.insync.replicas` specifies the **minimum size of that ISR** for
writes with `acks=all`. The logic is:

1. **Leader → followers replication**: each follower acknowledges receipt by appending to its log.
2. **ISR update**: a follower joins the ISR only after it has replicated up to the leader’s latest offset; if it falls behind (e.g., due to lag or failure), it drops out.
3. **Write acceptance**: when `acks=all`, the leader waits until *at least* `min.insync.replicas` followers have acknowledged.  
   If fewer are available, the write is rejected (`KafkaException`) instead of being accepted and later lost.

This mechanism turns a probabilistic durability guarantee into a deterministic one:
the data survives any single broker failure (or more, if `min.insync.replicas` > 1).  

**Non‑obvious insight:**  
The ISR size is not a static parameter; it adapts to real‑time replication lag.  
A burst of network congestion can temporarily shrink the ISR below `min.insync.replicas`, turning every write into an exception—an automatic *backpressure* that protects consistency without any extra coordination logic. This dynamic quorum is what makes Kafka’s “exactly‑once” semantics possible while keeping latency low under normal conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
