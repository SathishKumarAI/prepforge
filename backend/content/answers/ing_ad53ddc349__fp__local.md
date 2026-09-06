---
qid: ing_ad53ddc349__fp__local
question: 'Explain: acks=1 - example — Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 437
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:13:05-05:00'
sources: []
---

In a replicated Kafka topic the *leader* broker receives every produce request, writes it to its local log and then forwards it to the *followers*.  
The **acks** parameter tells the producer how many of these replicas must confirm the write before the request is considered successful.

`acks=1` means “once the leader has written the record locally, acknowledge immediately.”  
From a first‑principles view this is a **write quorum** of size 1: the system guarantees that at least one replica (the leader) persists the data. The trade‑off is latency—no waiting for slower followers—but consistency suffers if the leader crashes before any follower has caught up; the record may be lost until the broker recovers and re‑replicates.

Why must it work this way?  
Kafka’s durability model is built on **log replication**: each partition’s log is a sequence of immutable records. Persisting to disk on one node (the leader) satisfies *durability* per the CAP theorem’s “Consistency + Availability” axis for writes, but without follower confirmation we sacrifice *partition tolerance* in the face of leader failure.

A non‑obvious insight: even with `acks=1`, Kafka still benefits from the **in‑sync replica (ISR)** set. If the leader fails, a follower that has already received the record will be promoted, restoring durability instantly—so the real loss risk is bounded by how quickly followers catch up, not merely the ack setting.

Thus, `acks=1` is a deliberate choice balancing latency against potential data loss in a distributed log system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
