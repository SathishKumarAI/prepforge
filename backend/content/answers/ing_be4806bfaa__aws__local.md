---
qid: ing_be4806bfaa__aws__local
question: 'Explain: Reference — Search Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 461
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:42-05:00'
sources: []
---

**Situation (S)** – At my previous role I led a recommendation engine for an e‑commerce platform that served ~1 M daily active users. The ML model needed to pull contextual data from our search logs in real time, but the existing search database was a monolithic MySQL cluster that couldn’t handle the 200 k queries per second (QPS) spike during promotions.

**Task (T)** – I had to design a reference‑search architecture that could provide low‑latency, scalable data feeds for our ML pipeline while keeping cost under $2 M/yr and maintaining >99.9% availability.

**Action (A)**  
1. **Data‑driven decomposition** – Extracted only the columns needed by the model (user ID, query text, click timestamps) and stored them in an S3 data lake partitioned by hour.  
2. **Real‑time ingestion** – Set up Kinesis Data Streams to capture search events at 250 k QPS, then a Lambda function that writes micro‑batches into Amazon DynamoDB tables (partition key = userID).  
3. **Search reference service** – Built an Elastic Search domain (OpenSearch) with replicas for HA; used AWS Glue to catalog the S3 lake and Athena to run ad‑hoc analytics.  
4. **ML pipeline** – Employed SageMaker Endpoint that pulls data via DynamoDB Streams, processes it in a 1 min batch, and updates feature vectors stored back into DynamoDB.  

**Result (R)** – The new architecture cut query latency from 350 ms to <80 ms during peak loads, increased recommendation click‑through rate by **12%**, and reduced infra cost by **18%** ($360k/yr). I documented the trade‑offs: DynamoDB offers low cost and auto‑scaling but limited complex joins; OpenSearch provides full‑text search with near‑real‑time indexing.  

*Leadership Principles highlighted:* **Ownership** – took end‑to‑end responsibility for the data flow, **Dive Deep** – performed granular analysis of query patterns to design efficient partitions, and **Deliver Results** – delivered measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
