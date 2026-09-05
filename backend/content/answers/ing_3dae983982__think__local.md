---
qid: ing_3dae983982__think__local
question: 'Explain: Consumer — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 430
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:50:22-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- Identify “consumer” as a consumer group reading from Kafka topics.  
- Assume we’re talking about *at‑least‑once* semantics, default retention, and no external idempotence logic.

**2️⃣ Mental model: Kafka’s durability vs. consumption guarantees**  
- Messages are stored on disk (or SSD) in immutable log segments; replication gives durability.  
- Consumption state lives in consumer offsets (committed to a special topic).  
- Loss can happen only if the broker loses data or the consumer mis‑manages its offset.

**3️⃣ Step‑by‑step reasoning**  
1. **Broker side:** With proper replication and no hardware failure, Kafka will not lose messages; they’re persisted until retention expires.  
2. **Consumer side:** If a consumer commits an offset *before* processing the message, a crash will skip that record on restart—effectively “lost” to that consumer.  
3. **Network or broker outage:** A consumer may time‑out and rejoin, but Kafka keeps the log; it’s just a temporary unavailability, not loss.  
4. **Retention policy:** Once retention expires or manual compaction removes a key, messages are gone.

**4️⃣ Common pitfalls to avoid**  
- Confusing *message durability* (broker guarantees) with *processing guarantee* (consumer offset handling).  
- Assuming that “at‑least‑once” means zero loss; it only ensures no duplicates, not that every record is seen.  
- Ignoring the impact of manual vs. auto‑commit on perceived loss.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “Could a consumer ever see a missing message if all brokers are healthy?” → No.  
- Rephrase: “A consumer might skip a record if it commits early, but Kafka itself won’t lose the data unless retention erases it.” This confirms the distinction between broker durability and consumer offset semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
