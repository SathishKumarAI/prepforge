---
qid: ing_e48e411711__aws__local
question: 'Explain: Requirements — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 487
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:53-05:00'
sources: []
---

**Situation / Task**  
I led a project to build an on‑prem “Text‑to‑SQL” agent for a retail analytics team that wanted instant ad‑hoc queries from natural language. The goal was to reduce query turnaround time from 10 minutes to under 1 minute and cut data‑engineer hours by 60 %.  

**Action**  
I scoped the problem, gathered requirements (support 5+ languages, handle up to 2k concurrent users, maintain 99.9 % availability), and designed a serverless pipeline:  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| NLP & intent extraction | Amazon Comprehend + SageMaker Endpoint | Fast inference (≤200 ms) with auto‑scaling |
| SQL generation | Custom transformer model hosted on SageMaker, containerized in ECS Fargate | Keeps logic isolated and cost‑efficient |
| Execution layer | Athena + AWS Glue Data Catalog | Serverless querying on S3; pay per query |
| Orchestration | Step Functions | Clear state machine for retries & logging |
| Monitoring | CloudWatch + X-Ray | Real‑time metrics, trace latency |

I added a “dry‑run” mode that parsed user text, generated SQL, and validated against the catalog before execution—this reduced errors by 35 %. I also introduced an automated unit test suite (pytest) that ran on every commit, catching regressions early.

**Result**  
The agent cut query turnaround from 10 min to **0.8 min** (88 % reduction). Data‑engineer time fell by **58 %**, freeing them for higher‑value work. Monthly operating cost stayed below $2k due to serverless scaling, while the model’s inference cost was amortized over 500+ queries per day.

**Reflection**  
I learned that *Ownership* means iterating fast with feedback loops, and *Dive Deep* required profiling every microservice to identify bottlenecks. The bar‑raiser will note my focus on measurable impact, transparent trade‑offs (serverless vs. cost), and continuous learning from failure (the dry‑run feature).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
