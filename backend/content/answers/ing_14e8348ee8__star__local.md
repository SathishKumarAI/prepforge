---
qid: ing_14e8348ee8__star__local
question: 'Explain: Pattern: Caching Layers — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 323
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:54-05:00'
sources: []
---

**Situation:** At my previous company we were building a real‑time recommendation engine for an e‑commerce platform. The model served millions of requests per day and the latency budget was 50 ms, but our first prototype hit 200 ms due to repeated calls to a slow feature store.

**Task:** I had to reduce inference latency by at least 60% while keeping the system scalable and ensuring that fresh user data (within 5 minutes) was still reflected in recommendations.

**Action:** I introduced a multi‑layer caching strategy. First, an in‑memory LRU cache on each worker node held the most frequently used feature vectors for the last 30 seconds. Second, a distributed Redis cluster cached per‑user aggregates with a TTL of 5 minutes, keyed by user ID and model version. Third, I added a read‑through layer that fetched missing entries from the legacy feature store asynchronously and updated both caches in a single transaction using Lua scripting to avoid race conditions. To keep cache consistency across nodes, I used Redis Pub/Sub for invalidation when a batch job refreshed features.

**Result:** Latency dropped from 200 ms to 45 ms on average, throughput increased by 35%, and we reduced our cloud spend by ~15% because fewer backend calls were needed. The exercise taught me how to balance freshness, consistency, and performance in a distributed AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
