---
qid: ing_30001e45bf__aws__local
question: 'Explain: Portfolio & projects that actually impress'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 486
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:41-05:00'
sources: []
---

**Portfolio that Amazes – Customer Obsession + Ownership**

> **Situation** – My recruiter asked for a portfolio that “shows impact.”  
> **Task** – Build a proof‑of‑concept AI platform that could deliver real business value to a retail client in under 30 days.  
> **Action** – I scoped the problem (predict next‑day inventory needs), gathered 5 M+ SKU logs, and designed an end‑to‑end pipeline on AWS:  
> * **Data ingestion** – Kinesis Data Streams + Glue ETL (batch + streaming).  
> * **Feature store** – DynamoDB for low‑latency lookups; S3 for raw data.  
> * **Model training** – SageMaker Pipelines with Spot Training (cost ↓ 70%).  
> * **Inference** – SageMaker Endpoint behind API Gateway, auto‑scaling to 0–200 TPS, latency < 120 ms.  
> * **Observability** – CloudWatch + Evidently for A/B testing; automated rollback on MAPE > 5%.  
> **Result** – Delivered a prototype in 18 days that reduced forecast error from 22% to 9%, saving the client ~$1.2 M annually. The model ran at < $0.04 per inference, keeping ops costs under budget.  

**What a Bar‑Raiser Hears**

* **Ownership** – I led every layer, from data lake to CI/CD, and drove cross‑team alignment without extra meetings.  
* **Dive Deep** – I benchmarked 3ML frameworks, chose the one with the lowest warm‑up latency, and tuned hyperparameters based on real usage metrics.  
* **Quantified Impact** – Clear before/after numbers (22% → 9% error, $1.2 M savings).  
* **Learning from Failure** – First run hit a 200 ms SLA breach; I traced it to cold starts and added provisioned concurrency, turning the failure into a design improvement.

This portfolio demonstrates measurable customer value, technical depth, and ownership—exactly what Amazon looks for in an AI engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
