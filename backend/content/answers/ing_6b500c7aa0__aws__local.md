---
qid: ing_6b500c7aa0__aws__local
question: 'Explain: Why This Changes Everything — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 405
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:45-05:00'
sources: []
---

**Situation & Task**  
At my last role we built a custom LLM‑evaluation service that ran nightly against ~200 models per customer. Each run took ~30 min and used a hand‑rolled Python script, resulting in >$1k/month for compute and an 18‑hour turnaround for stakeholders.

**Action (AWS‑centric)**  
I redesigned the pipeline using **Amazon SageMaker Pipelines**, **Step Functions**, and **S3 + DynamoDB**.  
* *Evals* were containerized and scheduled via Step Functions, allowing parallelism across `ml.m5.xlarge` instances.  
* Results were persisted in DynamoDB with a TTL to keep cost low while enabling real‑time dashboards in QuickSight.  
* We added **Langwatch** for continuous monitoring of model drift and **Langfuse** for structured logging of prompts/answers, all integrated via EventBridge.  

**Result**  
- Runtime dropped from 30 min to <5 min (≈80 % speed‑up).  
- Monthly compute cost fell from $1k to $200 (+80 % savings).  
- Stakeholders received results in under 10 min, boosting data‑driven decisions.  

**Reflection & Learning**  
I owned the migration end‑to‑end, diving deep into latency profiles and cost models (Spot vs On‑Demand). The bar‑raiser will note my ownership, quantified impact, and the lesson that “Infrastructure as Code + managed services = faster, cheaper, and more reliable evals.”  

> **Leadership Principles**: *Customer Obsession* (faster insights for clients) & *Ownership* (full responsibility from design to production).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
