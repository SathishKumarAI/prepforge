---
qid: ing_9df1750363__aws__local
question: 'Explain: Search Indexing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:07-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous e‑commerce company we ran a product recommendation engine that fed an ElasticSearch index used for search. The catalog changed every minute – new SKUs, price edits and inventory updates – but our indexing pipeline lagged by 15 min, causing stale results and a 4 % drop in click‑through rate (CTR). I was asked to build a low‑latency Change Data Capture (CDC) system that would keep the index fresh while keeping costs under $3k/month.

**Approach & Action (A)**  
I adopted **Customer Obsession** + **Dive Deep**.  
1. **Source → CDC**: enabled **DynamoDB Streams** on the catalog table; each write produced a stream record.  
2. **Ingest → Kinesis Data Firehose**: streamed records to an **S3 lake** (partitioned by hour) for durability and batch analytics, while also sending them to **Kinesis Data Analytics** for near‑real‑time transformation into JSON suitable for OpenSearch.  
3. **Indexing → Amazon OpenSearch Service**: used a **Lambda function** triggered by Firehose “delivery stream” events to upsert documents in bulk (max 1 MB per batch).  
4. **Monitoring & Scaling**: CloudWatch metrics + Auto‑Scaling on Lambda concurrency ensured <2 s end‑to‑end latency under peak load (30k writes/min).  

**Result (R)**  
- Latency dropped from 15 min to ~3 s, raising CTR by **7%**.  
- Operational cost remained below $2.5k/month due to serverless compute and auto‑scaling.  
- The pipeline now supports 10× catalog growth with minimal refactor.

**Learning & Bar‑raiser cues**  
I documented failure modes (e.g., Kinesis throttling) and built retry logic, demonstrating ownership and resilience—exact traits a bar‑raiser looks for in an AWS‑centric solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
