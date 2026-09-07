---
qid: ing_a45351e950__aws__local
question: 'Explain: Request a Unique ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 431
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:57-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a globally‑scalable URL shortener for an e‑commerce platform that needed to support 10 M clicks/day and guarantee 99.999% uptime while keeping cost under $2k/month.

**Action**  
1. **Ownership & Customer Obsession** – I scoped the user journey: users submit long URLs, receive a 6‑char token, and are redirected with minimal latency.  
2. **Dive Deep & Design** –  
   * **ID generation**: deterministic SHA‑256 hash of `<url>|<timestamp>` → base‑62 encode → truncate to 6 chars; collisions resolved by linear probing in DynamoDB.  
   * **Storage**: Amazon DynamoDB (global tables) for high write/read throughput, with a TTL of 365 days to auto‑purge stale links.  
   * **Routing**: API Gateway + Lambda@Edge at CloudFront edge locations → 50 µs latency.  
   * **Analytics**: Kinesis Data Streams → Lambda aggregates into Redshift for weekly reports.  
3. **Bias for Action & Invent** – Implemented a “preview” feature that shows the destination URL before redirect, using S3 static hosting and CloudFront signed URLs.  
4. **Deliver Results** – Deployed in 2 weeks; traffic peaked at 12 M clicks/day with <10 ms average latency, cost $1,750/month, and zero downtime during a 6‑month test.

**Result**  
- Reduced redirect latency from 200 ms to 10 ms (95% reduction).  
- Maintained 99.999% availability; no SLO breaches in 6 months.  
- Cost savings of 30% vs legacy monolith design.  

**Learning** – Early failure in hash collision handling taught me to use DynamoDB’s conditional writes, improving reliability and simplifying rollback logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
