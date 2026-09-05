---
qid: ing_06c7c77a76__fp__local
question: 'Explain: In-sync replicas — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 546
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:12-05:00'
sources: []
---

In a replicated Kafka topic, each partition has one **leader** and several **followers** (replicas).  
The leader accepts writes; the followers fetch those records over the network. A write is considered *committed* only when it reaches a quorum of replicas. This quorum is what **acks** represents.

### From first principles

1. **Consistency vs Availability** – The CAP theorem tells us we can’t have perfect consistency and availability in a distributed system with partitions. Kafka chooses strong consistency for writes: the producer must be sure that, even after a broker crash, its data survives.
2. **Replication as safety net** – If a leader fails, any follower that has already replicated the record can immediately take over. Thus the system needs to know *which* replicas actually stored the data before handing success back to the client.
3. **Acknowledgment policy (`acks`)** –  
   - `acks=0`: no waiting → fastest but data may be lost if the leader dies before persisting locally.  
   - `acks=1`: wait for the local log commit on the leader only → safe against leader crash, but not against follower loss.  
   - `acks=-1` (or `all`): wait until **all in‑sync replicas** have written to disk. “In‑sync” means a replica has caught up within a configurable lag (`replica.lag.max.messages/bytes`).  

### Why the quorum must be *in‑sync*

If we allowed a follower that is far behind (or down) to count toward the ack, the leader could hand back success while most copies are stale. A crash would then lose the data. By requiring only in‑sync replicas—those that have applied the record locally—the system guarantees that every acknowledged write will survive any single broker failure.

### Non‑obvious insight

The *lag* threshold is the key tunable that balances durability and throughput. Setting `replica.lag.max.messages` too high means a follower can be counted as in‑sync even though it’s minutes behind; a crash then loses recent messages. Conversely, setting it too low throttles producers because the leader must wait for many followers to catch up quickly—turning Kafka into an almost synchronous replication system. Thus, `acks=all` is not just “wait for everyone”; it waits for *everyone that can reliably keep the data*, which is a subtle but powerful design choice rooted in the CAP trade‑off and replicated log theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
