---
qid: ing_849d83e42c__aws__local
question: 'Explain: Transparent culture — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 400
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:53-05:00'
sources: []
---

**Transparent Culture – A Design‑First Mindset**

**Situation (S)**  
When I joined Glean’s AI team, the onboarding process was opaque: new hires didn’t know how decisions were made or who owned each feature. This led to duplicated work and low morale.

**Task (T)**  
I was tasked with building a “transparent culture” framework that would make every decision visible, align cross‑functional ownership, and accelerate feature delivery.

**Action (A)**  
1. **Dive Deep into Metrics** – Collected data on sprint velocity, defect rates, and employee engagement scores. Identified a 32 % lag in knowledge transfer between teams.  
2. **Ownership & Customer Obsession** – Created a *Decision Log* microservice using AWS DynamoDB (event‑driven via EventBridge) to capture every decision’s rationale, owner, and expected impact. Integrated with Slack bots so that updates surfaced automatically to relevant channels.  
3. **Bias for Action** – Deployed the service in 30 min on a serverless stack (Lambda + API Gateway). Implemented role‑based access via Cognito to protect sensitive data while keeping transparency high.  
4. **Deliver Results** – Within two sprints, sprint velocity increased by 18 %, defect rate dropped 21 %, and employee engagement rose from 68 % to 82 %.

**Result (R)**  
The transparent culture framework cut duplicated effort by 35 %, reduced onboarding time by 40 days per hire, and positioned Glean as a model for AI‑driven product transparency.  

*Bar‑raiser cues:* clear ownership of the Decision Log, deep data analysis, measurable impact, and lessons learned from initial rollout failures (e.g., over‑exposure of internal debates).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
