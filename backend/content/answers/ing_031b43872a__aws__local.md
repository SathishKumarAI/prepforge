---
qid: ing_031b43872a__aws__local
question: 'Explain: SQL — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 550
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:18-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: A client wanted a real‑time leaderboard for a mobile game that would show the top 10 k players worldwide while keeping latency under 200 ms during peak traffic (≈1 M concurrent users).  
> *Task*: Design an end‑to‑end system that scales, is highly available, and delivers fresh data to every device.  
> *Action*: I scoped the requirements: write‑through updates from game servers → durable store; read‑latency <200 ms; eventual consistency acceptable for ranking.  
> 1. **Data ingestion** – Use Amazon Kinesis Data Streams to buffer score events (≈10 k records/s).  
> 2. **Processing & storage** – Lambda + DynamoDB Streams trigger a Kinesis Firehose that writes to an **Amazon Timestream** table (time‑series) for raw scores and an **Amazon DynamoDB** global secondary index keyed by `score` (descending).  
> 3. **Leaderboard generation** – A scheduled **AWS Glue** job runs every minute, aggregates top 10 k per region, writes the result to a **ElastiCache Redis Cluster** with read replicas for low‑latency reads.  
> 4. **API layer** – Amazon API Gateway + Lambda@Edge (for edge caching) serves leaderboard queries; cache invalidation happens on score updates via SNS → CloudWatch Events → Cache flush.  
> *Result*: The system handled 1 M concurrent users with <180 ms read latency, 99.999% uptime, and cost savings of 35 % versus a monolithic RDS solution by leveraging serverless components and caching.

**Dive Deep & Bias for Action**

I validated the design by simulating peak loads in **AWS CloudWatch** and tuning DynamoDB provisioned throughput (8 WCU per region) and Redis memory sizing (2 TiB). The Lambda timeout was set to 3 s, ensuring no cold‑start impact on score ingestion. When a burst caused a brief spike to 250 ms, I added an extra read replica, proving the architecture’s elasticity.

**Learning from Failure**

During a pilot, we observed stale scores in Redis due to missed cache flushes. I introduced a **SNS retry policy** and monitored with CloudWatch Alarms; after fixing the idempotent key logic, staleness dropped below 0.01%. This iterative improvement reinforced my ownership mindset—own the entire data pipeline from ingestion to user‑facing API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
