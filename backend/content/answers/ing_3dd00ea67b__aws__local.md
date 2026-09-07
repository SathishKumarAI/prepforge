---
qid: ing_3dd00ea67b__aws__local
question: 'Explain: Cache-Aside (Lazy Loading) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 436
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:40-05:00'
sources: []
---

**Situation – Task**

When I joined the e‑commerce recommendation team, our ML model served personalized product scores to millions of users per minute. The backend used DynamoDB as a single source of truth for user‑profile features, but read latency hit 300 ms under peak load, breaking the 100 ms SLA for the UI.

**Action – Design & Implementation**

I championed a **Cache‑Aside (Lazy Loading)** strategy:

| Step | Action | AWS Service | Rationale |
|------|--------|-------------|-----------|
| 1 | Cache key = `user_id:feature_set` | Amazon ElastiCache Redis | In‑memory, sub‑millisecond reads. |
| 2 | On cache miss, fetch from DynamoDB → update Redis | Lambda + DynamoDB Streams | Keeps cache fresh without polling. |
| 3 | Periodic TTL refresh (5 min) via EventBridge | Scheduled Lambda | Avoids stale data while controlling memory usage. |

**Result – Impact**

- **Latency:** Reduced average read time from 300 ms to <30 ms, 90% of requests under 10 ms.  
- **Cost:** DynamoDB reads fell by 80%, saving ~$4k/month. Redis cluster cost was ~20% of the savings.  
- **Reliability:** Cache invalidation via Streams eliminated stale‑data races; we saw zero SLA breaches in the first 3 months.

**Reflection – Bar‑raiser Expectations**

I took full ownership: defined metrics, ran A/B tests, and iterated on TTLs based on real traffic patterns (Dive Deep). The design balanced **scalability** (auto‑scaling Redis), **availability** (Multi‑AZ Redis), and **cost** (pay‑per‑use Lambda). I learned that even a simple cache can unlock 10× performance if correctly wired to the data source.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
