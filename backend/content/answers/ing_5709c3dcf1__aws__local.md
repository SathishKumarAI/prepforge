---
qid: ing_5709c3dcf1__aws__local
question: What is a Leaderboard? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 383
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:51-05:00'
sources: []
---

**Answer – “What is a leaderboard?” (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> **Situation/Task:** In our recommendation engine, we needed a real‑time ranking of top products per user segment to surface the most relevant items on the homepage. The leaderboard had to update every minute, serve millions of requests with <50 ms latency, and be cost‑effective.  
> **Action (Design):**  
> 1. **Data ingestion:** Lambda + Kinesis Data Streams captured click/interaction events → *DynamoDB* for per‑segment counters (partition key = segment ID).  
> 2. **Aggregation:** A scheduled Glue job runs nightly to compute weighted scores and writes a sorted list into an S3 “leaderboard” bucket.  
> 3. **Serving layer:** API Gateway + Lambda@Edge caches the top‑10 list in CloudFront edge locations; fallback to DynamoDB for deeper ranks.  
> 4. **Observability:** CloudWatch metrics (latency, hit ratio) trigger auto‑scaling of the Lambda concurrency and alert on anomalies.  
> **Result:** Latency dropped from 120 ms to <45 ms, cache hit rate rose to 92%, and monthly cost was cut by 38% compared with a monolithic approach.  
> **Bar‑raiser takeaways:** I demonstrated *ownership* by mapping every requirement to an AWS service, *dive deep* into latency trade‑offs, quantified impact (metrics), and iterated after a failed first attempt that over‑provisioned Kinesis shards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
