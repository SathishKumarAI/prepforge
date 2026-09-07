---
qid: ing_ade7e0c2dc__aws__local
question: 'Explain: Bandwidth — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 546
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:47-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team at my last company, we were asked to launch an online leaderboard that would rank millions of players in real time for a global e‑sports tournament. The system had to ingest score updates from over **50 k concurrent users**, keep the top 10 k visible with sub‑second latency, and support daily traffic spikes up to **300 M events**.

**Action (Design)**  
1. **Data ingestion:** I chose **Amazon Kinesis Data Streams** for its low‑latency, auto‑scaling ingest layer. Each score event is a record; the stream shards are sized to handle 5 k records/second per shard, giving us ~10 shards for peak load.  
2. **Processing & Aggregation:** A fleet of **AWS Lambda** functions consumes Kinesis events, updates an **Amazon DynamoDB Global Secondary Index (GSI)** keyed by `score DESC`. The GSI allows O(1) reads for the top N scores while keeping write throughput capped at 10 k RCU/WCU per table.  
3. **Caching & Delivery:** We cache the current leaderboard in **ElastiCache Redis** with a TTL of 5 s, serving it via **CloudFront** so that viewers get a consistent snapshot without hitting DynamoDB repeatedly.  
4. **Analytics & Archival:** Raw events are persisted to **S3** for audit and offline ML training; Athena queries give us weekly trend reports.

**Result**  
- Achieved **99.9 % request success** with an average latency of 120 ms under peak load.  
- Cost‑effective: $2,400/month versus a self‑hosted EC2 solution that would have cost >$10k.  
- Reduced leaderboard refresh time from 4 s to 0.3 s, boosting user engagement by **15%**.

**Learning & Bar‑raiser cues**  
I owned the end‑to‑end pipeline, diving deep into shard sizing and DynamoDB throughput calculations. I iterated quickly—moving from Lambda to Kinesis Data Firehose after a 12 h outage—and documented each failure, turning it into a post‑mortem that saved us $1k/month in over‑provisioned capacity. This demonstrates **Ownership**, **Dive Deep**, and a bias for action—all key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
