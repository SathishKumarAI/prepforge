---
qid: ing_cff5cf82bb__aws__local
question: 'Explain: Mathematics — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 352
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:59-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an NLP model for customer support, I was asked to benchmark our algorithm against public leaderboards (GLUE, SuperGLUE). The goal: prove we were “world‑class” and secure $1 M in FY‑24 AI funding.

**Action**  
*Customer Obsession & Ownership*: I scoped the evaluation to real user queries, not just academic datasets.  
*Dive Deep*: Built a data‑pipeline (S3 → Glue → SageMaker) that automatically ingested 500k labeled tickets, ran inference, and fed results into an AWS Lambda aggregator that posted metrics on a Grafana dashboard.  
*Bias for Action & Invent & Simplify*: Used SageMaker’s “Inference Scheduler” to run the model at scale with spot instances (cost‑savings 60 %) while maintaining 99.9 % availability via Auto Scaling and multi‑AZ EFS storage.

**Result**  
We achieved a GLUE score of **85.4**, ranking 3rd globally—up from our previous 78.7—and improved in‑app response time by **32 %** (from 1.2 s to 0.8 s). The cost per inference dropped from $0.12 to $0.05, enabling a projected annual savings of **$200k**.  
I documented the process, shared learnings with the wider AWS AI team, and iterated on data quality to avoid the initial “data drift” failure that had stalled earlier iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
