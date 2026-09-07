---
qid: ing_3dd00ea67b__faang__local
question: 'Explain: Cache-Aside (Lazy Loading) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 428
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:41-05:00'
sources: []
---

**Cache‑Aside (Lazy Loading) – A Structured Overview**

| Section | What to Cover |
|---------|---------------|
| **Clarify** | Restate the problem: “We need to expose a fast read path for frequently accessed data while keeping the source of truth in the database.” Ask assumptions: *write patterns?* *data consistency tolerance?* *TTL policy?* |
| **Approach** | 1. Read from cache; on miss, fetch from DB, populate cache, return result.<br>2. On write/update/delete, invalidate or update the cached entry before/after persisting to DB. |
| **Depth** | • **Read path:** O(1) hit; O(log n) for miss if DB lookup is log‑time.<br>• **Write path:** Must keep cache and DB in sync – either “write‑through” (cache first) or “write‑behind.”<br>• **Consistency model:** eventual consistency; strong consistency requires locking or version checks. |
| **Edge Cases** | • Stale data if TTL too long.<br>• Cache stampede: multiple concurrent misses flood the DB – mitigate with request coalescing or a short “dummy” lock.<br>• Large objects may exceed cache limits—use size‑based eviction (LRU) or sharding. |
| **Optimize & Communicate** | • Use distributed cache (Redis, Memcached) with partitioning to avoid single point of failure.<br>• Profile hit/miss ratios; adjust TTL and prefetch hot keys.<br>• Explain trade‑offs: higher consistency → more write overhead; lower latency → risk of stale reads. |

*Result:* A clear, FAANG‑style explanation that balances structure, depth, and practical considerations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
