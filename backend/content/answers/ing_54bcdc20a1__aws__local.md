---
qid: ing_54bcdc20a1__aws__local
question: What is an URL Shortener? — Design URL Shortener | System Design Interview
  | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 660
total_tokens: 900
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Customer Obsession & Ownership** – I treat every URL like a customer request that must be delivered quickly and reliably.

### Situation
At my previous role we launched an internal link‑shortening service for marketing teams. The existing tool was buggy, slowed down page loads by 30 % (average redirect latency 120 ms), and had a 0.5 % error rate.  

### Task
Design a highly available, scalable URL shortener that supports custom aliases, analytics, and zero downtime upgrades.

### Action
1. **Requirements & Trade‑offs**  
   * Short URL format: `https://short.ly/{hash}` – 6‑char alphanumeric for ~56 billion combinations.  
   * Custom alias support (max 64 chars).  
   * Analytics: click count, referrer, geo.

2. **Architecture (AWS)**  
   | Layer | Service | Reasoning |
   |-------|---------|-----------|
   | API Gateway + Lambda | Serverless REST endpoints | Auto‑scale, cost‑efficient for bursty traffic. |
   | DynamoDB (partition key = hash) | Fast lookup, global tables for multi‑region read latency < 10 ms. | No single point of failure; provisioned throughput auto‑scales. |
   | S3 + CloudFront | Store analytics logs, serve static landing pages. | Edge caching reduces origin load by 70 %. |
   | SNS + Lambda | On‑click event pipeline → Kinesis → Redshift (analytics) | Decoupled ingestion, real‑time dashboards. |
   | Cognito + IAM | Secure admin API, audit logging. | Least privilege, compliance. |

3. **Scalability & Cost**  
   * DynamoDB on-demand: $0.25 per million read/write units → < $5/month for 1M traffic/day.  
   * Lambda + API Gateway: ~$0.20 per 100k requests → <$10/month at peak load.  
   * S3/CloudFront: $0.023/GB, negligible cost for static assets.

4. **Testing & Rollout**  
   * Canary releases via API Gateway stages; monitor latency & error rate with CloudWatch.  
   * A/B test new hashing algorithm; achieved 25 % lower collision probability and 15 % faster redirects.

### Result
- Reduced redirect latency from 120 ms to < 20 ms (6×).  
- Error rate dropped to < 0.01 %.  
- Served 3 M unique URLs/month with 99.999% uptime, costing <$50/month.  

**Learning:** Early integration of analytics revealed a bottleneck in click‑through logging; moving from synchronous DB writes to event‑driven Kinesis eliminated the lag.

*Bar‑raiser cues:* clear ownership (end‑to‑end design), deep dive into AWS services, quantified impact, and evidence of iterative learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
