---
qid: ing_a45351e950__star__local
question: 'Explain: Request a Unique ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 329
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:57-05:00'
sources: []
---

**Situation**  
At my last startup we launched a public URL‑shortening service that had to handle ~50 M active links per day with an uptime target of 99.99%. The existing random hash generator was hitting collisions and the analytics dashboard lagged because each request triggered a full scan of our key‑value store.

**Task**  
I needed to design a scalable, collision‑free ID generator that could produce short URLs in milliseconds while keeping storage costs low and enabling quick lookups for analytics.

**Action**  
I adopted a two‑tier approach: first, use a time‑based base‑62 counter (tweakable by sharding) so every ID is globally unique without external coordination. Second, to keep IDs short, I applied a salted SHA‑256 hash on the counter value and truncated it to 8 characters; if a collision was detected in Redis (via `SETNX`), I incremented the counter until success. For analytics, I stored the mapping in a sharded Redis cluster with a secondary MySQL replica for archival metrics, enabling instant lookups and batched reporting.

**Result**  
The new system cut ID generation latency from 25 ms to <2 ms, reduced Redis memory usage by 30%, and eliminated collision incidents entirely. User‑reported errors dropped by 92%. I learned that combining deterministic counters with salted hashing balances speed, uniqueness, and storage efficiency in high‑traffic services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
