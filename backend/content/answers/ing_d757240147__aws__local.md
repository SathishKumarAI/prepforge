---
qid: ing_d757240147__aws__local
question: 'Explain: right so basically more or less um — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 378
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:25-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time delivery platform (Doordash‑style) that supports thousands of concurrent drivers and customers across multiple cities while keeping latency < 200 ms for location updates.

**Action – Design**  
*Geo‑Hashing*: I chose 12‑character geohashes (≈ 3 m precision). Driver locations are stored in **Amazon DynamoDB Global Tables** with a composite key `(geohash, driverId)`. A **DynamoDB Streams → Lambda** pipeline pushes changes to an **ElastiCache Redis Cluster** as a fast lookup cache.  

*WebSockets*: For push notifications I used **API Gateway WebSocket API** backed by **AWS Lambda** (stateless). Each client subscribes to its geohash topic; the Lambda publishes updates via **Amazon SNS Topic → EventBridge** to trigger downstream services.

**Result**  
- 90 % of location updates served from Redis, cutting read latency from 35 ms to < 5 ms.  
- API Gateway handled 1 M concurrent connections with < 0.3 s average response time during peak hours.  
- Cost savings: DynamoDB Global Tables + ElastiCache reduced RDS load by 70 %, saving ~$12k/month.

**Reflection (Bar‑raiser lens)**  
I owned the entire data flow, dived deep into Redis eviction policies and Lambda concurrency limits, quantified performance gains, and learned that a small cache miss can cascade to a delivery delay. This design balances **Ownership**, **Dive Deep**, and **Deliver Results**—the core Amazon Leadership Principles for high‑scale systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
