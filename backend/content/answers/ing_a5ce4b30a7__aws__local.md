---
qid: ing_a5ce4b30a7__aws__local
question: 'Explain: Portfolio moves — Devops Platform Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 414
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:39-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech to revamp its “Portfolio Moves” micro‑service, which pushes real‑time investment recommendations from the AI model to end users via a web dashboard and mobile app. The existing pipeline ran on an on‑prem cluster, had 30 % MTTR for failures, and couldn’t scale past 5k concurrent users.

**Action**  
1. **Own the end‑to‑end flow** – I mapped data ingestion → model inference → recommendation delivery using a *serverless* design:  
   - **AWS Lambda** (Python) for event‑driven inference, triggered by an **Amazon EventBridge** rule on new user actions.  
   - **Amazon SageMaker Endpoint** for the trained model; I deployed it with multi‑model hosting to reduce cost by 40 %.  
   - **Amazon API Gateway + Cognito** for secure, throttled REST access.  
2. **Dive Deep into observability** – added **X-Ray** tracing and CloudWatch metrics (latency, error rates). Set up an automated rollback using **AWS CodePipeline** with a canary strategy.  
3. **Bias for Action & Deliver Results** – spun up the architecture in 5 days; first production run showed MTTR drop from 30 % to <1 %, and latency fell from 2.8 s to 0.6 s, supporting 50k concurrent users with a $12K/month cost saving.

**Result**  
- 90 % reduction in failure time, 70 % lower infrastructure spend, and 3× higher user engagement on the dashboard.  
- The solution was later adopted as the baseline for other AI‑driven services across the company.  

*Bar‑raiser focus*: ownership of both business impact and technical depth; quantified metrics; learning loop from initial on‑prem failures to a resilient serverless pipeline.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
