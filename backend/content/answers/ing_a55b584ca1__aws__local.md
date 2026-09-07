---
qid: ing_a55b584ca1__aws__local
question: 'Explain: Multimodal — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:51-05:00'
sources: []
---

**Situation – Task**  
While leading the *AI‑Ops* squad at a fintech startup, we launched **LangWatch**, an internal tool that runs end‑to‑end tests on multimodal agents (text + image). The product promised to reduce manual QA hours by 70 % but our initial release hit a 45 % failure rate because test coverage was shallow.

**Action – Dive Deep & Ownership**  
I mapped the entire testing pipeline:  
1. **Data ingestion** – S3 for raw logs, Athena for quick analytics.  
2. **Inference** – SageMaker endpoints that host the multimodal model; we added a lightweight *mock* endpoint in Lambda to simulate external image APIs.  
3. **Evaluation** – A custom Python library that parses JSON responses and compares them against golden‑standard verdicts stored in DynamoDB.  
4. **Alerting** – CloudWatch metrics trigger SNS notifications when accuracy drops below 95 %.  

To scale, we shifted from single‑threaded Lambda to a *step‑functions* orchestration that parallelises test cases across ECS Fargate tasks, cutting runtime from 12 h to 3 h and cost by 60 %.

**Result – Deliver Results**  
Post‑refactor, LangWatch achieved **97 % accuracy**, slashed manual QA effort by **70 %**, and cut infra spend from $2.4K/month to $0.9K/month. I documented the failure modes, shared a “post‑mortem” deck with the org, and introduced a quarterly “AI Test Sprint” to keep coverage high.

**Bar‑raiser cues**  
- Demonstrated *ownership* by owning the full stack from data to alerting.  
- Showed *dive deep* through Athena queries and Lambda debugging.  
- Quantified impact (accuracy, cost, time).  
- Learned from early failures and iterated rapidly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
