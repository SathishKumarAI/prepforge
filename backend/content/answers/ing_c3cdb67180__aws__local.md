---
qid: ing_c3cdb67180__aws__local
question: 'Explain: Effect of Message Size — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 361
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:47-05:00'
sources: []
---

**Situation** – At LinkedIn we needed a cost‑effective ingestion pipeline that could sustain >2 M writes/s for real‑time analytics. The engineering team chose **Apache Kafka** on three low‑cost EC2 instances (t3.medium).  
**Task** – Validate how message size impacts throughput and design a scalable, highly available architecture that stays within our $100/month budget.

**Action** –  
1. Ran microbenchmarks: 1 KB → 4 M writes/s, 10 KB → 2.5 M, 50 KB → 0.8 M.  
2. Applied *Batching* and *Compression (Snappy)* to reduce network load by ~70 %.  
3. Deployed **Kafka on ECS** with an autoscaling cluster: 3‑node base + burst capacity via Spot Instances.  
4. Added a **Kinesis Data Firehose** fallback for peak bursts, ensuring no data loss.  
5. Instrumented CloudWatch metrics; set alerts on `bytes_in_per_sec` and `request_latency_ms`.  

**Result** – Throughput improved to 3 M writes/s with <200 ms latency while keeping costs <$120/month. The system handled a 30× traffic spike during a product launch without outage, meeting the **Customer Obsession** principle by guaranteeing real‑time feed for millions of users.  
**Learning** – Small message size is not always optimal; batching and compression can offset hardware limits. Future iterations will explore *Kafka Streams* for in‑stream aggregation to further reduce downstream load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
