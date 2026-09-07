---
qid: ing_57a86011e6__aws__local
question: 'Explain: Local and CI — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 506
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:58-05:00'
sources: []
---

**Situation / Task**  
I was leading the evaluation pipeline for a new LLM‑based customer support agent at an e‑commerce startup. The product team needed to guarantee that every new model version performed better than the last before it hit production. I had to design a repeatable, data‑driven testing framework that could run locally on dev machines and automatically in our CI/CD pipeline.

**Action**  
1. **Local Testing (Developer Sandbox)** – Built a lightweight wrapper around LangWatch that pulls a curated set of *real user dialogues* from our staging database, runs them through the agent, and writes a JSON report to `./langwatch_reports`. I leveraged **AWS Lambda** for on‑demand inference so devs could hit “Run Tests” without provisioning GPUs.  
2. **CI Testing (GitHub Actions + AWS CodeBuild)** – Created a reusable GitHub Action that triggers on every PR merge. The action spins up an **ECS Fargate task** with the latest model checkpoint, streams the same dialogue set through LangWatch, and aggregates metrics (`accuracy`, `latency`, `F1`). Results are posted back to PR comments via the GitHub API.  
3. **Governance & Alerts** – Integrated **Amazon CloudWatch** dashboards that surface regression alerts if any metric drops >5% compared to baseline. If a failure is detected, the pipeline auto‑cancels the deployment and creates an incident in **AWS Incident Manager**.

**Result**  
- Reduced model rollout time from 3 days to 4 hours while keeping error rates below 0.8%.  
- Detected a regression that would have caused a 12% increase in customer support tickets; prevented loss of $1M in potential revenue.  
- Achieved 99.9% availability for the testing pipeline with an average cost of <$50/month.

**Reflection (Bar‑raiser lens)**  
I owned every step, from data selection to alert thresholds. I dove deep into LangWatch’s metrics API to validate that our chosen KPIs truly reflected customer experience. The quantified impact (time saved + revenue protected) demonstrates ownership and bias for action. After the first failure, we added a fallback rule set, learning that robustness in evaluation is as critical as model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
