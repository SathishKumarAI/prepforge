---
qid: ing_2a31459c03__aws__local
question: 'Explain: A persistent key-value store for fast storage environments'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:52-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to replace an aging in‑memory cache that was throttling our ML inference service (latency > 120 ms on 70% of requests). The goal: build a *persistent* key‑value store that delivers sub‑10 ms reads while retaining data across restarts.

**Action – Design & Implementation**  
I chose **Amazon DynamoDB** as the backing store, using *partition keys* derived from model IDs and *sort keys* for versioning. To satisfy low‑latency needs I added a **DAX (DynamoDB Accelerator)** layer, configured with 4 nodes (600 RPS). For durability I enabled *point‑in‑time recovery* and *global tables* to replicate data across us-east-1 and eu-west-1.

I wrote an ingestion pipeline in **AWS Lambda** that streams training outputs from S3 into DynamoDB via the AWS SDK, batching 50 writes per invocation. The pipeline was instrumented with CloudWatch metrics; we set a *95th‑percentile* latency SLA of < 8 ms.

**Result**  
Post‑deployment, read latency dropped to **5 ms (99th percentile)** and write throughput scaled from 200 RPS to 1,500 RPS. The persistence layer eliminated data loss during outages, reducing incident impact time by **82%**. Cost increased only 12% compared to the legacy cache due to DAX pricing and minimal Lambda invocations.

**Leadership Principles & Learning**  
- *Customer Obsession*: Delivered a resilient service that never lost inference inputs.  
- *Dive Deep*: I benchmarked every AWS component, tuned partition keys, and iterated on batch size until latency met SLA.  
- *Ownership*: Took end‑to‑end responsibility from design to monitoring, ensuring seamless rollback paths.  

**Bar‑raiser notes** – The answer shows ownership, depth of technical choice, quantified impact, and learning (cost vs performance trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
