---
qid: ing_20b7f74e0b__aws__local
question: How does the Leaderboard work? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 559
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:15-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we built the leaderboard so that our users could instantly see how their models performed against a public baseline; *Dive Deep* – I dissected every latency and cost component to keep the service under 100 ms and <$0.01 per query.

**S**ituation  
A data‑science SaaS platform needed a real‑time public leaderboard for its Kaggle‑style competitions. Users expected instant ranking updates as new predictions streamed in, while we had to support millions of concurrent reads during peak contests.

**T**ask  
Design a scalable, highly available leaderboard system that ingests prediction scores, aggregates per‑user metrics, and serves ranked lists with sub‑100 ms latency for 10 k users per competition.

**A**ction  

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingest predictions | **Amazon Kinesis Data Streams** (shard per competition) | Low‑latency ingestion, auto‑scaling. |
| Compute aggregates | **AWS Lambda + Amazon DynamoDB Streams** | Serverless compute; triggers on stream events to update per‑user stats in a **DynamoDB table** (`UserStats`). |
| Rank computation | **Amazon ElastiCache for Redis (cluster mode)** | In‑memory sorted sets keep the top‑N list updated in real time. |
| API gateway | **API Gateway + Lambda@Edge** | Global edge caching, 99.99 % availability. |
| Monitoring | **CloudWatch + X-Ray** | Deep tracing of latency spikes; alerts on >200 ms queries. |

*Cost*: DynamoDB (on‑demand) $0.25/million writes; Lambda < $0.20/month for 10M events; Kinesis ~$0.015/GB; Redis cache ~$0.30/hour – total <$50/competition.  

**R**esult  
- Latency: 90 % of leaderboard queries under **70 ms**, 99th percentile at **120 ms**.  
- Throughput: Sustained 5,000 concurrent reads during peak contests with no timeouts.  
- Cost savings: 30 % lower than a monolithic RDBMS solution.  

**Reflection** – The first prototype used DynamoDB for ranking, causing hot‑partition spikes. Switching to Redis sorted sets eliminated the bottleneck and reduced cost by 15 %. This iterative “fail fast, learn, iterate” mindset embodies ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
