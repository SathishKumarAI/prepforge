---
qid: ing_6d176c4bac__aws__local
question: 'Explain: Non-Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 547
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:33-05:00'
sources: []
---

**S – Situation**  
While leading a cross‑functional team at my previous company, we launched an internal “tinyurl” style service to shorten URLs for marketing campaigns. The service had to be **highly available**, support **millions of daily requests**, and guarantee **zero data loss**.

**T – Task**  
Define the non‑functional requirements (NFRs) that would keep the system reliable, fast, and cost‑effective while meeting our SLA of 99.999 % uptime.

**A – Action**  
I applied *Customer Obsession* to focus on user experience and *Dive Deep* to quantify every trade‑off:

| NFR | Metric | AWS Service | Rationale |
|-----|--------|-------------|-----------|
| Availability | ≥ 99.999 % (≤ 5 min MTTR) | **Route 53** + **ELB** with health checks; **RDS Aurora Serverless** for DB failover | Multi‑AZ routing and automatic scaling reduce downtime |
| Latency | < 30 ms avg per request | **CloudFront CDN**, **Lambda@Edge** for edge logic | Caching at edge lowers RTT |
| Throughput | 10 M req/s peak | **API Gateway + Lambda** (provisioned concurrency) | Auto‑scaling handles traffic spikes |
| Durability | No URL loss | **S3** with versioning, **DynamoDB** with point‑in‑time recovery | Immutable storage ensures recoverability |
| Security | 100 % encryption at rest & in transit | **KMS**, **TLS** via CloudFront | Protects sensitive data |
| Cost | ≤ $0.01 per shortened URL | Spot Instances for Lambda, **S3 Standard‑IA** for infrequently accessed URLs | Optimizes spend while meeting SLAs |

I also introduced a *Bias for Action* sprint to prototype the architecture and used *Deliver Results* metrics: after launch we achieved 99.9997 % uptime, < 25 ms latency, and cut cost by **18 %** versus our baseline.

**R – Result**  
The service handled 12 M requests/day with zero outages for 6 months. Feedback from marketers highlighted a 40 % reduction in load times compared to the legacy system. The design proved scalable, highly available, and cost‑efficient—exactly what our customers demanded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
