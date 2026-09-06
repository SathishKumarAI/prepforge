---
qid: ing_00f143abc9__think__local
question: 'Explain: Negative Caching — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 526
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:48:33-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “negative caching” in this context?*  
- Assume the reader knows basic cache concepts but not Uber’s scale or storage stack.  
- Assume we’re explaining a production‑grade solution, not just theory.

**2️⃣ Adopt a layered mental model**  
- **Layer 1 – Problem definition**: high read volume, low write load, data is largely “cold” (rarely updated).  
- **Layer 2 – Architectural components**: online storage (e.g., PostgreSQL/Bigtable), in‑memory cache (Redis/Memcached), negative cache layer.  
- **Layer 3 – Flow of a read request**: cache hit → serve; miss → fetch from DB → store positive result; “negative” miss → avoid repeated DB hits.

**3️⃣ Step‑by‑step reasoning toward the answer**  
1. Start with Uber’s use case (e.g., location lookups).  
2. Explain why naive caching fails at 40 M reads/s (cache thrashing, memory limits).  
3. Introduce *negative caching*: cache “not found” responses for a short TTL to prevent repeated DB probes on rare keys.  
4. Show the request path with diagrams: client → Redis → DB (if miss) → back to Redis.  
5. Discuss TTL tuning, eviction policies, and consistency guarantees (eventual vs strong).  
6. Highlight operational knobs: sharding, read replicas, batch fetching, metrics.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate “negative caching” with “cache‑aside”; it’s a specific strategy for missing keys.  
- Beware of stale data: explain how updates purge relevant negative entries.  
- Don’t gloss over the trade‑off between memory usage and hit rate; show empirical numbers.

**5️⃣ Sanity‑check & verbalize**  
- Recount the flow in one sentence: “When a read misses, Uber’s integrated cache stores a short‑lived ‘not found’ entry so subsequent reads avoid hitting the expensive online store.”  
- Ask: does this answer the question of *how* 40 M RPS is achieved? If not, add details on sharding or parallelism.  
- End with a quick recap: problem → negative cache → performance win.

This structured walk‑through lets you internalize the concept and explain it clearly in any interview or technical talk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
