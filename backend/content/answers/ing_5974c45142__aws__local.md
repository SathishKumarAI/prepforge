---
qid: ing_5974c45142__aws__local
question: 'Explain: Compression and Downsampling — InfluxData'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 416
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:14-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation** – While architecting a real‑time telemetry pipeline for an IoT fleet (~1 M events/sec), I had to reduce storage cost and network load without losing predictive power for anomaly detection.  
> **Task** – Design a compression/downsampling strategy that keeps model accuracy above 95% while cutting data volume by ≥70%.  
> **Action** –  
> *Applied **Customer Obsession**:* consulted data scientists to understand the minimum sampling rate needed per sensor type.  
> *Used **Dive Deep**:* profiled latency, CPU and memory of several codecs (Snappy, LZ4, Zstd) on sample payloads.  
> *Implemented a two‑stage pipeline in AWS:*
> 1. **Kinesis Data Streams** → **Lambda** aggregates raw events into 10 s windows; each window is compressed with **Zstandard** and stored in **S3 Glacier Deep Archive** (cost $0.004/GB).  
> 2. Periodic **Glue ETL** runs a downsampling algorithm that keeps the first N samples per sensor plus statistically significant outliers, producing a *compressed* dataset (~30 % of original size) used by SageMaker for model training.  
> *Ensured **Availability**:* Kinesis shards auto‑scale; Lambda retries on failures; S3 provides 99.999999999% durability.  
> *Optimized **Cost**:* Compression saved ~70 % storage, and Lambda’s pay‑per‑execution reduced compute spend by 40%.  
> **Result** – Model accuracy remained at 96%, latency dropped from 2 s to <500 ms, and total monthly cost fell from $12k to $3.5k.  
> **Learnings** – Early collaboration with data scientists avoided costly rework; continuous monitoring of compression ratio keeps the trade‑off optimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
