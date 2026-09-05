---
qid: ing_47cf1a6053__think__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 220
output_tokens: 542
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:13:23-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
- The question is about *why* and *how* a paste‑sharing service (Pastebin) would use caching, not how to build it from scratch.  
- Assume we’re dealing with read‑heavy traffic: many users request pastes that are rarely updated after creation.  
- We don’t need to detail the entire system, just focus on the caching layer.

**2. Mental model / framework**  
Use a *layered cache* approach:  
- **In‑memory LRU (e.g., Redis or Memcached)** for very hot pastes.  
- **Distributed object store cache** (S3+CloudFront) for less frequently accessed but still popular content.  
Apply the *Read‑through / Write‑behind* pattern so that reads hit the cache first and writes propagate to both cache and primary DB.

**3. Step‑by‑step reasoning**  
1. **Identify hot keys:** Pasted text is immutable, so a paste ID is a natural key.  
2. **Cache miss path:** On read, look up in Redis → if miss, fetch from DB, return data, and write it back to Redis with an expiry (e.g., 24 h).  
3. **Write path:** When a user creates a paste, write to the DB first, then asynchronously publish the new key to Redis so subsequent reads hit cache.  
4. **Eviction policy:** LRU ensures that only the most frequently accessed pastes stay in memory; older or less‑used ones fall back to disk/DB.  
5. **Cache invalidation:** Since pastes are immutable, no need for aggressive TTL updates; simply set a long TTL and rely on eviction.

**4. Common traps to avoid**  
- *Over‑caching* everything: cache only the read‑heavy portion.  
- Forgetting consistency: if you ever support edit/delete, make sure to invalidate or update cache entries.  
- Using short TTLs for static content—this defeats caching benefits.

**5. Sanity check & verbalizing**  
Ask: “If a paste is accessed 10 000 times per day, does an in‑memory cache reduce DB load?” Yes, because each hit is served from RAM instead of disk/DB.  
Explain to the interviewer that the chosen cache strategy balances speed (Redis) with cost (infrequent items can be served from slower storage). This demonstrates understanding of trade‑offs in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
