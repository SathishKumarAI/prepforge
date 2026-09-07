---
qid: ing_d9166d7dcd__faang__local
question: 'Explain: Your agent''s prompt cache hit rate is 20% when you expected 90%.
  Walk me through the debugging.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 491
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:14-05:00'
sources: []
---

**Clarify**

> “Prompt cache hit rate” refers to how often a generated prompt is found in our LRU‑style in‑memory store before we recompute it.  
> *Assumptions to confirm:*  
> • Cache key construction (e.g., hash of user ID + query).  
> • Eviction policy and capacity.  
> • Invalidation triggers (model updates, schema changes).  
> • Metrics are aggregated per request path.

**Approach**

1. **Validate instrumentation** – ensure hit/miss counters actually reflect cache look‑ups.  
2. **Reproduce the environment locally** – spin up a small cluster with identical config.  
3. **Inspect key generation & hashing** – confirm deterministic keys across requests.  
4. **Examine eviction behavior** – check if capacity is too low or TTLs are short.  
5. **Check for forced misses** – e.g., debug flags, feature toggles, or stale‑data invalidation.  
6. **Profile cache access patterns** – use logs/metrics to see distribution of keys.

**Depth**

- If instrumentation is wrong, replace counters with a simple in‑process map and verify hits.  
- Re‑hash the key: `md5(user_id + ":" + query)`; if collisions or inconsistent salts exist, hits drop dramatically.  
- Verify that TTL ≠ 0 and LRU eviction threshold ≥ expected cache size (e.g., 10 k prompts).  
- Look for code paths that bypass the cache (`if (forceRegen) return regen();`).  

**Edge Cases**

- *Hot keys*: a single query dominates traffic → cache saturated with one key.  
- *Cold start*: first request always miss; need warm‑up script.  
- *Concurrency*: race conditions may evict entries immediately after insertion.

**Optimize & Communicate**

Once the root cause is identified (e.g., incorrect hash leading to many unique keys), fix it, redeploy, and monitor hit rate over 24 h. Explain that we’ll add an automated alert for hit‑rate < 70% and schedule a quarterly cache audit. This demonstrates structured debugging, clear communication, and actionable improvement—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
