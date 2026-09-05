---
qid: ing_3508bc9220__star__local
question: 'Explain: Comparison — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:20-05:00'
sources: []
---

**Situation** – At my last company we were launching a recommendation engine that had to serve millions of personalized video suggestions per day. The latency hit our SLA: average response time was 350 ms, while the target was under 120 ms.

**Task** – I needed to reduce query latency by at least 60% without blowing up infrastructure costs, and also keep cache consistency for rapidly changing user profiles.

**Action** – I compared three caching strategies:
1. **Local in‑process LRU** – fast but duplicated data across workers.
2. **Redis cluster with key‑level TTLs** – good scalability but high read traffic hit the network hop.
3. **Edge CDN (CloudFront) with a custom cache key that included user segment tags** – combined low‑latency edge delivery and fine‑grained invalidation.

I piloted the CDN approach, using Lambda@Edge to inject real‑time personalization tokens into cache keys. We set a 5‑minute TTL for dynamic content and invalidated on user profile updates via SNS triggers. I also added a secondary Redis layer for cold start data.

**Result** – Average latency dropped from 350 ms to 85 ms (≈76% improvement). Cache hit ratio rose to 92%, reducing backend load by 40%. The experiment cost only ~15% more than the baseline, and we gained a robust invalidation pipeline that scales with user growth. I learned that hybrid edge‑plus‑distributed caching often beats monolithic approaches when dealing with personalized, high‑volume ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
