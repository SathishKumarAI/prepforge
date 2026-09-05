---
qid: ing_608fced131__star__local
question: When should you NOT build an agent? — Questions
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 324
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:21-05:00'
sources: []
---

**Situation**  
At my last company we were tasked with automating the customer support ticket triage process. The incoming tickets spanned multiple product lines and required nuanced judgment—some needed escalation, others could be handled by a simple FAQ bot.

**Task**  
I was asked to design an AI agent that would classify and route every ticket in real time, promising 90 % accuracy within two weeks.

**Action**  
I first mapped the data flow: 5,000 tickets per day, each tagged with sentiment, urgency, and product. I built a prototype using Hugging‑Face transformers fine‑tuned on our internal logs, but the model’s F1 score plateaued at 0.72 due to high class imbalance and subtle domain differences. I ran a cost‑benefit analysis: training time, inference latency (200 ms per ticket), and maintenance overhead versus manual triage by a small team that already had strong contextual knowledge. The ROI of an AI solution was negative—our SLA would suffer if the agent misrouted tickets.

**Result**  
I recommended a hybrid approach: keep human agents for complex cases while deploying a rule‑based script to handle obvious low‑risk tickets. This reduced ticket backlog by 30 % and maintained SLA compliance, saving us $120k in avoided AI costs. I learned that building an agent is only worthwhile when data quality, volume, and the task’s deterministic nature justify the investment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
