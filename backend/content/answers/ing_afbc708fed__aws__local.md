---
qid: ing_afbc708fed__aws__local
question: 'Explain: Coding: Practical, Python-First — Perplexity AI Interview Prep
  2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 439
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:43-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I was hired as a Solutions Architect for the *Perplexity AI Interview Prep* platform in 2025. The product needed to scale from 10k to 1M active users while keeping latency under 200 ms per question‑generation request.  
> **Task:** Build an end‑to‑end pipeline that ingests new interview questions, trains a fine‑tuned GPT‑4 model, and serves predictions via a low‑cost, highly available API—all in Python.  
> **Action (Technical):**  
> *Data ingestion* – AWS S3 + Glue to crawl public repositories, transform JSON to Parquet, and publish to Kinesis Data Streams for real‑time updates.  
> *Model training* – SageMaker Ground Truth for labeling, SageMaker Training jobs with distributed Horovod on GPU instances (p4d.xlarge), leveraging Spot to cut cost 60 %.  
> *Serving* – Deploy the model as a Lambda layer behind API Gateway, auto‑scaling via Lambda Provisioned Concurrency; fallback to SageMaker Endpoint if concurrency spikes.  
> *Monitoring* – CloudWatch metrics + Amazon GuardDuty for inference latency and anomalous traffic.  
> **Result:** Reduced average response time from 350 ms to 120 ms, cut infrastructure spend by $180k annually, and increased user retention by 27 % (from 65 % to 92 %).  
> **Leadership Principles Highlighted:** *Customer Obsession* – built a friction‑free experience; *Ownership* – drove the project from concept to production.  

**What a bar‑raiser listens for:** depth of technical decisions, quantified impact, clear ownership, and evidence that failures (e.g., initial 400 ms latency) were learned from and corrected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
