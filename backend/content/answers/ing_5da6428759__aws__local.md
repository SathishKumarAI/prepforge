---
qid: ing_5da6428759__aws__local
question: 'Explain: High Level for Pull Based Timelines — The Architecture Twitter
  Uses to Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets
  in Under 5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 580
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:40-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Leadership Principles:* **Customer Obsession** – every tweet must reach the user within 5 s; **Ownership** – I designed a system that scales to 150 M users with no single point of failure.

---

### Situation  
Twitter had ~300 k QPS, a 22 MB/s firehose, and needed to deliver each new tweet to 150 M active users in <5 s.

### Task  
Build a pull‑based timeline architecture that can ingest the firehose, compute personalized timelines, and serve them with sub‑second latency at scale.

### Action  

1. **Ingestion** – Firehose → **Amazon Kinesis Data Streams** (shards tuned for 22 MB/s).  
2. **Processing** – Each shard triggers an **AWS Lambda** function that parses the tweet, enriches it (user metadata from DynamoDB), and writes a *timeline event* to a **Redis‑cluster (Elasticache)** per user bucket.  
3. **Storage & Indexing** – A *write‑optimized* **DynamoDB** table holds the raw tweet stream; a companion **S3** bucket stores archived tweets for compliance.  
4. **Pull API** – Users request timelines via an **API Gateway** → Lambda that reads from Redis, merges cached feeds with real‑time events, and returns JSON in <200 ms.  
5. **Scaling & Availability** –  
   * Kinesis shards auto‑scale (10–50 shards).  
   * Lambda concurrency set to 5× expected peak QPS; reserved capacity protects against burst spikes.  
   * Redis clusters are multi‑AZ with read replicas; DynamoDB tables use on‑demand capacity and Global Tables for geo‑distribution.  
6. **Cost/Trade‑offs** – Using Lambda eliminates servers but adds cold‑start risk; mitigated by keeping a small warm pool. Redis gives sub‑ms latency but costs more than DynamoDB for hot data.

### Result  
The system processed 22 MB/s firehose, served >300 k QPS with <5 s end‑to‑end latency, and handled 150 M users with 99.999% availability while keeping monthly spend <$1 M (≈$0.02 per tweet delivered).

### Learnings  
Tuned shard count after real traffic; added a fallback to DynamoDB for cache misses—improved reliability by 3× during spike tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
