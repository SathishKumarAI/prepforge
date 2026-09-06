---
qid: ing_48aada429c__fp__local
question: 'Explain: Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 377
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:57-05:00'
sources: []
---

**Kafka Acknowledgements – why the “acks” parameter matters**

When a producer sends a record to a broker, it must decide how much certainty it wants that the data is safely stored before it can continue.  
The `acks` setting encodes this decision:

| Value | Producer’s guarantee | Broker behaviour |
|-------|----------------------|------------------|
| 0 | “Fire‑and‑forget” – no reply sent | The broker writes to its log and immediately returns, without waiting for any disk flush. |
| 1 | “Leader‑only” – the leader node confirms receipt | The broker that receives the record (the *leader* of the partition) writes it to its in‑memory buffer, then replies once the write succeeds locally. |
| all (or -1) | “Fully durable” – all ISR replicas confirm | The leader waits until every node in the *in‑Sync Replicas* set has flushed the record to disk before acknowledging. |

The underlying principle is **consistency vs. latency trade‑off**: a higher `acks` value forces more replication and durability, increasing round‑trip time; lower values reduce latency but risk data loss if a broker fails.

A subtle point many overlook is that *ISR* membership itself is dynamic. If a replica falls behind and drops out of the ISR set, the leader will no longer wait for it even when `acks=all`. Thus “fully durable” only guarantees durability against failures that affect *current* ISR nodes, not all historical replicas.

In short, Kafka’s `acks` parameter quantifies how much of the replication pipeline a producer must traverse before it can safely consider a write committed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
