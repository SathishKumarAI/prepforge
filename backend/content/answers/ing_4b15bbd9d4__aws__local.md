---
qid: ing_4b15bbd9d4__aws__local
question: 'Explain: Search Service — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 491
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:05-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design an Instagram‑style search service for a startup that had 12 M daily active users and needed 99.9% query latency < 200 ms while scaling to 5× traffic over the next year.

**Action (A)**  
1. **Requirements & Scope** – Full‑text search on posts, hashtags, and user bios; relevance ranking by recency + engagement; real‑time updates for new media.  
2. **Architecture** –  
   * **Data ingestion**: Kinesis Data Streams → Lambda → DynamoDB (partitioned by `user_id`) + S3 (raw images).  
   * **Indexing**: Elasticsearch Service on EC2 Auto Scaling groups, shards per region; use AWS OpenSearch for full‑text and custom scoring.  
   * **Query Layer**: API Gateway + AppSync (GraphQL) → Lambda Authorizer → OpenSearch Query DSL.  
   * **Caching**: ElastiCache Redis for hot tags & trending queries.  
3. **Scalability / Availability** – Multi‑AZ deployments, Auto Scaling on CPU/latency metrics; read replicas for OpenSearch to handle bursty traffic.  
4. **Cost Control** – Spot instances for indexing nodes, reserved capacity for API Gateway + Lambda during peak hours; use S3 lifecycle policies to archive older media.

**Result (R)**  
After rollout:  
* 99.95% of queries returned <180 ms, exceeding the SLA by 20%.  
* Cost dropped 35% YoY through spot‑instance and caching optimizations.  
* Engagement metrics on posts increased 12% as users found relevant content faster.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Built a search experience that lowered friction for user discovery, directly boosting engagement.  
- **Ownership / Dive Deep**: Took end‑to‑end responsibility, performed latency tracing, tuned OpenSearch scoring, and iterated on cost models—learning from initial over‑provisioning of index shards.

This design balances performance, reliability, and budget while keeping the system extensible for future features like image similarity search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
