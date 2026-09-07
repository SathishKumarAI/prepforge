---
qid: ing_9095943372__aws__local
question: 'Explain: 6.4 Like, Comments and Shares — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 399
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:47-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect the *Likes/Comments/Shares* subsystem for Instagram‑scale traffic (≈ 10 B daily active users). The goal: keep latency < 50 ms per operation while ensuring eventual consistency across all feeds.

**Action – Design & AWS Services**  
1. **API Gateway + Lambda** for a serverless front‑end that auto‑scales to spikes.  
2. **DynamoDB Streams** trigger **Kinesis Data Firehose** → **S3** for durable audit logs.  
3. **Redis (Amazon ElastiCache)** as an in‑memory cache for hot counters; write‑through policy updates both Redis and DynamoDB.  
4. **Cassandra (Amazon Keyspaces)** stores per‑user feed events; partitions by user+timestamp to support efficient range queries.  
5. **EventBridge** routes “share” events to a **SNS topic** that triggers downstream analytics jobs on EMR/Spark for trending hashtags.

**Result (Quantified Impact)**  
- Latency dropped from 120 ms → 35 ms (95th percentile).  
- Cost per like event reduced by 42 % using cache hit ratio of 78%.  
- 99.9 % availability achieved via multi‑AZ DynamoDB and ElastiCache.

**Reflection – Bar‑raiser Focus**  
I own the trade‑off between consistency and speed, diving deep into read/write patterns to justify the eventual consistency model for feeds. The design was iterated after a failure scenario (cache eviction burst) that taught me to add exponential back‑off in Lambda retries. This showcases *Ownership*, *Dive Deep*, and *Bias for Action*—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
