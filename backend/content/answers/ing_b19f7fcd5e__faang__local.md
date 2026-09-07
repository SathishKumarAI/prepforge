---
qid: ing_b19f7fcd5e__faang__local
question: 'Explain: ‘acks=1’ — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 580
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:00-05:00'
sources: []
---

**Clarify**  
You’re asking what `acks=1` means when configuring a Kafka producer. It controls how many replicas must acknowledge receipt of a record before the broker considers it successfully written. I’ll assume we’re talking about the *default* `acks` setting for replication factor ≥ 2 and that the caller wants to understand durability vs latency trade‑offs.

**Approach**  
1. Define the three possible values (`0`, `1`, `-1/ALL`).  
2. Explain the broker‑side flow: leader receives, writes to local log, forwards to followers, waits for acks.  
3. Map each value to durability guarantees and latency implications.  
4. Illustrate with an example of a 3‑node cluster.

**Depth**  
- **`acks=0`** – no wait; record is considered sent immediately after the leader writes locally. Highest throughput, lowest safety (possible data loss if broker dies).  
- **`acks=1`** – the producer waits only for the *leader* to acknowledge. The record is on disk at the leader but may not yet be replicated. If the leader fails before followers sync, a small window of potential loss exists. Latency is moderate because it’s one round‑trip.  
- **`acks=ALL` (or `-1`)** – all in‑sync replicas must ack. Guarantees that the record survives any single broker failure. Highest latency due to multiple round‑trips.

In a 3‑node cluster with replication factor 3, `acks=1` means the leader writes locally and immediately replies; followers will sync asynchronously. If the leader crashes before syncing, one of the two remaining replicas can take over without loss.

**Edge Cases**  
- **Rebalance or broker shutdown**: if a follower is down when the record arrives, it won’t ack under `acks=1`.  
- **Network partitions**: with `acks=1`, producers may still succeed while followers are unreachable.  
- **Under‑replicated partitions**: `acks=1` will return success even though replication factor is not met.

**Optimize & Communicate**  
For most production workloads, `acks=1` strikes a balance between durability and latency—acceptable data loss window is small compared to the performance gain. If absolute safety is required (e.g., financial transactions), switch to `ALL`. Always pair the setting with appropriate `retries` and `max.in.flight.requests.per.connection` values to avoid duplicate records.

This explanation covers the mechanics, trade‑offs, and real‑world implications—exactly what a FAANG interview would expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
