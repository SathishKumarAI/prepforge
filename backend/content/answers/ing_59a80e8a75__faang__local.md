---
qid: ing_59a80e8a75__faang__local
question: 'Explain: Explanation Caching — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 442
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:18-05:00'
sources: []
---

**Explain: Explanation Caching – Recommendation Engine**

---

### Clarify  
We’re building a recommender that also returns *explanations* (e.g., “Because you liked X”). The goal is to avoid recomputing explanations for every request, while keeping them fresh as user data changes.  
Assumptions to confirm:  
- Explanations are deterministic given the same input set.  
- Updates to user/item features occur at a predictable rate.  
- Latency budget < 50 ms per request.

### Approach  
1. **Cache Key** – hash of (user_id, item_id, version_stamp).  
2. **Value** – pre‑computed explanation string + metadata.  
3. **Invalidation** – on user or item update, bump the relevant `version_stamp`.  
4. **TTL** – fallback expiry to avoid stale data if an event is missed.

### Depth  
- *Storage*: key/value store (e.g., Redis) with 10 kB per entry → 100 MB for 10k users × 10 items.  
- *Complexity*: O(1) lookup; O(n) rebuild on update where n = number of affected user‑item pairs.  
- *Trade‑offs*: Larger TTL reduces load but risks stale explanations; smaller TTL increases consistency at cost of recomputation.

### Edge Cases  
- **Cold start**: generate explanation on the fly and cache it.  
- **Concurrent updates**: use optimistic locking or atomic increment of `version_stamp`.  
- **Memory pressure**: evict least‑recently used entries when limit reached.

### Optimize & Communicate  
Explain that caching dramatically cuts CPU cycles for explanation generation (often a graph traversal), improving response time and cost. Mention monitoring key metrics: cache hit rate, TTL eviction count, and latency distribution. Highlight that this pattern scales horizontally by sharding the cache on user_id, ensuring each request hits a single node. This structured solution balances freshness with performance—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
