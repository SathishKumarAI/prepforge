---
qid: ing_e7ab0aa643__aws__local
question: 'Explain: Kafka Topics and Partitions — The Ultimate Kafka 101 You Cannot
  Miss'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 375
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:29-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to migrate our real‑time telemetry pipeline from an on‑prem Spark/Storm stack to Amazon MSK. The goal: double ingestion throughput while keeping latency < 50 ms and staying under a $0.10/GB cost ceiling.

**Action (Design)**  
I treated each event stream as a *Kafka topic* and split it into **12 partitions**.  
- **Partitioning strategy:** hash on device‑id → even distribution, ensuring parallel consumers can read concurrently.  
- **MSK configuration:** broker count 3 for HA, replication factor 2 to survive an AZ failure.  
- **Consumer group design:** one consumer per partition (auto‑scaling with Kinesis Data Streams as a fallback).  

I used **AWS Lambda** + **Amazon SQS** for downstream processing, and **Amazon DynamoDB** for stateful aggregates. For cost control I enabled **broker auto‑termination** during off‑peak hours.

**Result**  
- Throughput rose from 200 k msg/s to 480 k msg/s (240% increase).  
- Latency dropped to 30 ms average.  
- Total cost fell by 35 %, staying below the $0.10/GB target.  

**Reflection**  
I owned the migration, diving deep into MSK metrics and adjusting partition count iteratively—learning that too many partitions hurt latency due to increased coordination overhead.

> **Leadership Principles:** *Ownership* (took end‑to‑end responsibility), *Dive Deep* (iterative tuning of partitions & replication).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
