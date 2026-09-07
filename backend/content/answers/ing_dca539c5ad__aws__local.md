---
qid: ing_dca539c5ad__aws__local
question: 'Explain: Fan-Out — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 460
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:52-05:00'
sources: []
---

**Situation / Task (Customer Obsession & Ownership)**  
At my previous role I was asked to build a real‑time analytics pipeline for a video‑streaming platform that had to deliver personalized recommendations to 10 M concurrent users. The requirement: any event (view, like, pause) must be broadcast to dozens of downstream services with <100 ms latency.

**Action (Dive Deep & Bias for Action)**  
I chose **Amazon SNS + Lambda + Kinesis Data Streams**:

1. **SNS Topic** – acts as the fan‑out layer; each publisher publishes a JSON event once per user action.
2. **Lambda Subscribers** – lightweight micro‑services that transform and enrich events, then push to downstream queues.
3. **Kinesis Streams** – provide durable, scalable ingestion for heavy‑weight consumers (recommendation engine, fraud detector).  
   *Scalability*: SNS scales horizontally automatically; Lambda concurrency can be throttled to 10 k invocations/sec. Kinesis shards were provisioned at 2000 shards → 1.6 MB/s per shard, enough for >20 M events/day.  
4. **Cost**: SNS $0.50/1M publishes; Lambda ~$0.20/million invocations; Kinesis ~$0.015/shard‑hour. Total estimated <$3k/month vs legacy MQ (~$15k).

I added a CloudWatch alarm on *delivery failures* and a DLQ to ensure no data loss.

**Result (Deliver Results)**  
After deployment, event latency dropped from 350 ms to **<80 ms**; fan‑out hit 99.9% success rate. The recommendation service’s throughput increased by **40%**, directly boosting user engagement (+12 hrs/month per active user).  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end design, dove into metrics (latency, failure rates), and iterated quickly after a launch hiccup (Lambda timeout). The solution remains cost‑effective, highly available, and easily extendable to new event types.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
