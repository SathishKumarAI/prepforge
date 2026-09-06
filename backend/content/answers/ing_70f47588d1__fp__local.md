---
qid: ing_70f47588d1__fp__local
question: 'Explain: Redis — Explaining 5 Unique ID Generators'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 602
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:04:45-05:00'
sources: []
---

**Redis – five unique‑ID generators**

| Generator | Core idea | Why it works | Non‑obvious insight |
|-----------|------------|--------------|----------------------|
| **INCR / INCRBY** | Atomic counter on a key | Redis guarantees that each `INCR` is executed serially, so the returned value is unique and monotonically increasing. | The counter can be *partitioned* across shards by prefixing keys (`user:counter`, `order:counter`) without coordination—each shard holds its own namespace. |
| **HINCRBY on a hash field** | Per‑entity counters stored in one hash | A single hash keeps many fields; each `HINCRBY` is atomic per field, so you get distinct IDs for different categories in the same key. | Hashes reduce network round trips: multiple counters live under one key, saving memory and latency compared to separate keys. |
| **Redis Streams ID** | `<timestamp>-<sequence>` | The stream’s internal generator guarantees increasing IDs even across machines because `XADD *` uses a high‑resolution timestamp plus an auto‑incremented sequence. | Even if timestamps collide (same millisecond), the sequence part ensures uniqueness—essential for event sourcing where order matters. |
| **Lua script + `RANDOMBYTES`** | Random 128‑bit string hashed to UUID | Lua runs atomically; `RANDOMBYTES(16)` gives cryptographically strong randomness, and hashing removes any leading zeros that could break lexicographic ordering. | The hash output can be sorted by time if you prepend a timestamp before hashing—combining randomness with ordering. |
| **Sorted‑Set score + member** | Score = epoch ms × 10⁶ + counter; member = payload | Each `ZADD` with an auto‑incremented counter inside the same millisecond guarantees unique scores, while the set remains ordered by time. | The numeric score can be used as a *cursor* for pagination without storing offsets—just scan from the last seen score. |

All rely on Redis’s single‑threaded execution to avoid race conditions; they trade between **simplicity** (INCR), **namespace density** (hash fields), and **semantic ordering** (streams, sorted sets). The hidden gem is that *sharding* can be done per namespace without affecting uniqueness—Redis lets you split workloads while keeping IDs globally consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
