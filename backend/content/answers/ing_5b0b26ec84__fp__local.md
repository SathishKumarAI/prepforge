---
qid: ing_5b0b26ec84__fp__local
question: 'Explain: High-Level Design — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 464
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:17:46-05:00'
sources: []
---

**Why a URL shortener is a *design* problem**

The core requirement is to map an arbitrary long string (the original URL) to a compact token that can be concatenated into a new, unique address.  
The mapping must be **injective** (no two different URLs share the same token), **efficient** (O(1) lookup/insert), and **scalable** (millions of requests per second).  The problem is not about compression; it’s about *deterministic, collision‑free encoding* that can survive sharding, replication, and eventual consistency.

---

### 1. Token generation – an “optimal hashing” principle  
Use a *base‑62* alphabet (A–Z,a–z,0–9) to maximise entropy per character.  
Instead of random strings, generate tokens by incrementing a counter **(or using Snowflake IDs)** and converting the integer to base‑62.  
Why? Because it guarantees uniqueness without a lookup table, keeps token length predictable, and lets you partition space naturally (e.g., by timestamp bits).

### 2. Persistence – eventual consistency + read‑through cache  
Store `(token → longURL)` in a distributed key‑value store (Cassandra/Redis).  
For reads, first hit the LRU cache; on miss, fetch from DB and warm the cache.  
The “read‑through” pattern ensures low latency while keeping writes simple.

### 3. Routing – consistent hashing + CDN edge  
Distribute tokens across nodes by **consistent hashing** of the token string.  
Edge servers (CDN) can serve redirects without touching origin if they cache the mapping, dramatically reducing origin load.

---

#### Non‑obvious insight
*The counter need not be globally unique; per‑node counters sufficed as long as you prefix them with a node ID.*  
This eliminates coordination overhead while still guaranteeing collision‑free tokens because the node prefix acts as a shard identifier. The only trade‑off is slightly longer URLs, which is acceptable compared to the scalability benefit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
