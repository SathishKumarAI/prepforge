---
qid: ing_2072bca646__star__local
question: 'Explain: Scenario 1: Design a customer support chatbot'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 394
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:25-05:00'
sources: []
---

**Situation** – At my last role at FinTech Co., our live chat volume spiked by 45 % during the holiday season, pushing our CS team from 12 to 30 agents and inflating response times from 2 min to over 8 min. The product manager asked me to prototype a customer‑support chatbot that could handle routine inquiries (balance checks, transaction status, FAQ) without compromising compliance or user trust.

**Task** – Build a scalable, secure bot that handled at least 70 % of the low‑complexity tickets, reduced human agent load by 25 %, and maintained an SLA of <4 min for first response while logging all interactions for audit.

**Action** – I chose Rasa NLU for intent recognition because it lets us fine‑tune on our proprietary dataset and run entirely on‑prem to satisfy data‑privacy rules. I built a rule‑based fallback that escalated to human agents only when confidence fell below 0.75 or the user requested “talk to an agent.” For conversational flow, I used Rasa’s dialogue management with custom actions calling our internal REST API (secured via mutual TLS) to fetch balances and transaction history. I integrated a simple sentiment‑analysis layer that routed negative tone messages to priority queues. Finally, I set up automated unit tests for every intent and continuous monitoring dashboards in Grafana.

**Result** – After two weeks of live rollout, the bot handled 78 % of incoming tickets, cutting average first response time from 8 min to 3.2 min and freeing 27 % of agent capacity. Customer satisfaction scores rose by 12 points (CSAT 83→95). I learned that combining an open‑source framework with strict data‑security layers lets you iterate fast while meeting regulatory constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
