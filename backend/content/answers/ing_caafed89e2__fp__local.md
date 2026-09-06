---
qid: ing_caafed89e2__fp__local
question: 'Explain: Acks’s utility — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 424
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:11:27-05:00'
sources: []
---

**Kafka’s acknowledgment levels – why they exist**

When a producer writes a record, the *fundamental problem* is: *how do we guarantee that the data survives a broker crash without unduly delaying the client?*  
Kafka solves this with three `acks` settings:

| `acks` | What the leader guarantees | Trade‑off |
|--------|---------------------------|----------|
| **0**  | “I received the record.” | No durability; fastest. |
| **1**  | “The leader wrote it to its log.” | One broker fault tolerant. |
| **all** (or `-1`) | “All *in‑sync replicas* have written it.” | Full durability, but may block if a follower lags. |

The deeper principle is *quorum replication*: a record is safe once a majority of the intended replicas (the *ISR*) have persisted it.  
If the leader crashes before a quorum has acked, Kafka will elect a new leader from the ISR; if fewer than a quorum remain, the partition becomes unavailable.

**Non‑obvious insight:**  
`acks=0` is still useful because modern producers enable *idempotence* and *exact‑once delivery*. Even without waiting for an acknowledgment, a producer can retry with the same key and guarantee that duplicates are collapsed on the broker side. Thus, `acks=0` trades latency for a controllable retry strategy rather than pure fire‑and‑forget.

By mapping durability to the size of the ISR quorum, Kafka provides a tunable, mathematically grounded mechanism for balancing throughput against data safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
