---
qid: ing_d294d133d5__star__local
question: 'Explain: Problem Statement — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 375
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:41-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a new customer‑support platform for an e‑commerce client with over 200,000 monthly active users. Their support tickets were flooding their help desk, causing response times to climb from the target of 2 hours to 12 hours.

**Task:**  
I was asked to design a conversational agent that could triage and resolve common queries automatically while escalating only complex issues to human agents. The goal was to cut ticket volume by 40% and reduce average resolution time below 4 hours.

**Action:**  
I started by mapping the most frequent tickets using NLP on historical data, then built an intent‑classification model with spaCy and a BERT fine‑tuned on our domain. For slot filling I used Rasa’s NLU pipeline to extract product IDs, order numbers, and issue types. The dialogue manager was rule‑based for simple flows but switched to a reinforcement‑learning policy (Proximal Policy Optimization) when the user asked follow‑up questions. We integrated the bot into the client’s chat widget via WebSocket, logging every interaction in Elasticsearch for continuous monitoring. To keep latency low, we deployed the model on AWS Lambda with SageMaker endpoints, caching frequent responses in Redis.

**Result:**  
Within three months the agent handled 35% of all tickets, cutting average response time to 3 hours and reducing overall ticket volume by 38%. User satisfaction scores rose from 72 % to 88 %, and we saved the client roughly $120k annually on support staffing. I learned that combining rule‑based safety nets with RL for open‑ended dialogue balances reliability and flexibility, especially in high‑volume customer‑facing systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
