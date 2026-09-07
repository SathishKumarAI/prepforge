---
qid: ing_5f0eb72055__aws__local
question: 'Explain: Resulting context — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 599
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:52-05:00'
sources: []
---

**Context – Customer‑centric e‑commerce catalog**

I was tasked to expose a *“product feed”* to multiple front‑end teams (web, mobile, IoT) while keeping latency under 100 ms and scaling to millions of requests per day. The pattern I chose: **API Gateway + Backend for Frontends (BFF)**.

| Leadership Principle | How it shows |
|-----------------------|--------------|
| Customer Obsession | Delivered a unified API that reduced front‑end errors by 30 % and cut page load time from 1.2 s to 0.7 s. |
| Ownership & Dive Deep | Built the BFF, monitored traffic, tuned caching, and fixed a cache‑invalidation bug that caused stale pricing for 15 min. |

### Technical Design

- **Amazon API Gateway** (regional) → throttles 10 k RPS per stage, offloads TLS, and serves as entry point.
- **AWS Lambda (Python)** – lightweight BFF layer; aggregates data from three downstream services: DynamoDB (product catalog), Amazon SageMaker Endpoint (price‑prediction ML model), and ElasticCache Redis (hot SKU cache).  
  *Why Lambda?* Cold‑start <200 ms, auto‑scales to 50k concurrent invocations, no server maintenance.
- **Amazon CloudFront** → global CDN, reduces latency to <100 ms for edge users.  
- **AWS X-Ray & CloudWatch** → end‑to‑end tracing; alerts on >5 % error rate.

### Scalability & Cost

| Item | Scale | Approx. Monthly Cost |
|------|-------|---------------------|
| API Gateway (10 M requests) | 10 k RPS | $0.30 |
| Lambda (15 s total compute) | 1 M invocations | $0.02 |
| CloudFront (CDN traffic) | 5 TB | $200 |

Total ~**$500/month**, with 99.95 % availability SLA.

### Result

- **Latency:** 90 % of responses < 80 ms vs. prior 1.2 s.
- **Throughput:** Handled 20 M requests/day during flash‑sale without throttling.
- **Cost Savings:** Deployed BFF reduced front‑end API calls by 40 %, cutting downstream load and saving ~$300/month.

### Learning

I initially underestimated the cache‑invalidation latency; after a 15‑minute outage, I added an SNS trigger to flush Redis upon catalog updates—now zero stale data incidents. This iteration shows *ownership* and *continuous improvement*, core to Amazon’s culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
