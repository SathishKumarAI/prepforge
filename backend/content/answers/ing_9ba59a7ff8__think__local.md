---
qid: ing_9ba59a7ff8__think__local
question: 'Explain: Caching Requirements — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 423
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:22:04-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   - *What is “caching requirements” for Instagram?* We’re not designing a whole system; we’re focusing on where and why to cache (user feeds, media, session data).  
   - Assume typical traffic: millions of users, high read‑heavy workload, low write latency tolerance.  

**2️⃣ Adopt a layered mental model**  
   - **Data flow:** User → API → Cache → DB/Storage.  
   - **Cache types:** In‑memory (Redis), CDN edge caches for media, local device caches.  
   - **Consistency trade‑offs:** Eventual vs strong; read‑through vs write‑through.  

**3️⃣ Step‑by‑step reasoning**  
   1. Identify *hot* data: user home feed, profile pages, media thumbnails.  
   2. Decide cache granularity: per‑user feed key vs global trending feed key.  
   3. Choose eviction policy (LRU for feeds, TTL for media).  
   4. Handle write path: when a post is created or liked, invalidate/refresh relevant keys.  
   5. Scale horizontally: sharding cache by user hash; use read replicas for DB.  

**4️⃣ Common traps to avoid**  
   - *Over‑caching* immutable data → wasted memory.  
   - *Stale feeds* if invalidation is missing → bad UX.  
   - Ignoring CDN for large media → high bandwidth costs.  

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “Does this cache solve the latency pain point?”  
   - Check cost vs benefit: memory footprint, complexity of invalidation logic.  
   - Communicate clearly: “We’ll use Redis per user shard for feeds, CDN edge caches for media, and a TTL‑based policy to keep data fresh while keeping memory bounded.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
