---
qid: ing_636fe1fc95__fp__local
question: 'Explain: Replication — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 400
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:36-05:00'
sources: []
---

**Replication & “acks” in Apache Kafka**

At its core, a distributed log must keep *consistency* while tolerating node failures.  
A producer writes a record to the *leader* of a partition; the leader then **replicates** that record to its followers so that any follower can become the new leader if the current one dies.

The `acks` setting tells the producer how many replicas must confirm receipt before it considers the write successful:

| `acks` | Behaviour | Trade‑off |
|--------|-----------|-----------|
| `0` | No confirmation; record is accepted by the broker immediately. | Highest throughput, lowest durability (record can be lost if leader dies). |
| `1` | Leader acknowledges only after it has written the record locally. | Good balance; record survives leader loss but follower lags may lose data. |
| `-1` (`all`) | Leader waits for *all* in‑sync replicas (ISR) to acknowledge. | Strong durability; guarantees that a failure will not drop the record, at the cost of higher latency and lower throughput. |

Why this works:  
Replication is essentially **redundant storage**—a simple form of error‑correcting code with zero overhead beyond extra disk writes. The ISR set guarantees that all acknowledged replicas are *in sync*; if a follower falls behind it drops out until caught up, preventing stale data from being accepted as durable.

A non‑obvious insight:  
`acks=all` does **not** mean every replica in the cluster must reply—only those in the current ISR. Thus you can scale clusters with many replicas per partition while still ensuring durability: only the *fastest* replicas count, keeping latency low. This subtle distinction is why Kafka can offer both high throughput and strong consistency without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
