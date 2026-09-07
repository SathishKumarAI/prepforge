---
qid: ing_eb6df235ee__aws__local
question: 'Explain: Web Browsing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 448
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:40-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team at my previous company, we were asked to redesign the web‑browsing stack so that 200 M monthly users could experience <200 ms latency on global traffic. The goal was to replace an aging monolith with a scalable client‑server architecture.

**Action (Design)**  
* **Client Layer:** Lightweight JavaScript SPA served via CloudFront CDN, leveraging Service Workers for offline caching and prefetching.  
* **API Gateway + Lambda@Edge:** Route API calls through Amazon API Gateway, with edge Lambda functions to handle request validation, rate‑limiting, and A/B feature flags.  
* **Backend Services:**  
  * *User Profile & Auth* – Cognito + DynamoDB (partitioned by region) for sub‑10 ms reads.  
  * *Content Delivery* – S3 + CloudFront with origin shield to reduce cross‑region latency.  
  * *Analytics* – Kinesis Data Streams feeding into Redshift for real‑time dashboards.  

**Result**  
- Latency dropped from 350 ms to **<180 ms** (average) globally.  
- Cost decreased by **35 %** YoY due to serverless compute and reduced data transfer.  
- Incident rate fell by **42 %** after implementing automated health checks in Route 53 + CloudWatch.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end rollout, diving deep into cold‑start metrics and iterating on Lambda memory configs. The trade‑off of higher per‑request cost was justified by the 15 % increase in user engagement measured via retention cohorts. I learned that early involvement of security (IAM least privilege) prevented a potential breach during the migration.  

*Leadership Principles:* **Customer Obsession** – we reduced latency and improved reliability; **Ownership** – led from concept to production with measurable impact.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
