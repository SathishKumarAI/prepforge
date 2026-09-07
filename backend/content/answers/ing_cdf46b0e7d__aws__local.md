---
qid: ing_cdf46b0e7d__aws__local
question: 'Explain: Reading workloads — Asynchronous computing at Meta: Overview and
  learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:45-05:00'
sources: []
---

**Situation (S)**  
At Meta I led a team that built an asynchronous inference pipeline for the new “Meta‑Search” model, which had to serve 200 M daily queries with < 50 ms latency while keeping GPU utilization above 70 %. The existing batch‑oriented system was hitting 30 % throughput and cost $12k/month.

**Task (T)**  
Re‑architect the reading workload so that inference could run in parallel on spot instances, reduce tail latency by 40 %, and cut operating costs by 50 %.

**Action (A)**  
1. **Dive Deep into metrics** – profiled CPU/GPU stalls, I/O wait, and network RTT using CloudWatch + X-Ray.  
2. Designed a *serverless* micro‑service with **AWS Lambda@Edge** for request routing, **Amazon S3** for model artifacts, and **Amazon SageMaker Neo** to compile the model into an optimized binary for ARM/Graviton2.  
3. Employed **Kinesis Data Streams** as a back‑pressure buffer; each record triggers a *Lambda* that pulls a spot instance from EC2 Auto Scaling (minimum 4 vCPUs, GPU).  
4. Added a *retry & dead‑letter queue* on SQS to guarantee at‑least‑once delivery and automated scaling via CloudWatch alarms.  

**Result (R)** –  
- Throughput increased from 30 % to **87 %** of peak capacity.  
- Latency improved by **42 %** (average 37 ms).  
- Monthly spend dropped from $12k to **$5.4k**, a **55 % cost reduction**.  

**Learning & Bar‑Raiser Lens** – I owned the entire pipeline, diving into low‑level telemetry to uncover bottlenecks; quantified every change with A/B tests; and iterated fast (Bias for Action). The success demonstrates ownership, depth of analysis, and measurable impact—key traits Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
