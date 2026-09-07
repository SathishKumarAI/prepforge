---
qid: ing_4b5648413b__aws__local
question: 'Explain: Sources: — tech-prep-jeremy.io/systems-design/topics/cdns.md at
  master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 450
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:29-05:00'
sources: []
---

**Situation / Task**

When building a global ML inference platform, I had to decide how to serve model artefacts (weights, configs) to edge nodes with minimal latency and high availability. The team was debating whether to use an on‑prem CDN or rely on Amazon CloudFront.

**Action**

I scoped the problem by:
1. **Collecting data** – measured average download time for a 200 MB transformer checkpoint from S3 vs CloudFront (5 ms vs 35 ms at edge).
2. **Designing the solution** – used **S3** as the origin, **CloudFront** as the CDN, and **AWS Lambda@Edge** to inject dynamic authentication headers per user.
3. **Cost & scalability analysis** – projected monthly traffic of 10 TB; CloudFront cost was ~\$1.8K vs \$5.6K for S3‑only transfer. Availability: 99.999% SLA from CloudFront vs 99.9% from direct S3 access.

I also created a **canary rollout** in one region, monitoring cache hit ratios and latency. After 48 h, hit ratio was 92%, reducing downstream compute cost by 18%.

**Result**

- Latency dropped from 35 ms to 5 ms for edge nodes.
- Cost decreased by 68% while maintaining 99.999% availability.
- The system now supports 1M concurrent model pulls with zero downtime.

**Leadership Principles Reflected**

- **Customer Obsession** – we measured real user latency and cost impact, not just theoretical benefits.
- **Ownership & Dive Deep** – I drove the end‑to‑end design, performed detailed cost/latency analysis, and iterated on the deployment strategy.

**What a Bar‑raiser Looks For**

- Quantified impact (latency & cost savings).
- Deep technical dive (S3 vs CloudFront, Lambda@Edge logic).
- Demonstrated ownership: from requirement gathering to production rollout.
- Learning loop: monitored canary data and adjusted cache policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
