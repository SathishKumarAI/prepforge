---
qid: ing_2e8baa3161__aws__local
question: 'Explain: AI StrataTools — Data Science & AI Interview Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 395
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:20-05:00'
sources: []
---

**Situation / Task**  
I was hired by a startup that built an “AI‑StrataTools” platform—an online playground for data scientists and interviewees to practice real‑world ML problems. The product needed to scale from a handful of users in beta to tens of thousands of concurrent sessions while keeping latency under 2 s per notebook cell.

**Action**  
* **Ownership & Dive Deep:** I led the architecture redesign, choosing an event‑driven micro‑service stack on AWS:  
  * **Amazon SageMaker Studio notebooks** for isolated execution;  
  * **AWS Lambda + Step Functions** to orchestrate data pipelines;  
  * **Amazon DynamoDB** for user metadata and experiment logs (single‑digit ms reads);  
  * **Elastic Container Service (ECS) Fargate** to run heavy Jupyter kernels in isolation.  
* Implemented a **feature‑flag system** with AWS AppConfig so we could roll out new notebooks safely.  
* Added **CloudWatch metrics + X-Ray tracing** to surface latency bottlenecks; reduced average cell execution time from 3.5 s to 1.8 s, saving ~15% in compute costs.

**Result**  
Within three months, user concurrency grew from 200 → 12 k without any service interruption, and churn fell by 22%. The platform now processes >2 M notebook executions per day at <$0.02 per exec, meeting our cost‑to‑revenue target.

> **Bar‑raiser note:** I demonstrated full ownership, deep technical trade‑offs (serverless vs containers), quantified impact, and learned from a failed Lambda timeout that led to the adoption of ECS Fargate for heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
