---
qid: ing_6ccdd77f8e__star__local
question: Tell me about a time a technical decision you championed turned out to be
  wrong. What happened, and what did you change afterward?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 343
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:46-05:00'
sources: []
---

**Situation** – In late 2023 I was leading the upgrade of our recommendation engine for a mid‑size e‑commerce platform. The traffic had doubled and we were hitting latency SLA breaches during peak hours.

**Task** – I needed to reduce response time by at least 30 % while maintaining recommendation accuracy (NDCG ≥ 0.75).

**Action** – After reviewing the logs, I decided to replace our in‑memory feature cache with a Redis cluster because it promised lower read latency and easier scaling. I re‑engineered the inference pipeline to pull user embeddings from Redis on each request, removed the local LRU cache, and rewrote the batch scoring logic to run asynchronously. We deployed this change in staging, ran A/B tests, and initially saw a 25 % latency drop but NDCG fell to 0.68.

**Result** – The rollout hit production; latency improved by 32 %, but revenue per session dropped 4 % due to poorer recommendations. I immediately reverted the Redis switch, re‑enabled the local cache, and introduced a hybrid strategy: keep embeddings in memory for hot users and fall back to Redis for cold starts. Post‑fix testing restored NDCG to 0.74 and latency to 18 ms on average. The lesson was that performance gains must be weighed against downstream business metrics—cache architecture alone doesn’t guarantee better user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
