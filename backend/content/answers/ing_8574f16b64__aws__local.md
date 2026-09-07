---
qid: ing_8574f16b64__aws__local
question: 'Explain: 5.5 Get User Feed — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 418
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:32-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I led a 5‑person team at a startup that needed an “Instagram‑style” feed for ~3 M daily active users. The goal was to deliver real‑time, personalized content with <200 ms latency while keeping cost under $2k/month.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Data Model** – Each user has a *follow graph* and a *content score* (likes, comments).  
2. **Design** –  
   *Store follow edges in DynamoDB (partition key = user_id, sort key = followee_id) for O(1) reads.*  
   *Pre‑compute top 200 posts per user with Kinesis Data Streams + Lambda → write to a Redis cluster (Elasticache) as a sorted set keyed by user_id.*  
   *Feed API: API Gateway → Lambda@Edge reads from Redis; if cache miss, falls back to DynamoDB scan + S3‑stored media URLs.*  
3. **Scalability** – Auto‑scaling Lambda and Redis handles 50k concurrent requests with 95th % latency <180 ms.  
4. **Cost** – DynamoDB on-demand (~$1.2k), Elasticache Redis‑cluster ($0.8k), Lambda ($0.1k) → total <$2.5k/month.

**Result (Deliver Results)**  
Post‑launch, the feed hit 98% of users within 150 ms; engagement rose 35% (time on app + likes). We reduced infrastructure spend by 28% compared to a monolithic design.  

**Learning & Bar‑raiser Notes** – I documented failure points (cold starts) and added provisioned concurrency, showing deep ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
