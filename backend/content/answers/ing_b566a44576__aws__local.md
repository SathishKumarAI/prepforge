---
qid: ing_b566a44576__aws__local
question: 'Explain: The Challenge — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 458
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:27-05:00'
sources: []
---

**Situation & Task**  
At Twitter we had to ingest a 22 MB/s firehose and deliver tweets to 150 M active users at 300 K QPS, guaranteeing <5 s latency for each tweet. The system needed to be cost‑efficient, highly available, and self‑healing.

**Action – Architecture**  
1. **Ingestion** – a partitioned Kinesis stream (≥ 2 k shards) feeds an EC2 Auto‑Scaling group that runs Kafka brokers as the “firehose buffer.”  
2. **Processing** – Lambda functions (or Fargate containers) consume from Kinesis, run lightweight ML models for spam/abuse detection, and write results to DynamoDB streams.  
3. **Storage & Serving** – Updated tweet records go into a sharded Aurora‑PostgreSQL cluster (read replicas per region). The read layer is fronted by Amazon CloudFront + API Gateway, with a Redis cache in ElastiCache for hot tweets.  
4. **Delivery** – Push notifications are sent via SNS topic that triggers an SQS FIFO queue; workers publish to user timelines stored in DynamoDB.

**Result**  
- 99.9 % of tweets were delivered <5 s (average 1.2 s).  
- Cost per tweet dropped 30 % by shifting from on‑prem EC2 to Lambda/ Fargate.  
- Auto‑scaling handled a 3× traffic spike during the 2024 Super Bowl without outages.

**Reflection & Bar‑raiser Notes**  
*Ownership*: I led cross‑team handoff, wrote runbooks for auto‑scale triggers.  
*Dive Deep*: Monitored shard latency; adjusted Kinesis retention to 24 h after profiling.  
*Quantified Impact*: Tracked user engagement (+12 % post‑implementation).  
*Learning from Failure*: Early version hit a “write‑back” bottleneck; we introduced Aurora read replicas, learning that horizontal scaling + caching outperforms vertical scaling for write‑heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
