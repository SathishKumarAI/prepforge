---
qid: ing_901bf7a877__aws__local
question: 'Explain: Components Needed — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 463
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:50-05:00'
sources: []
---

**Situation & Task (S)**  
I led the design of a global URL‑shortener for an e‑commerce platform that had to support > 1 M requests/sec while keeping latency < 50 ms and cost < $5k/month.

**Action (A)**  

| Component | AWS Service(s) | Design Rationale |
|-----------|----------------|------------------|
| **API Gateway + Lambda** | Amazon API Gateway, AWS Lambda | Serverless for zero‑provisioning, auto‑scales to spikes. |
| **Short URL Generation** | DynamoDB (auto‑partition key = shortID), KMS for encryption | Single‑write latency < 3 ms; DynamoDB’s on‑demand capacity keeps cost predictable. |
| **Redirection Service** | CloudFront + Lambda@Edge | Edge caching reduces round‑trips to origin, keeping global latency < 20 ms. |
| **Analytics & Auditing** | Kinesis Data Streams → Athena / Redshift | Real‑time metrics (click‑through rate) without impacting user traffic. |
| **Security & Abuse Prevention** | WAF + Cognito | Rate limiting and authentication guard against bot abuse. |

**Result (R)**  
- Achieved 99.999% availability across three AZs, measured by CloudWatch uptime checks.  
- Reduced average latency from 120 ms to 35 ms, improving conversion by 4%.  
- Operational cost stayed at $3.8k/month—30 % below budget.

**Leadership Principles Highlighted**  
*Customer Obsession*: Built a system that guarantees instant redirects for users worldwide.  
*Ownership*: Took full responsibility from design through deployment, monitored post‑launch health, and iterated on metrics.  

**Bar‑raiser Takeaway**  
Show depth by detailing trade‑offs (e.g., DynamoDB vs RDS), quantify impact, and reflect on a failure—initially using S3 for storage caused 200 ms latency spikes; migrating to DynamoDB fixed it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
