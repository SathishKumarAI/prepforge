---
qid: ing_3dae983982__fp__local
question: 'Explain: Consumer — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 338
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:26-05:00'
sources: []
---

**Can a Kafka consumer ever miss a message that was successfully written to the broker?**

Yes, but only under very specific conditions that violate Kafka’s durability guarantees.  
Kafka is built on *write‑ahead logs*: every record is appended to an immutable log segment and flushed to disk (or replicated) before the write returns. Once a producer’s `acks` parameter confirms persistence (`acks=all`), the broker guarantees that the record will survive crashes, reboots, or even full node failures.

A consumer can lose a message only if:

1. **It never reads it** – because its offset is advanced past the record before the consumer ever fetches it (e.g., auto‑commit in a fast loop).  
2. **The broker deletes it** – due to log retention, compaction, or manual deletion.  
3. **Network partition / misconfiguration** – if the consumer connects to an under‑replicated replica that lost the segment before replication finished.

Thus, *Kafka itself does not silently drop messages*; loss is a consequence of consumer logic (offset handling) or broker policy (retention).  

**Non‑obvious insight:**  
When using `auto.offset.reset=latest`, a newly started consumer will skip all existing records regardless of how long the topic has retained them. Even if those records are still present on disk, the consumer’s offset pointer starts at the *end* of the log. Hence “message loss” can be entirely a client‑side illusion, not a broker failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
