---
qid: ing_ce4edf7750__faang__local
question: 'Explain: Collision Risks — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 508
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:40:16-05:00'
sources: []
---

**Clarify**  
We need a distributed URL‑shortening service that guarantees *low collision risk* while supporting millions of requests per day and quick lookups. Key assumptions:  
- URLs are arbitrary strings; collisions mean two distinct long URLs mapping to the same short key.  
- We want *stateless* lookups (no session data).  
- Scaling horizontally is required.

**Approach**  
1. **Key generation** – use a hash‑based scheme with a large alphabet (e.g., Base‑62) and a sufficiently long key (≥6 chars).  
2. **Collision detection** – store the mapping in a distributed key/value store; on write, check if the key already exists.  
3. **Rehash strategy** – if collision detected, append a counter or use a secondary hash to produce a new key until unique.  
4. **Data partitioning** – shard by first few characters of the key to balance load.  
5. **Cache layer** – keep hot URLs in Redis for sub‑millisecond redirects.

**Depth**  
- *Hash*: SHA‑256 → truncate to 48 bits (≈8 chars). Collision probability ≈ 1‑2×10⁻¹² per request.  
- *Storage*: DynamoDB/Bigtable with primary key = short key, value = long URL + metadata.  
- *Write path*: compute hash → check existence; if collision → increment counter and recompute.  
- *Read path*: direct lookup; fallback to cache miss → DB read.  
Complexity: O(1) expected for both operations; memory overhead negligible.

**Edge Cases**  
- Extremely high request burst could cause repeated collisions → throttle or back‑off.  
- User may submit the same long URL repeatedly; deduplication via reverse index can avoid duplicate keys.  
- Deletion of URLs must clean up cache and DB entries to prevent stale redirects.

**Optimize & Communicate**  
- **Sharding** reduces hot spots; use consistent hashing for rebalancing.  
- **Pre‑hashing**: maintain a global counter to append to collisions, guaranteeing uniqueness without extra DB roundtrips.  
- Explain trade‑offs: longer keys → lower collision but less user‑friendly; caching vs. consistency.  

This design keeps collision risk negligible while scaling horizontally and maintaining low latency for redirects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
