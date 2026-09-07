---
qid: ing_ba68c6ebc8__aws__local
question: 'Explain: Data Processing — Concurrency vs Parallelism - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 376
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:05-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign our nightly ML pipeline that ingested ~200 GB of raw telemetry and produced feature vectors for a downstream model trainer. The existing single‑threaded ETL stalled during peak hours, causing a 4‑hour delay in model updates.

**Action (Concurrency vs Parallelism)**  
- **Dive Deep & Ownership:** I profiled the pipeline with CloudWatch Insights; identified that data read/write were bottlenecks while CPU‑bound transformations could be parallelized.  
- **Parallelism**: Split the 200 GB into 50 GB shards and launched 10 **AWS Glue** jobs in parallel, each running on a dedicated DPUs. This achieved *O(n)* scaling for CPU‑bound tasks.  
- **Concurrency**: Leveraged **S3 Transfer Acceleration** to stream multiple shards concurrently into the same Glue job, reducing I/O contention by 70 %.  
- **AWS Step Functions** orchestrated the jobs, retrying failed shards and ensuring idempotency (Bias for Action).  

**Result**  
Pipeline runtime dropped from 4 hrs to 45 min—an 88 % reduction—allowing models to be refreshed twice daily. Cost per run fell by ~30 % thanks to efficient DPUs and reduced S3 read/write operations.

**Reflection**  
I learned that *concurrency* mitigates I/O latency while *parallelism* exploits CPU throughput; combining both yields the best performance for data‑heavy ML workloads. This aligns with **Customer Obsession** (delivering timely insights) and **Ownership** (owning end‑to‑end pipeline health).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
