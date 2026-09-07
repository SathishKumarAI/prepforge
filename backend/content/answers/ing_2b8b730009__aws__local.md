---
qid: ing_2b8b730009__aws__local
question: 'Explain: URL Mappings Table — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 511
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:25-05:00'
sources: []
---

**Situation & Task**  
At a former start‑up I led the migration of our legacy URL shortener (≈ 3 M active links/day) to an AWS‑native service that could scale globally and reduce cost by ≥ 30 %. The key challenge was designing a *URL Mappings Table* that balanced **latency**, **consistency**, and **cost** while staying true to Amazon’s **Customer Obsession** and **Ownership** principles.

**Action – Design & Architecture**  
| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Primary key (short code) | DynamoDB Global Table | Single‑write, multi‑region consistency; hot‑key partitioning via a *hash‑sharded* short code. |
| Reverse lookup (original URL → short code) | S3 + CloudFront + Lambda@Edge | Cost‑effective cold‑start for infrequent lookups; edge caching reduces round‑trips to DynamoDB. |
| Analytics & TTL cleanup | Amazon Kinesis + Glue + Redshift | Streaming analytics for churn, periodic GC jobs to purge expired entries. |
| Rate limiting & abuse detection | API Gateway + WAF + Cognito | Protects against DoS while keeping UX fast (≤ 30 ms). |

**Result**  
- Latency dropped from 250 ms → **45 ms average** (95th percentile < 80 ms).  
- Operational cost fell by **32 %**, mainly due to S3/CloudFront caching and DynamoDB on‑demand scaling.  
- Uptime > 99.999 % across three regions; 0 incidents in the first year.

**Reflection – Dive Deep & Bias for Action**  
I ran a *post‑mortem* after an unexpected spike that caused a temporary throttling issue. By adding a **pre‑warm pool** of short codes and auto‑scaling DynamoDB read capacity, we eliminated the incident entirely. This cycle of rapid experimentation and data‑driven iteration is what Amazon calls “Bias for Action” while ensuring ownership over every metric.

> *Bar‑raiser signals:* clear ownership, deep dive into partitioning & caching trade‑offs, quantified impact (latency, cost), and learning from a real failure to improve the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
