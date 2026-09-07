---
qid: ing_1fa14693a6__aws__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 469
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:40-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were launching a new AI‑powered recommendation engine. The team needed an automated way to evaluate every model version before production roll‑out—something that could ingest raw code, run inference on large datasets, and surface actionable metrics. I was tasked with building the “Week 2: Code‑Based Evals” pipeline using LangWatch and Langfuse.

**Action**  
I scoped requirements (continuous integration, reproducible runs, multi‑model comparison) and designed a serverless architecture:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Inference workers | **AWS Lambda + SageMaker Edge** | Scale to 10k concurrent evals; pay per use |
| Data lake | **Amazon S3** (raw logs, feature sets) | Durable storage, cost‑effective |
| Orchestration | **Step Functions** with **EventBridge** triggers | Visual workflow, retry logic |
| Observability | **Langfuse** for prompt tracing + **CloudWatch** metrics | Centralized analytics, alerting |
| Version control | **ECR + CodePipeline** | Immutable images, CI/CD |

I integrated LangWatch to capture inference latency and accuracy per prompt, then pushed results into a DynamoDB table. A Lambda function aggregated the data, computed mean absolute error, throughput, and drift metrics, and sent a Slack notification if any KPI fell below threshold.

**Result**  
The pipeline reduced model validation time from 3 days to **2 hours**, cut manual QA effort by **80%**, and caught a subtle bias drift that would have affected 12M users. The cost was under $0.01 per eval, keeping the total monthly spend <$200.  

**Reflection**  
I learned that “Ownership” means owning the end‑to‑end flow—not just the code. By diving deep into AWS pricing and Lambda limits I avoided over‑provisioning. A bar‑raiser would note my focus on measurable impact, automated rollback logic, and post‑mortem documentation of an earlier failure where we missed a latency spike due to insufficient concurrency scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
