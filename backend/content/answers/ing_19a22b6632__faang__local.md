---
qid: ing_19a22b6632__faang__local
question: 'Explain: DB segment — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 536
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:48-05:00'
sources: []
---

## 1️⃣ Clarify  
We need a **database‑segment‑level unique identifier** that guarantees uniqueness across tables, shards, and nodes without central coordination. Assume:  
* No single point of failure.  
* IDs must be sortable by creation time for efficient range scans.  
* System scales to billions of rows per day.

## 2️⃣ Approach  
Design five distinct schemes:

| Generator | Core Idea | When to Use |
|-----------|-----------|-------------|
| **Snowflake** | Time‑epoch + datacenter+worker ID + sequence | Global clusters, low latency |
| **UUIDv1** | MAC+timestamp | Distributed systems where node identity matters |
| **ULID** | Crockford base32 + time + randomness | Human‑readable, sortable |
| **Database Auto‑Increment (SEQUENCE)** | Server‑side counter | Single‑node or tightly coupled shards |
| **Composite Hash** | SHA‑256 of payload + timestamp | When deterministic uniqueness from data is needed |

## 3️⃣ Depth  
* **Snowflake**: 41 bits time, 10 bits worker, 12 bits seq → ~70 years range, ~4096 IDs/sec per node.  
* **UUIDv1**: 60‑bit timestamp + 48‑bit MAC → collision risk if same node > 2⁴⁸ timestamps.  
* **ULID**: 48‑bit time + 80‑bit randomness → 768 bits of entropy, no coordination.  
* **SEQUENCE**: Relies on DB lock; contention rises with sharding.  
* **Composite Hash**: Collision probability ≈ 2⁻¹²⁸ if salted.

## 4️⃣ Edge Cases  
* Clock rollback → Snowflake/ULID fail → use monotonic clock or fallback.  
* Node MAC change → UUIDv1 duplicates.  
* High write burst → Sequence table bottleneck.  

Test with simulated time jumps, node failures, and concurrent writes across shards.

## 5️⃣ Optimize & Communicate  
Explain trade‑offs: Snowflake offers speed but needs sync of epoch; ULID gives human readability without central coordination. Present a decision matrix for interviewers, highlighting latency, scalability, and operational complexity. Conclude with recommendation: **Snowflake** for global clusters, **ULID** for read‑heavy analytic tables, and **SEQUENCE** where strict ordering is critical and sharding is minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
