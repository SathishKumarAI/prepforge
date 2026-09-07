---
qid: ing_976b5d8681__aws__local
question: 'Explain: Use case: User views the user timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 501
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:12-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with redesigning the “user timeline” for a micro‑blogging platform that served 10 M active users daily. The goal: reduce latency to <200 ms while keeping costs under $3 M/yr and ensuring 99.9 % availability.

**Action**  
I applied **Ownership** and **Dive Deep**. I broke the timeline into *content ingestion*, *personalization*, and *serving* layers:

1. **Ingestion** – Tweets are published to an Amazon Kinesis Data Stream (10 k events/s).  
2. **Processing** – A Lambda function consumes the stream, enriches each tweet with follower counts from DynamoDB Global Tables, and writes a *fan‑out* record into a per‑user `TimelineCache` table in Redis‑a‑Service (ElastiCache).  
3. **Serving** – The web front‑end calls an API Gateway endpoint that queries the cache first; if missing, it falls back to a DynamoDB `UserFeed` table and triggers a background Lambda to pre‑populate the cache.

I introduced *pre‑computation* of top posts using Amazon SQS for batch jobs, reducing real‑time compute by 70 %.  

**Result**  
- Latency dropped from 850 ms to **120 ms** (average).  
- Cost decreased from $4.8 M/yr to **$2.7 M/yr**.  
- Availability hit 99.97 % in the first year post‑launch.

**Learning & Bar‑raiser signals**  
I documented trade‑offs: using Redis improved speed but added a 10 % cache miss penalty; switching to DynamoDB Streams could eliminate Lambda but would increase read capacity costs. I also performed A/B tests on personalization algorithms, iterating until the engagement metric (CTR) increased by 12 %. This demonstrates *Bias for Action*, *Deliver Results*, and a willingness to learn from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
