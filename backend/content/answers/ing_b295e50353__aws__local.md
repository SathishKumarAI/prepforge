---
qid: ing_b295e50353__aws__local
question: 'Explain: Week 3: LLM Judge — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 461
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:41-05:00'
sources: []
---

**Situation & Task**  
While leading a sprint for our internal AI‑evaluation platform, I had to design the “LLM Judge” module that scores language models on fairness, safety and performance. The team needed an end‑to‑end pipeline that could ingest prompts from **Langwatch**, run them through multiple LLMs, collect metrics with **Langfuse**, and surface actionable insights for model owners.

**Action**  
I mapped the requirements to a serverless architecture:  
- **Amazon API Gateway + Lambda** for prompt ingestion (scales to 10k QPS).  
- **SageMaker Endpoint** hosts each LLM; we use **Endpoint Auto Scaling** so costs stay below $0.25/1 000 tokens while maintaining <200 ms latency.  
- **Amazon DynamoDB** stores evaluation metadata with TTL for cost control.  
- **AWS Step Functions** orchestrate the workflow, guaranteeing at‑least‑once delivery and easy retries.  
- **Langfuse SDK** streams results back to a **Kinesis Data Firehose** that feeds an **Athena** query layer; dashboards in QuickSight show real‑time scores.

I introduced a **“bias bucket”**: if any metric falls below 0.75, the pipeline flags it and triggers a rollback job. This added a safety net without impacting throughput.

**Result**  
Within two weeks of deployment we processed >200 k prompts per day, achieving a 95% on‑time completion rate while keeping monthly evaluation costs under $3K. Model owners reported a 30% faster iteration cycle thanks to instant feedback.

**Reflection & Bar‑raiser cues**  
- **Ownership:** I drove the entire stack from design to ops.  
- **Dive Deep:** I quantified latency, cost per token, and error rates.  
- **Learned from failure:** An initial synchronous approach caused 20% SLA breaches; moving to async via Step Functions resolved it.

This showcases *Customer Obsession*, *Ownership*, and *Bias for Action*—the core Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
