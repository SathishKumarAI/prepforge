---
qid: ing_97736d97f9__star__local
question: 'Explain: Interview Follow-Up Questions — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:47-05:00'
sources: []
---

**Situation**  
At my last role I was working on a mid‑tier SaaS product that had over 50,000 monthly active users and an average ticket volume of 1,200 per week. The support team’s SLA was 4 hours, but we were consistently missing it during peak periods.

**Task**  
I needed to design an AI‑driven chatbot that could triage incoming tickets, provide instant answers for the top 30% of common issues, and hand off complex cases to human agents without increasing the backlog.

**Action**  
I started by mapping the support workflow in Jira and extracting the last year’s ticket logs. Using Python and spaCy I built a topic‑modeling pipeline that identified the most frequent intents. Then I trained an intent classifier with scikit‑learn, achieving 92% accuracy on a hold‑out set. The chatbot was deployed on our internal portal via Flask, integrated with the existing REST API for ticket creation, and wrapped in an adaptive UI that surfaced suggested solutions from our knowledge base. I added a “confidence threshold” that routed low‑certainty queries to a queue for agent review. Finally, I wrote automated metrics dashboards in Grafana to track resolution time and chatbot interaction rates.

**Result**  
Within three months the average first‑response time dropped from 3 hours to 45 minutes, and the ticket volume handled by humans fell by 38%. The bot answered 28% of all tickets automatically, freeing agents to focus on higher‑value cases. I learned that combining NLP with a simple confidence gate can dramatically improve SLA compliance while keeping human oversight intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
