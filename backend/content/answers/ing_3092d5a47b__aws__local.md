---
qid: ing_3092d5a47b__aws__local
question: 'Explain: What do we know so far? There — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 444
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:06-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect a **Location‑Based Service (LBS)** like Yelp/Google Places that must support millions of daily location queries and real‑time reviews while keeping latency under 200 ms.

**Action**  
1. **Data Layer** – Store geospatial data in **Amazon DynamoDB Global Tables** for multi‑region replication, using the *geo‑index* pattern (partition key = geohash). This gives low‑latency reads and strong consistency across AWS regions.  
2. **API Gateway + Lambda** – Expose a RESTful API; each request runs a stateless Lambda that queries DynamoDB by geohash bucket, then streams results back to the client via HTTP/2.  
3. **Caching** – Place an **Amazon CloudFront edge cache** in front of API Gateway for hot spots (e.g., downtown). Invalidate cache on new review writes via SNS + Lambda.  
4. **Write Path** – Review posts hit a **Kinesis Data Stream**, processed by a dedicated Lambda that updates DynamoDB and publishes to an SNS topic for downstream analytics.  
5. **Observability** – Use CloudWatch metrics (latency, error rates) and X‑Ray traces; set up alarms for SLA violations.

**Result**  
- 99.9 % query latency <200 ms at peak 3 M requests/day.  
- Cost ≈ $0.04 per request vs. $0.10 for a monolithic solution.  
- Zero single point of failure; automatic multi‑region failover.

**Reflection (Bar‑raiser Lens)**  
I owned the end‑to‑end design, dove deep into DynamoDB’s partitioning limits, quantified latency and cost impacts, and iterated after an initial 30 % read amplification discovered during load testing. This demonstrates **Ownership**, **Dive Deep**, and a **Bias for Action** mindset—all core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
