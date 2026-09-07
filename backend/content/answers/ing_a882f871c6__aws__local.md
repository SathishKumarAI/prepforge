---
qid: ing_a882f871c6__aws__local
question: 'Explain: Let’s summarize what we know so far — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 412
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:50-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a scalable location‑based service similar to Yelp or Google Places for a FAANG interview. The goal: handle millions of concurrent users, real‑time queries (POIs, ratings, reviews), and support future features like personalized recommendations.

**Action**  
1. **Requirements & Architecture** –  
   * Front‑end API Gateway → Lambda (stateless request routing).  
   * Geo‑indexing with Amazon DynamoDB Global Tables + a secondary GSI on `region#lat#lon` for fast proximity queries.  
   * For heavy read traffic, cache results in Amazon ElastiCache (Redis) with TTL of 60 s.  
   * Write path: user reviews → Kinesis Data Streams → Lambda ➜ write to DynamoDB and S3 for audit logs.  
   * Machine‑learning inference (rating prediction) served via SageMaker endpoints; predictions cached in Redis.  

2. **Scalability & Availability** – Multi‑AZ deployment, auto‑scaling Lamba/ElastiCache, DynamoDB on-demand capacity, Kinesis sharding to avoid bottlenecks.  
3. **Cost & Trade‑offs** – On‑demand DynamoDB keeps CAPS high without over‑provisioning; caching reduces API calls by ~70 %. Using Lambda eliminates server maintenance.

**Result**  
Projected 5× read throughput with <0.5 % latency variance, cost ≈$12k/month for 10M daily active users (vs $30k on a single‑region monolith).  

**Reflection** – I own the design, dive deep into each service’s limits, quantify impact, and learned that caching is often the simplest win over complex sharding. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
