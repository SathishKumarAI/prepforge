---
qid: ing_c605d8a5d1__aws__local
question: 'Explain: Back in 2020 — Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 396
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:41-05:00'
sources: []
---

**Situation & Task (2020 Meta)**  
I was hired as a senior ML engineer to overhaul the real‑time recommendation pipeline that served 1 billion daily active users. The system was built on synchronous Spark jobs; latency hit 4 s, and we couldn’t meet SLAs for live ad placement.

**Action – Asynchronous Computing & AWS Design**  
*Customer Obsession & Ownership*: I mapped every request to a lightweight **SQS queue** and processed it with an **EC2 Spot‑based Fargate cluster** running a microservice that pulled model inference from **Amazon SageMaker Endpoint**.  
*Dive Deep*: We instrumented latency traces in **X-Ray**, identified the 70 % bottleneck in data shuffling, and replaced it with a **Kinesis Data Streams** buffer, enabling back‑pressure handling.  
*Bias for Action & Invent*: To reduce cost, I introduced **model quantization** (8‑bit) which cut GPU memory by 60 %, allowing us to run twice as many inference containers per node.

**Result**  
- Latency dropped from 4 s to **<200 ms** (95th percentile).  
- Throughput increased by **3×**, supporting an additional 500M impressions/month.  
- Cost decreased by **$1.2 M annually** due to Spot savings and model compression.

**Bar‑raiser Takeaway**  
I own the end‑to‑end flow, dive into telemetry to uncover hidden costs, quantify impact in business terms, and iterate fast—turning a brittle synchronous system into a scalable, cost‑efficient asynchronous architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
