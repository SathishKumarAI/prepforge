---
qid: ing_7ce6cf734b__aws__local
question: 'Explain: A Production Eval Stack in May 2026 — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 525
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:42-05:00'
sources: []
---

**Situation (S)**  
In May 2026 I led a cross‑functional team at Amazon to build a *Production Evaluation Stack* that would continuously benchmark our new LLM against production traffic. The goal was to detect model drift, latency regressions, and hallucination rates before they hit customers.

**Task (T)**  
Design an end‑to‑end pipeline that ingests real user queries, runs them through the LLM, compares outputs with gold standards, aggregates metrics, and surfaces alerts—all while staying within a $5 k/month budget.

**Action (A)**  

| Step | AWS Services | Rationale |
|------|--------------|-----------|
| Data capture | **Amazon Kinesis Data Streams** + **S3** | Low‑latency ingestion; durable storage for replay. |
| Evaluation engine | **AWS Lambda** (stateless) + **SageMaker Runtime** | Serverless cost control, auto‑scaling to 10 k QPS. |
| Metric aggregation | **Amazon Athena** on S3 + **Glue** catalog | SQL‑driven analysis; no managed cluster overhead. |
| Alerting & monitoring | **CloudWatch Alarms** + **SNS** | Real‑time thresholds (e.g., hallucination > 2 % → alert). |
| Cost control | **Savings Plans** for Lambda + Spot SageMaker endpoints | $1.8 k/month total, 30 % cheaper than on‑prem inference. |

I wrote a *bias‑for‑action* script that auto‑rolls the latest model into a canary endpoint if latency < 200 ms and accuracy > 95 %. The stack produced **0.6 % drift detection per week** versus the previous 3 %, cutting customer complaints by 27 %.

**Result (R)**  
Within three months, we reduced model‑related incidents from 12/month to 2/month, saving $48 k in support costs and improving user satisfaction scores by **18 points**. The stack is now a reusable template for future LLM deployments.

> *Bar‑raiser focus:* Ownership of the entire pipeline, deep dive into latency vs accuracy trade‑offs, quantifiable impact on cost & CSAT, and continuous learning from drift events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
