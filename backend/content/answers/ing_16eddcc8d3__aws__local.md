---
qid: ing_16eddcc8d3__aws__local
question: 'Explain: Push and pull queries — Database Streaming with ksqlDB | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:24-05:00'
sources: []
---

**Situation & Task**  
When my team migrated the real‑time fraud detection pipeline from a batch ETL to an event‑driven architecture, we needed a way to surface both “current” state and historical aggregates without sacrificing latency. The challenge was to expose **push** (streaming) and **pull** (query‑on‑demand) semantics over the same data set while keeping costs under $5k/month.

**Action & Design**  
I proposed using **ksqlDB** on Confluent Cloud, backed by an **Amazon MSK** cluster for durability. For push queries we created KSQL streams that materialized aggregates in a *ktable* and exposed them via the REST API (Customer Obsession – giving analysts instant insights). Pull queries were implemented as KSQL “materialized views” that could be refreshed on demand through a Lambda trigger, ensuring freshness without over‑provisioning.  
We leveraged **Amazon S3** for long‑term storage of raw events and used **AWS Glue** to catalog the data for Athena queries (Invent & Simplify). To keep the solution highly available we enabled multi‑AZ MSK replication and set ksqlDB to auto‑restart on failures, reducing MTTR to <2 min.

**Result**  
The new system cut fraud detection latency from 12 hrs to **under 5 seconds** (Deliver Results), increased analyst throughput by **40%**, and lowered operational costs by **30%** versus the previous Kafka Streams + Redshift solution. Post‑deployment, we identified a mis‑configured retention policy that caused stale data; I instituted automated CloudWatch alerts and a quarterly audit process—demonstrating Ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
