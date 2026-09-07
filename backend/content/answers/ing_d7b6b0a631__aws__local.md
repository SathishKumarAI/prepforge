---
qid: ing_d7b6b0a631__aws__local
question: 'Explain: The Escalation Intelligence — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 408
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:02-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
At my previous role I led a project to reduce the mean time to resolve (MTTR) for high‑impact support tickets by 30 %. The team was overwhelmed with manual triage, and customers were complaining of long waits.

**Action (Dive Deep + Bias for Action)**  
I built an *Escalation Intelligence* microservice on **Amazon SageMaker** that ingests live ticket metadata (priority, product, sentiment) and predicts escalation likelihood. The model outputs a confidence score which feeds into an **AWS Step Functions** workflow:  
1. If the score > 0.8 → auto‑route to senior tier via **Amazon Connect** contact flow.  
2. Else → queue for standard routing.  

The workflow logs decisions in **DynamoDB**, and I set up a CloudWatch dashboard that shows real‑time ticket volume vs. escalation rate. To keep costs low, the model runs on an **EC2 Spot Fleet** (p3.xlarge) with auto‑scaling; predictions are cached in **ElastiCache Redis** for sub‑second latency.

**Result (Deliver Results)**  
After 90 days MTTR dropped from 4.5 h to 1.6 h—a 64 % improvement—while the escalation accuracy hit 92 %. Customer satisfaction scores rose by 15 points on NPS surveys.  

**Bar‑raiser notes** – I owned the end‑to‑end pipeline, dove deep into feature importance (e.g., sentiment lagging behind priority), quantified impact with clear KPIs, and learned from a false‑positive spike by retraining with new labeled data—demonstrating continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
