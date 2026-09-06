---
qid: ing_be85ddbbe3__fp__local
question: 'Explain: Storage (Per Day) — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 422
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:45-05:00'
sources: []
---

**Why “storage per day” matters**

A messaging system must guarantee that every message is *durable* and *recoverable*, yet the cost of storing billions of bytes daily can explode if we ignore the underlying trade‑offs. The core problem is: **how to keep a constantly growing log of user data while bounding storage, latency, and consistency?**  

1. **Log‑structured write path** – Every send appends a record (user ↔ recipient, timestamp, payload hash) to an immutable log. This yields sequential I/O, the fastest pattern on SSD/HDD, and naturally supports *exact‑once* delivery by replaying the log during recovery.

2. **Partitioned by time & user** – Sharding by day (`YYYYMMDD`) gives bounded partitions; each partition can be archived or deleted independently. Within a day we further shard by user hash to keep files small (≈ 10 MB) and enable parallel compaction.

3. **Deduplication + compression** – Text messages are compressed with Brotli; media is stored in CDN‑backed object stores, referenced by the log. Duplicate payloads (e.g., stickers) are deduplicated via a content‑addressable hash, drastically cutting per‑day growth.

4. **Retention policy as a contract** – WhatsApp’s “self‑destruct” feature is enforced by marking records with TTL; background workers delete or archive after the user‑specified window, guaranteeing that storage never grows unbounded.

**Non‑obvious insight:**  
Treating *time* as a first‑class dimension turns the storage problem into a *time‑series database*. It lets us exploit append‑only semantics for consistency and gives a natural unit (day) for billing, compliance, and disaster recovery. This simple design hides the complexity of scaling to billions of messages while keeping per‑message write latency sub‑10 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
