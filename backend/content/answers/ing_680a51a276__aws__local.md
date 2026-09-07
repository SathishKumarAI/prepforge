---
qid: ing_680a51a276__aws__local
question: 'Explain: Indexes — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:53-05:00'
sources: []
---

**Situation & Task**  
At a startup I was tasked to build a URL‑shortener that could scale to 10 M requests/day while keeping latency < 50 ms and cost under $2k/month.

**Action – Design**  
* **Data model:** A single DynamoDB table (`ShortCode→{OriginalURL, TTL}`) with `ShortCode` as the partition key.  
* **Routing:** API Gateway + Lambda for request handling; Lambda uses a *pre‑generated* short code from an SQS queue (to avoid collisions).  
* **Analytics:** Kinesis Firehose streams click events to Redshift for daily aggregates.  
* **Cache:** Global CloudFront edge cache with 1‑hour TTL to serve the most popular URLs instantly.  

**Result**  
- Achieved < 30 ms latency for 99th percentile traffic.  
- 10 M redirects/day were handled with < $1,800/month (≈$0.18 per 1k redirects).  
- 98% of traffic served from cache, cutting DynamoDB reads by 70%.  

**Reflection & Ownership**  
I *dove deep* into DynamoDB’s provisioned throughput and eventually switched to on‑demand to avoid over‑provisioning costs. I iterated the design after a failure where a single hot key caused throttling; adding an LRU cache layer resolved it. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—qualities Amazon expects in a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
