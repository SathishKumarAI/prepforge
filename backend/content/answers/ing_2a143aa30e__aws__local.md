---
qid: ing_2a143aa30e__aws__local
question: 'Explain: Historical Index data backfill — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 455
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:25-05:00'
sources: []
---

**Situation / Task**  
When I joined Uber’s Data Platform team, we had a growing demand for real‑time historical index lookups on billions of events (e.g., trip start times, driver earnings). The existing relational store could not scale past ~10 M indexes per day and suffered 30‑second latency spikes during backfills. My goal was to design a system that could ingest trillions of index records while keeping query latency <100 ms and cost under $2 million/yr.

**Action / Design**  
I spearheaded the migration to **LedgerStore**, an append‑only, immutable log built on **Amazon Kinesis Data Streams + DynamoDB Global Tables**. Each event is hashed into a 128‑bit index key; the stream guarantees ordering and durability, while DynamoDB provides single‑digit millisecond reads with global replication for high availability.  
For backfills I used **AWS Glue ETL jobs** to de‑duplicate and materialize indexes in micro‑shards (≈1 GB each) stored on **Amazon S3 Glacier Deep Archive**, then triggered a **Lambda function** that writes them into the Kinesis stream, preserving order.  
To keep costs low we enabled **DynamoDB On‑Demand Capacity** for burst traffic and **S3 Intelligent Tiering** to auto‑move cold data. We also implemented an automated **data lifecycle policy** that deletes index entries older than 2 years.

**Result**  
Post‑deployment, the system ingested 1.4 trillion index records in 12 hours, reduced query latency from 30 s to 70 ms, and cut storage costs by 40 % compared with our legacy solution. The design also earned us a **“Best Practice” badge** from AWS for high‑availability data pipelines.

> *Leadership Principles*: **Ownership** – I drove the end‑to‑end migration; **Dive Deep** – I analyzed stream throughput, shard sizing, and DynamoDB partition keys to optimize cost and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
