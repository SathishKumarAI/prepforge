---
qid: ing_f6388271a5__star__local
question: 'Explain: Case Study: Customer Support Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:03-05:00'
sources: []
---

**Situation:**  
When my team at a fintech startup launched a new mobile banking app, we saw a 30 % spike in live chat tickets during the first month. Customers were frustrated by long wait times and repetitive FAQ queries.

**Task:**  
I was tasked with building an AI‑powered conversational agent that could handle the bulk of routine inquiries—balance checks, transaction status, and password resets—while escalating only complex issues to human agents, aiming for a 50 % reduction in ticket volume within two weeks.

**Action:**  
Using Rasa Open Source, I designed a dialogue flow with intent classification (NLTK + BERT embeddings) and slot filling. I integrated the agent with our existing CRM via REST APIs and trained it on 10k anonymized chat logs. To keep latency low, I deployed the model on an AWS Lambda edge layer behind CloudFront, achieving <200 ms response time. I also built a fallback monitoring dashboard in Grafana to track escalation rates and user sentiment.

**Result:**  
Within ten days we cut live chat tickets by 55 %, freeing up 12 support agents for higher‑value tasks. The agent handled 78 % of queries without escalation, improving first‑contact resolution from 65 % to 92 %. I learned that combining transformer‑based intent models with lightweight edge deployment can deliver both accuracy and speed in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
