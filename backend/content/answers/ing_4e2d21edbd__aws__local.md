---
qid: ing_4e2d21edbd__aws__local
question: 'Explain: Speed and Performance Optimization (Caching)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 419
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:13-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the revamp of a recommendation engine that served 2 M users daily. The response latency had risen to 1.8 s, pushing the abandonment rate up by 12 %. My goal was to cut average latency below 300 ms while keeping cost growth <5 % YoY.

**Action**  
I applied **Customer Obsession** and **Dive Deep**: I profiled requests with X-Ray, identified that 70 % of queries hit a read‑heavy DynamoDB table. I introduced a two‑tier cache:

1. **Amazon ElastiCache Redis (clustered)** – holds the top 10 k most‑requested items; auto‑scales via AWS Auto Scaling groups, providing sub‑millisecond reads.
2. **CloudFront + Lambda@Edge** – caches API responses at edge locations, reducing round‑trip latency for global users.

I added a TTL of 12 h and used Redis eviction policies to keep memory usage <70 %. Cost analysis showed a 35 % reduction in DynamoDB read capacity units, offset by a modest 10 % increase in ElastiCache spend, netting **$18K/month savings**.

**Result**  
Latency dropped from 1.8 s to **280 ms** (≈84 % improvement). The abandonment rate fell to 3 %, boosting monthly revenue by $250K. I documented the rollback plan and trained the ops team, ensuring **Ownership** of post‑deployment monitoring.

**Bar‑raiser notes** – I demonstrated deep technical insight, quantified impact, and a clear learning loop from profiling failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
