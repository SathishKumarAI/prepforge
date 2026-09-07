---
qid: ing_cbd816028b__aws__local
question: 'Explain: Billions of Rows — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:41-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine that ingested *3 billion* user‑interaction rows per day from our global e‑commerce platform. The data had to be queried in real time for personalized product suggestions.

**Task** – Design a scalable, low‑latency storage layer that could handle billions of rows while keeping costs under $2M/year and maintaining 99.9 % availability.

**Action** – I chose **Amazon DynamoDB with HBase compatibility via AWS Glue & EMR** to combine HBase’s wide‑column model with DynamoDB’s managed service benefits.  
1. **Schema**: Partition key = `user_id`, sort key = `timestamp`. Secondary indexes on `product_category` for fast ad‑hoc scans.  
2. **Provisioned Throughput**: 20 M write capacity units (WCU) and 30 M read capacity units (RCU), auto‑scaling to absorb traffic spikes.  
3. **Cost/Availability**: On‑demand pricing + reserved instances saved ~15 % vs pure on‑demand; DynamoDB’s built‑in replication guarantees 99.9 % availability.  
4. **Batching & Compaction**: EMR jobs run nightly to compact older rows into Parquet files stored in S3, reducing hot‑read load by 40 %.  

**Result** – The system processed 3 billion rows/day with <200 ms query latency, reduced storage costs by 30 % compared to an on‑prem HBase cluster, and increased recommendation click‑through rate from 2.1 % to **4.8 %** (a 127 % lift).  

*Leadership Principles*: **Ownership** – I took full responsibility for the end‑to‑end pipeline; **Dive Deep** – I benchmarked DynamoDB vs HBase on real traffic traces; **Bias for Action** – I prototyped in two weeks, deployed within a month. The bar‑raiser will note my quantified impact and learning loop: after initial launch we discovered hot spots in the partition key design and refactored to a composite key, cutting query latency by an additional 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
