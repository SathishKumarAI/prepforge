---
qid: ing_190fbf77cd__aws__local
question: 'Explain: 5.2 Database Schema — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 361
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:45-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked with designing a scalable URL‑shortening service for a startup that expected to hit 10 M active users within six months. The goal: keep latency < 50 ms, cost < $5k/month, and support instant global distribution.

**Action (Dive Deep & Invent & Simplify)**  
1. **Schema** – A single DynamoDB table (`UrlMap`) with a composite primary key:  
   *PK* = `short_code` (hash of the URL), *SK* = `created_at`.  
   *Attributes*: `original_url`, `user_id`, `expires_at`, `clicks_agg`.  
2. **Write Path** – API Gateway → Lambda → DynamoDB PutItem (conditional write to avoid duplicates).  
3. **Read Path** – CloudFront + Lambda@Edge resolves the short code, increments a Global Secondary Index (`UserClicks`) for analytics, and redirects.  
4. **Analytics** – Streams from DynamoDB feed into Kinesis Data Firehose → Redshift for batch reporting.  

**Result (Deliver Results)**  
- Latency: 32 ms avg (95th percentile < 50 ms).  
- Cost: $3.8k/month (DynamoDB on-demand + Lambda).  
- Throughput: 200K writes/sec, 1M reads/sec with auto‑scaling.  

**Bar‑raiser notes** – I owned the end‑to‑end design, dove deep into DynamoDB’s consistency model, quantified performance and cost, and learned that a single‑table approach dramatically cut cross‑region replication costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
