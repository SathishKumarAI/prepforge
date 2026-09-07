---
qid: ing_6c9078162b__aws__local
question: 'Explain: Redis Streams — Redisstreams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 435
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:05-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a fraud‑prevention team that needed real‑time ingestion of ~3 M transaction events per day. The existing Kafka stack had high latency and operational overhead, causing alerts to lag by 15–20 seconds. My goal was to reduce processing time below 5 seconds while keeping cost < $10k/month.

**Action & Design**  
I evaluated **Redis Streams** as a lightweight event‑driven alternative. I mapped each transaction to a stream entry (`XADD tx_stream * user_id amount timestamp`). Consumers were implemented with `XREADGROUP` in a consumer group, ensuring at‑least‑once delivery and parallel processing across 4 EC2 Spot instances (t3.medium).  
Key AWS services:  
- **Amazon ElastiCache for Redis** (cluster mode disabled, 2 shards) – low‑latency key‑value store.  
- **AWS Lambda** triggered by `XREADGROUP` via a custom wrapper to process batches of 100 events, keeping the compute cost near zero.  
- **Amazon CloudWatch** for metrics (`stream.bytes_in`, `consumer.pending`) and alerts.

**Result**  
Latency dropped from 18 s to 3 s (84% reduction). Throughput remained stable at 300k events/min with no data loss. Monthly spend fell from $12k to $7k, a 42% savings.  

**Reflection & Learnings**  
I owned the end‑to‑end pipeline and *dove deep* into Redis internals (e.g., consumer group offsets) to troubleshoot a spike in pending messages. The failure to monitor `consumer.pending` initially caused backlogs; adding CloudWatch alarms prevented future outages. This project exemplifies **Customer Obsession** (fast fraud alerts), **Ownership** (full lifecycle), and **Dive Deep** (profiling Redis performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
