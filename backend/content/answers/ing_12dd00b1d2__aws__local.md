---
qid: ing_12dd00b1d2__aws__local
question: 'Explain: so that''s one problem another problem is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 477
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:06-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked by the product team to build a real‑time fraud detection pipeline for credit‑card transactions. The existing batch model lagged 15 min and missed 12% of high‑risk events. My goal: cut latency below 1 s while maintaining ≥95 % precision.

**Action (Design)**  
I adopted an *event‑driven* architecture:

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingestion | Amazon Kinesis Data Streams | Handles >10k TPS with <200 ms latency. |
| Feature store | DynamoDB + Lambda | Low‑latency key/value lookups for user attributes. |
| Model inference | SageMaker Real‑Time Endpoint (CPU‑optimized) | 0.8 s average response; autoscaled by CloudWatch. |
| Decision & alert | Amazon SNS + Step Functions | Orchestrates fallback to batch model if endpoint fails. |

I used *model drift monitoring* with SageMaker Model Monitor, triggering retraining when precision dropped below 94%. I also added a lightweight “rule‑based” pre‑filter in Lambda (30 ms) to drop obvious non‑fraud cases, reducing inference load by ~35%.

**Result**  
- Latency dropped from 15 min → <1 s.  
- Precision improved from 88% to 96%, recall up by 7%.  
- Throughput handled 25k TPS with a 99.9% availability SLA.  
- Cost decreased 18% due to the pre‑filter and spot instance usage for training.

**Reflection (Leadership)**  
*Ownership*: I owned the end‑to‑end pipeline, from data prep to monitoring dashboards.  
*Dive Deep*: I debugged latency spikes by tracing CloudWatch logs and discovered a hot key in DynamoDB; resolved it with adaptive partitioning.  
*Learned*: Early iterations over‑estimated GPU usage—learning that CPU inference was sufficient saved $12k/month.

This project exemplifies **Customer Obsession** (delivering instant fraud protection) and **Ownership** (end‑to‑end delivery & continuous improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
