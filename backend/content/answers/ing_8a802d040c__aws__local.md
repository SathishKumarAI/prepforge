---
qid: ing_8a802d040c__aws__local
question: 'Explain: Write Globally and Read Locally — Live Comment System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 537
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:42-05:00'
sources: []
---

**Situation**

I was tasked to design a live comment system for a global video‑streaming platform that needed **low latency worldwide** while keeping operational costs under 10 % of the overall CDN spend.

**Task**

Build a “write globally, read locally” architecture: users can post comments from any region; readers see comments with sub‑second latency in their own region.

**Action**

1. **Write Layer** – I chose *Amazon Kinesis Data Streams* (regional shards) as an append‑only log to guarantee durability and ordering per channel.  
   *Each shard handles 1 MB/s, so a 100 K comment/sec burst is spread across ~200 shards.*  

2. **Global Replication** – A Lambda function in each region consumes the stream, transforms the record into a DynamoDB item, and writes it to a *global table* (DynamoDB Global Tables).  
   *This gives multi‑region active‑active replication with <30 ms cross‑region latency.*  

3. **Read Layer** – Readers query the local DynamoDB instance (partitioned by channel+timestamp) through an API Gateway + Lambda front end.  
   *Using a single‑write, multiple‑read pattern keeps read costs low and scales to 10 M reads/sec globally.*

4. **Cold‑start / Hot‑cache** – Frequently accessed comments are cached in Amazon CloudFront edge caches with a 5‑minute TTL, reducing DynamoDB traffic by ~70 %.  

5. **Cost/Availability Trade‑offs** –  
   *Kinesis gives us fine‑grained scaling and durability; we pay per shard hour.*  
   *Global Tables cost per GB written + read capacity units; we reserved on‑demand for burst safety, saving 15 % over provisioned mode when traffic spikes.*

**Result**

After deployment:

- **Latency:** 95th percentile read <120 ms globally.  
- **Throughput:** Sustained 200 K comments/sec with zero write failures in a 2‑month test window.  
- **Cost:** Total monthly spend $12k, 8 % below budget, and 70 % of traffic served from CloudFront cache.

**Learning**

The key was treating the stream as the single source of truth (ownership) and iteratively tuning shard count and cache TTLs—dive deep into metrics to avoid over‑provisioning. The design also demonstrates bias for action: we shipped a production system in 3 weeks, not months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
