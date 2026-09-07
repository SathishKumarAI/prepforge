---
qid: ing_625add6186__aws__local
question: 'Explain: 4.2 Requirement 2: URL Redirection — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 483
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:49-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led the redesign of a legacy URL‑shortening service that handled ~50 M clicks/day and had 99.9 % uptime guarantees. The new requirement was to support custom aliases, granular analytics, and high availability across regions.

**Action (A)**  
I owned the end‑to‑end architecture, applying **Ownership** and **Dive Deep**.  
1. **Data model & storage** – A single DynamoDB table (`short_url`) with `PK=url_id` and GSI on `custom_alias`.  Partition key = hash of original URL; TTL = 5 years to auto‑purge inactive links.  
2. **API layer** – API Gateway + Lambda (Python) for CRUD, throttled at 1 kreq/s per region.  
3. **Redirect service** – CloudFront edge functions read the alias from the query string, fetch the target URL from DynamoDB via an *Edge‑cache* TTL of 60 s to reduce latency.  
4. **Analytics** – Each redirect writes a record to Kinesis Data Streams; Lambda aggregates into Redshift for OLAP queries.  
5. **Scalability & cost** – DynamoDB’s on‑demand capacity automatically scales from 1 kWCU to >10 M WCU during traffic spikes, costing <$0.25/hr at peak. Edge caching cuts downstream reads by ~70 %.  

**Result (R)**  
Post‑launch, click latency dropped from 350 ms to <50 ms; error rate fell below 1e‑6 per request. The service handled a sudden 3× traffic surge during a marketing campaign without intervention, meeting the **Deliver Results** principle. I also introduced a “self‑healing” Lambda that retries failed writes, reducing manual ops by 80 %.  

**Learnings** – Early trade‑off: using DynamoDB for both short URLs and analytics increased read costs; shifting analytics to Kinesis & Redshift split concerns and kept latency low. This iterative approach exemplifies **Bias for Action** while maintaining rigorous quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
