---
qid: ing_12c8f6dedd__fp__local
question: 'Explain: Sharding & Partitioning — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 485
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:34-05:00'
sources: []
---

**Sharding & partitioning in a notification service**

The core problem is *scalable write‑throughput* and *low‑latency read* under a bursty, user‑centric load: every user may receive thousands of push/email events per day, but most reads are “fetch my last N notifications.”  
We must **distribute** the data so that no single node becomes a bottleneck while preserving fast point‑in‑time queries.

---

### 1. Why sharding works

* **Load isolation** – each shard handles a bounded subset of users; writes to one user never touch another’s storage, so contention is eliminated.
* **Data locality** – reads for a user hit only its own shard, keeping cache hits high and avoiding cross‑node joins.
* **Linear scaling** – adding a node simply moves a contiguous range of shards (e.g., hash ranges) onto it; the system’s capacity grows proportionally.

---

### 2. Partitioning strategy

| Layer | Decision | Rationale |
|-------|----------|-----------|
| **User ID → Shard** | Consistent hashing over user IDs | Guarantees uniform distribution and smooth re‑balancing when nodes change. |
| **Within shard: Notification table** | Time‑based partition (e.g., per day) + secondary index on `user_id` | Enables efficient range scans for “last N” while keeping individual partitions small enough for in‑memory caching or SSD hot‑spots. |

---

### 3. Deep insight

A *non‑obvious* advantage of **time‑based partitioning inside each shard** is that it turns the notification table into a *log* that can be **appended‑only**. Append‑only logs are naturally immutable, so:

1. They avoid row locking and enable **write amplification** to be minimal.
2. They allow **compaction windows**: old partitions can be archived or deleted in bulk without scanning every record.

This synergy of sharding for user isolation and log‑style time partitioning for write efficiency is the key that lets a notification service sustain millions of events per second while keeping read latency under 50 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
