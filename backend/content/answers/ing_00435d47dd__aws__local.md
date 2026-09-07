---
qid: ing_00435d47dd__aws__local
question: 'Explain: Assumptions — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 557
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:13-05:00'
sources: []
---

**Situation & Task**  
I was asked to sketch a high‑level design for an “Instagram‑like” platform that supports millions of daily active users (MAU) while delivering sub‑second feed rendering and photo uploads. My goal: build a scalable, highly available system on AWS that meets the customer’s performance expectations.

**Action – Design & AWS Services**  
1. **Front‑end** – Amazon CloudFront + Route 53 for global CDN with edge caching of user feeds (Cache‑Control: 5 min).  
2. **API Layer** – Amazon API Gateway → Lambda (Node.js) → DynamoDB Streams → Kinesis Data Firehose to S3.  
3. **Storage** – Amazon S3 for raw images; AWS Elastic Transcoder (or MediaConvert) to generate thumbnails and adaptive‑size variants stored in the same bucket with a *$0.023/GB* cost.  
4. **Feed Generation** – A distributed Kafka cluster on MSK feeds new posts into an ECS Fargate service that writes a “user feed” table in DynamoDB (partition key: userId). Reads hit this table for O(1) feed retrieval.  
5. **Search & Discovery** – Amazon OpenSearch Service indexes tags and captions, enabling fast hashtag queries.  
6. **Observability** – CloudWatch Metrics + X-Ray for latency tracing; SNS/SQS for alerting.

**Result**  
- Latency: 95 % of feed requests < 200 ms (vs 400 ms baseline).  
- Cost: $0.15 per active user/month, 30 % lower than a monolithic EC2 solution.  
- Availability: 99.99 % SLA achieved through multi‑AZ deployment and auto‑scaling.

**Reflection (Bar‑raiser cues)**  
I owned the trade‑off between cost and consistency by choosing DynamoDB’s *eventual consistency* for feeds—sufficient for social media where slight delays are acceptable. I dove deep into request patterns to justify using OpenSearch over a relational DB, saving $200k annually. The failure of an earlier prototype taught me to decouple storage from compute (S3 + Lambda) to avoid single points of failure.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering lightning‑fast feeds directly improves user engagement.  
- **Ownership & Dive Deep** – I iterated on the data model until it balanced speed, cost, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
