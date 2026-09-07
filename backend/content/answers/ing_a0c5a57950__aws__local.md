---
qid: ing_a0c5a57950__aws__local
question: 'Explain: Open Question — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 554
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:50-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to design a public‑facing URL shortening service similar to TinyURL that could handle millions of hits per day while guaranteeing 99.9 % uptime and minimal latency. The goal was to replace an internal tool that had grown stale, suffered from single‑point failures, and lacked analytics.

**Action**  
I owned the end‑to‑end architecture:  

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Ingestion & API | Amazon API Gateway + Lambda (or EC2 for high throughput) | Serverless gives instant scaling; API Gateway handles throttling and WAF protection. |
| Short‑code generation | DynamoDB (partition key: prefix, sort key: counter) with a Global Secondary Index on `created_at` | Guarantees uniqueness, O(1) writes, and built‑in auto‑scaling. |
| Redirection logic | CloudFront + Lambda@Edge | Edge functions reduce round‑trip latency to < 100 ms globally. |
| Analytics & monitoring | Amazon Kinesis Data Streams → Athena / QuickSight | Real‑time dashboards on clicks per code, geographic distribution, and error rates. |
| Backup & disaster recovery | DynamoDB Global Tables (multi‑region) + S3 lifecycle for logs | Ensures data durability > 99.999% and compliance with GDPR. |

I wrote a **state‑ful Lambda** that atomically increments a counter in DynamoDB to generate deterministic, collision‑free short codes. I also implemented rate limiting per IP via API Gateway usage plans and added an automated rollback script if the code generation throughput dipped below 95 % of target.

**Result**  
- Deployed within 3 weeks; first month saw **2 M unique redirects/day** with **< 0.5 ms median latency**.  
- Achieved **99.97 % availability** in a single region and **99.9 % multi‑region** after enabling Global Tables.  
- Cost was $1,200/month vs the legacy $4,800, saving **75 %** annually.

**Reflection (Bar‑raiser)**  
I demonstrated *Ownership* by taking full responsibility from design to deployment, *Dive Deep* through detailed service trade‑offs, and *Bias for Action* with a rapid MVP. The biggest failure was an initial attempt at a monolithic EC2 solution that throttled under load; the lesson—scale out early and use managed services—to avoid costly over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
