---
qid: ing_c73b46f8e4__star__local
question: 'Explain: The Three Tools — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 315
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:08-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, our customer support team was drowning in repetitive ticket triage—about 60% of queries were identical “how to reset password” or “account not syncing.” Our SLA slipped below 85%, and the product manager flagged it as a revenue risk.

**Task:**  
I needed to reduce manual triage time by at least 40% while keeping accuracy above 95%, all within two months so we could hit the next quarterly KPI.

**Action:**  
1. Built a *Computer Use Agent* (CUA) with Python and Selenium that logged into the help portal, parsed ticket content via spaCy NLP, and automatically filled out the appropriate knowledge‑base article or sent a templated reply.  
2. Integrated a reinforcement‑learning policy using OpenAI Gym to optimize which article to suggest based on past resolution success.  
3. Deployed the CUA as an AWS Lambda function triggered by new tickets in our ticketing system, with metrics tracked in Grafana.

**Result:**  
The automated triage cut manual handling time from 5 min per ticket to under 1 min, boosting SLA to 94% and freeing agents to focus on complex issues. We saw a 35% reduction in repeat tickets and learned that combining rule‑based UI automation with lightweight RL can deliver measurable impact without costly RPA suites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
