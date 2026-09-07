---
qid: ing_6be60c1a7a__aws__local
question: 'Explain: XII. Admin Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 451
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:58-05:00'
sources: []
---

**Situation (S)** – While leading a data‑science team at my last role, we were shipping ML models into production on a monolithic Java stack. Deployment lagged 3–4 weeks, and the infra cost ballooned to $12k/month with frequent outages.

**Task (T)** – I was tasked to refactor the pipeline into a **12‑Factor App** compliant microservice so we could ship models in days, scale automatically, and cut costs by at least 30%.

**Action (A)** –  
1. **Config & Build** – Externalized all config to SSM Parameter Store; built Docker images in CodeBuild.  
2. **Dependencies** – Locked Python packages via `requirements.txt` and cached them in ECR.  
3. **Processes** – Deployed each model as an ECS‑Fargate task (stateless), enabling blue‑green rollouts with CloudWatch alerts.  
4. **Port Binding & Concurrency** – Exposed a single REST endpoint through ALB; set `AWS_LAMBDA_EXEC_WRAPPER` to handle async inference, scaling up to 200 RPS in <30 s.  
5. **Logs & Monitoring** – Emitted structured JSON logs to CloudWatch Logs Insights and used Prometheus + Grafana for latency dashboards.  

**Result (R)** – Deployment time dropped from 4 weeks to 2 days (84% faster). Autoscaling cut idle costs by 35%, bringing infra spend down to $7k/month. Model uptime improved from 92% to 99.8%. The change also reduced the mean time to recover from 12 h to <30 min.

**Leadership Principles** – *Ownership* (I drove end‑to‑end refactor), *Dive Deep* (analyzed logs & latency bottlenecks), *Deliver Results* (measurable cost and reliability gains).  

Bar‑raiser cues: clear ownership, data‑driven impact, deep technical reasoning, learning from the monolith’s failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
