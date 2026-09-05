---
qid: ing_569188d0c9__star__local
question: 'Explain: Strategy 3: Caching — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 280
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:11-05:00'
sources: []
---

**Situation** – In my last role, our recommendation engine served millions of requests per day. The latency spike during peak hours cost us $15k/month in cloud compute credits, and we were getting SLA complaints from partners.

**Task** – I was tasked with reducing the compute load by 30% while keeping response times under 200 ms, without increasing storage costs beyond our budget.

**Action** – I introduced a two‑tier cache: an in‑memory Redis layer for hot embeddings (top 10k items) and a CDN edge cache for static feature vectors. Using Terraform I provisioned a managed Redis cluster with autoscaling based on hit ratio. I added a cache‑invalidation webhook that triggered after model retraining, ensuring stale data never served. I also set cost tags in AWS to track per‑service spend.

**Result** – Cache hit rate rose from 45% to 78%, cutting compute usage by 35% and saving ~$12k/month. Latency dropped to 120 ms on average. I learned that a well‑instrumented cache layer not only reduces costs but also improves user experience, and that tagging resources for cost attribution is critical for continuous optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
