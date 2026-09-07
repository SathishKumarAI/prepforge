---
qid: ing_5096df0edf__aws__local
question: 'Explain: Feed Reads — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 506
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:17-05:00'
sources: []
---

**Situation & Task**  
When I joined a fast‑growing social network, the feed latency had ballooned to 4 s for 10 % of users during peak hours. My goal was to redesign the “Feed Reads” pipeline so that 99.9 % of requests returned in < 1 s while keeping infrastructure cost under $2M/month.

**Action – Design & AWS Stack**  
I broke the problem into *producers* (post, like, comment events) and *consumers* (feed readers).  
1. **Event ingestion:** Kinesis Data Streams → Lambda → DynamoDB “UserFeed” table (partition key = user_id).  
2. **Pre‑aggregation:** Every 5 min a scheduled Glue job scans the event log, aggregates top N posts per user, and writes to an S3 data lake.  
3. **Serving layer:** CloudFront + API Gateway front‑end a Lambda@Edge function that pulls the pre‑aggregated list from DynamoDB (read‑only replica in edge regions).  
4. **Fallback path:** If the cache miss occurs, a short‑lived SQS queue triggers a “on‑demand” recompute via Fargate, which writes to Redis (Elasticache) for 10 min.

**Result**  
Latency dropped from 4 s → 0.8 s (99.9 % of traffic). Cost fell by 30 % compared to the monolith due to serverless scaling and read‑replica sharding. The system handled a 3× traffic surge during a viral event without manual intervention.

**Leadership Principles**  
- **Customer Obsession:** I focused on end‑user latency, not just backend metrics.  
- **Ownership & Dive Deep:** I owned the entire pipeline, from data capture to cache invalidation, and performed root‑cause analysis for every spike.  

**Bar‑raiser cues**  
I quantified impact (latency %, cost %), demonstrated ownership by delivering a fully automated solution, and reflected on failure modes—e.g., handling out‑of‑order events in Kinesis—which led to adding a sequence number check before aggregation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
