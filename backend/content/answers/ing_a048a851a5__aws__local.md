---
qid: ing_a048a851a5__aws__local
question: 'Explain: The Complete LLM Judge Workflow — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 429
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:24-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a production‑ready “LLM Judge” pipeline for an internal AI evaluation platform that scores model outputs against human‑rated ground truth. The goal: reduce manual review time by > 80% while keeping error rates < 1%.

**Action (Design)**  
* **Data Ingestion** – S3 buckets receive raw prompts, model responses, and gold labels.  
* **Orchestration** – Step Functions coordinate: (1) Lambda to validate schema, (2) SageMaker endpoint for the LLM judge inference, (3) DynamoDB to store scores, (4) SNS notification of completion.  
* **Scalability** – Auto‑scaling SageMaker endpoints + spot instances cut costs 40 %.  
* **Availability** – Multi‑AZ deployments and SQS buffering guarantee ≥ 99.9% uptime.  
* **Cost** – Use on‑demand Lambda for lightweight tasks; only inference runs on GPU instances, keeping monthly spend under $15k versus the prior $35k manual process.

**Result**  
Processing throughput increased from 200 jobs/day to > 10K/day (50×). Manual review time dropped from 4 hrs/week to < 5 min per batch. Accuracy of LLM judgments matched human scores with a Cohen’s κ of .92, meeting the target error < 1%.

**Leadership Principles**  
* **Customer Obsession** – Delivered a tool that directly improves our data scientists’ productivity.  
* **Ownership / Dive Deep** – Built end‑to‑end observability (CloudWatch metrics + X-Ray traces) and iterated on failure modes, learning to cache model embeddings to cut latency by 30 %.  

Bar‑raisers look for ownership of the full lifecycle, deep technical decisions with quantified impact, and a clear record of lessons learned from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
