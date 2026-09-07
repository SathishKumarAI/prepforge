---
qid: ing_a02549d863__aws__local
question: 'Explain: On-call playbook — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 416
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:00-05:00'
sources: []
---

**Situation (S)** – In my last role I was responsible for the *MCP Knowledge Agent*, an AI‑powered chatbot that answered internal tech support queries. After a spike in incidents during a quarterly release, we realized our on‑call playbook was fragmented and slow to resolve high‑severity tickets.

**Task (T)** – Own the end‑to‑end incident response process: create a unified, automated playbook that reduces Mean Time To Resolve (MTTR) for AI‑related outages by 60 % while keeping cost under $2k/month.

**Action (A)**  
1. **Dive Deep & Ownership** – I mapped all failure modes (model drift, data pipeline lag, infrastructure hiccups).  
2. **AWS Services** – Built a *step‑function* orchestration that triggers on CloudWatch alarms; uses Lambda for lightweight checks, SageMaker endpoints for model health, and DynamoDB to track state.  
3. **Bias for Action** – Added an auto‑rollback step: if inference latency > 300 ms, the playbook automatically reverts to a warm, pre‑validated checkpoint.  
4. **Deliver Results** – Integrated PagerDuty with Slack notifications; every resolved incident logs metrics to Timestream for trend analysis.

**Result (R)** – Within two weeks of deployment, MTTR dropped from 2.8 h to 1.1 h (a 60 % reduction). Quarterly cost stayed at $1.7k/month due to serverless scaling. The playbook was adopted company‑wide and cited in the FY22 AWS internal case study.

**Bar‑raiser check** – I took full ownership, dug into every failure point, quantified impact with real numbers, and iterated after a false positive that taught me to fine‑tune the threshold logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
