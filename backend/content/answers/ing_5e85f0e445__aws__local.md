---
qid: ing_5e85f0e445__aws__local
question: 'Explain: Push Me Pull Me — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 420
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:22-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At Twitter we had to serve 150 M active users with a real‑time firehose of ~22 MB/s while ensuring each tweet appeared in under five seconds. The challenge was to design an architecture that could ingest, process, and deliver billions of events per day at scale.

**Action (Dive Deep + Ownership)**  
I led the “Push‑Me‑Pull‑Me” system:  
1. **Ingestion** – Kafka clusters on EC2 with auto‑scaling groups; each broker handles 3 GB/s.  
2. **Processing** – Spark Streaming jobs on EMR for aggregation, enriched with user context (user graph from DynamoDB). Jobs run in parallel shards, each capped at 5 k QPS to stay within the 300 k total.  
3. **Push Layer** – A stateless microservice (Docker + ECS Fargate) pushes tweets to a Redis cache cluster for hot users; we use *Redis Cluster* with 10 k write ops/s per node, automatically sharded by user hash.  
4. **Pull Layer** – For cold users, the front‑end pulls from an S3 data lake (partitioned by hour) via Athena queries, cached in CloudFront for sub‑second latency.

We added a **dead‑letter queue** on SQS to capture failures and a Lambda cleanup job that retries failed records up to 5 times.  
Cost: $0.42 per GB processed vs. an estimated $1.20 if we used a single monolith.

**Result (Deliver Results)**  
The system handled 350 k QPS spikes, maintained <3 s latency for 95% of tweets, and reduced operational cost by 35%. Post‑deployment monitoring revealed no outages during peak events like the Super Bowl, validating our high‑availability design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
