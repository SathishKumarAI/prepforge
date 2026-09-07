---
qid: ing_6bc5fdb9cb__aws__local
question: 'Explain: Key Benefits — Cdns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 460
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:43-05:00'
sources: []
---

**Situation / Task**

When launching a real‑time recommendation engine for our mobile app, the latency between data ingestion and model inference had to stay under 100 ms globally. The existing on‑prem cluster was bottlenecked by network hops and regional outages.

**Action**

I took full ownership of migrating the ML inference pipeline to Amazon CloudFront as a CDN layer:

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| **Edge Lambda@Edge** | Compute at edge | Runs pre‑processing and feature extraction 2–3 × faster than central Lambda. |
| **SageMaker Endpoint (edge‑optimized)** | Model inference | Low‑latency, auto‑scaling endpoint deployed to the same regions as CloudFront. |
| **CloudFront Cache** | Result caching | Stores frequent recommendation responses for up to 5 min; cache hit ratio ≈ 85 %. |
| **AWS WAF + Shield** | Security | Protects inference endpoints from DDoS and OWASP attacks. |

I performed a *dive deep* analysis of network RTT, CPU utilization, and cost per request. The design achieved:

- **Latency:** 48 ms average (↓ 52 %) vs on‑prem.
- **Throughput:** 10× higher peak requests without throttling.
- **Cost:** $0.00012/req (≈ 30 % cheaper) due to reduced data transfer and compute time.

**Result**

The new edge‑first ML inference pipeline delivered 99.7 % uptime during a simultaneous global traffic surge, while cutting operational cost by 28 %. The initiative was recognized as a *bar‑raiser* for the ML team because it combined ownership, measurable impact, and learning: we learned that caching model outputs at the CDN edge can outweigh traditional compute scaling when predictions are deterministic.

**Leadership Principles Highlighted**

- **Customer Obsession:** Reduced user latency dramatically.
- **Ownership & Deliver Results:** From design to production, I owned the entire migration and validated success with concrete metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
