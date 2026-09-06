---
qid: ing_941a753330__think__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 218
output_tokens: 424
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:53:32-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**

- *What* is being cached? (user timelines, tweets, follower lists)
- *Why* cache? (latency, traffic reduction, scalability)
- Assume a read‑heavy workload typical of Twitter‑style services.

**2️⃣ Mental model: Cache as an in‑memory “shortcut” layer**

- Treat the cache like a small, fast copy of hot data.
- Map each request to a key; if present, return immediately; otherwise fetch from backing store and populate the cache.

**3️⃣ Step‑by‑step reasoning**

1. Identify *hot* objects (e.g., recent tweets for active users).  
2. Choose a key format (`user:timeline:{id}`, `tweet:{id}`) that supports efficient lookup.  
3. Decide on an eviction policy (LRU, LFU, TTL).  
4. When serving a request:
   - Probe the cache first.
   - On miss, query the database, return data, and write it back to the cache.  
5. Invalidate or update cached entries when underlying data changes (e.g., new tweet → append to timeline cache).

**4️⃣ Common traps to avoid**

- *Stale data*: neglecting invalidation leads to users seeing old timelines.  
- *Over‑caching*: caching everything bloats memory and hurts performance.  
- *Monolithic key space*: poorly designed keys can cause hot spots or collisions.

**5️⃣ Sanity‑check & verbalize**

- Verify hit/miss ratios; a high miss rate indicates too small a cache or wrong data choice.  
- Explain the trade‑off: “We keep recent timelines in Redis so that 95 % of read traffic hits quickly, while updates propagate via publish/subscribe to invalidate stale entries.”  

This concise, stepwise framework lets you articulate why and how caching is applied in the Twitter design example.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
