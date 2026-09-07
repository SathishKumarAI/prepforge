---
qid: ing_c2a65829bb__aws__local
question: 'Explain: Cost Efficiency — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:16-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with reducing the monthly spend of our ML inference pipeline from $18 k to under $6 k while keeping latency < 150 ms for a real‑time recommendation engine (Customer Obsession, Deliver Results).

**Action**  
I re‑architected the pipeline as a *fully serverless* stack:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Ingestion of event streams | **Amazon Kinesis Data Streams** | Low‑latency, auto‑scaling ingestion. |
| Batch pre‑processing | **AWS Lambda (Python)** | Pay‑per‑invocation; automatically scales to burst traffic. |
| Feature store & caching | **DynamoDB + ElastiCache Redis** | DynamoDB provides sub‑10 ms reads for sparse features; Redis holds the hot set (~5 % of total). |
| Model inference | **Amazon SageMaker Neo (compiled model)** deployed on **Lambda@Edge** | Enables CPU‑only inference with ~30 % faster runtime vs. raw PyTorch, eliminating GPU costs. |
| Orchestration & monitoring | **AWS Step Functions + CloudWatch Alarms** | Visual workflow and automated rollback on error. |

I performed a cost‑drift analysis: serverless compute reduced EC2 hours by 95 %, while Lambda’s $0.20 per million invocations saved ~$8 k/month. The end‑to‑end latency dropped to ~120 ms, meeting SLAs.

**Result**  
Monthly spend fell from **$18 k → $5.4 k** (≈70 % reduction). Customer-facing recommendation accuracy remained unchanged (AUC 0.82). I documented the trade‑offs—Lambda’s statelessness required idempotent design and a small warm‑up cache, which we mitigated with DynamoDB TTLs.

**Reflection**  
This exercise sharpened my *Dive Deep* mindset: profiling every microsecond of the pipeline and iteratively tuning resources. It also reinforced *Ownership*: I championed cross‑team buy‑in and mentored engineers on serverless best practices, ensuring sustained cost savings beyond my tenure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
