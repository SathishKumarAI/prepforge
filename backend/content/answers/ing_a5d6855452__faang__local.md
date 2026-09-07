---
qid: ing_a5d6855452__faang__local
question: 'Explain: Collision Resolution Strategies — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 464
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:20-05:00'
sources: []
---

**Clarify**

You’re asked to design a URL‑shortening service that must handle hash collisions (different long URLs producing the same short key).  
Assumptions I’d confirm: expected traffic (writes/reads per second), TTL for shortened URLs, whether we need custom aliases, and if we can store metadata like click counts.

**Approach**

1. **Key Generation** – use a deterministic hash (e.g., SHA‑256) → base‑62 encode → truncate to 6–8 chars.  
2. **Collision Detection** – on insert, check the key in the key→URL table; if occupied by a *different* URL, generate a new key (append a counter or use a different hash).  
3. **Persistence** – store `key | long_url | created_at | hits` in a distributed key‑value store (e.g., DynamoDB/Cassandra) with the key as primary.  
4. **Redirection** – read from the same table; if missing, return 404.

**Depth**

- *Complexity*: O(1) average for write/read due to hash lookup. Collision resolution adds a small retry loop (expected <2 iterations).  
- *Scalability*: Horizontal scaling via sharding on key prefix; use consistent hashing to minimize re‑balancing.  
- *Fault tolerance*: Replicate table, use eventual consistency for reads.  

**Edge Cases**

- Same long URL hashed multiple times → idempotent insert (return existing key).  
- Extremely high collision rate (unlikely with 62⁶ ≈ 56B keys) → fallback to longer key or UUID suffix.  
- Deletion of URLs must clean up statistics.

**Optimize & Communicate**

To reduce retries, pre‑compute a small pool of secondary keys per long URL and store them in a list; pick the first free one. Explain that this trades a tiny write cost for O(1) lookups during high‑traffic spikes. End by summarizing how the design satisfies availability, consistency (eventual), and partition tolerance—an acceptable CAP tradeoff for a public service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
