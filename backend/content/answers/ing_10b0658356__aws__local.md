---
qid: ing_10b0658356__aws__local
question: 'Explain: Design Uber — Grokking System Design Interview: Patterns & Mock
  Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 393
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:17-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* At my last gig I was tasked to prototype a “Uber‑like” ride‑hailing platform that could handle 1 M active users and 10 k rides per second during peak hours.  
*Task:* Build a scalable, highly available architecture while keeping latency <200 ms for booking confirmation.  
*Action:*  
- **Data model**: NoSQL (Amazon DynamoDB) for driver‑location shards keyed by geohash; relational (Aurora Serverless v2) for payment and trip history.  
- **Real‑time matching**: Publish/subscribe via Amazon Kinesis Data Streams → Lambda → API Gateway to a stateless matchmaking service.  
- **Geospatial search**: ElasticSearch with Geo‑Distance queries to find nearest drivers in <50 ms.  
- **Fail‑over & resiliency**: Multi‑AZ DynamoDB, Aurora Global Database, and Route 53 latency‑based routing.  
- **Cost control**: Spot Instances for batch driver status updates; autoscaling on Lambda concurrency.  

*Result:* In a pilot with 200 k users we achieved 99.98% request success, <180 ms average latency, and cut operational cost by 35 % versus a monolith design.  
*Learnings:* Early investment in data partitioning prevented hot‑spot bottlenecks; continuous monitoring (CloudWatch + X-Ray) revealed that 8 % of failures were due to stale geohash buckets—fixed with a scheduled cache refresh.

**What the bar‑raiser hears:** clear ownership, deep dive into trade‑offs (latency vs cost), quantified impact, and evidence of learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
