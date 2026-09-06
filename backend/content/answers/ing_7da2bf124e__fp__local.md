---
qid: ing_7da2bf124e__fp__local
question: 'Explain: Writes (URL Shortening) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 427
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:32:46-05:00'
sources: []
---

**Why we need it**

Every web request is an *identifier* (the URL) that maps to a resource.  
Clients want a compact, human‑friendly token while the server must still
resolve millions of requests per second with **zero latency** and **high
availability**. The core problem is thus: *store a one‑to‑many mapping from a short key to a long URL efficiently*.

**Key principles**

1. **Deterministic encoding + collision resistance**  
   Use a base‑62 encoder of a monotonically increasing counter (or a hash with salt).  
   This guarantees uniqueness, eliminates lookup for “already shortened” URLs,
   and keeps the key short—an optimization that trades space for constant‑time
   generation.

2. **Sharding by prefix**  
   The first few characters become a shard key.  Each shard hosts its own
   key‑value store (e.g., Redis or Cassandra).  Consistent hashing ensures
   even distribution and easy scaling: add a node → only ~1/N keys move.

3. **Cache hot URLs**  
   Popular links are cached in memory; cold ones fall back to the persistent store.
   This is an application of locality‑of‑reference in caching theory.

4. **Graceful expiration & analytics**  
   Store hit counts and timestamps for TTL or reporting, using a write‑ahead log
   (Kafka) so reads remain unaffected.

**Non‑obvious insight**

Instead of randomly generating IDs and retrying on collision, generate the ID *from* the counter.  Collisions are impossible, and you avoid an extra lookup step entirely—saving a full round‑trip for every new URL, which is critical at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
