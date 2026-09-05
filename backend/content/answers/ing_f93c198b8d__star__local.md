---
qid: ing_f93c198b8d__star__local
question: 'Explain: The Interview Question — Customer Support Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 293
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:58-05:00'
sources: []
---

**Situation:** At my last company we handled over 15,000 daily support tickets, with an average first‑response time of 3 hours and a backlog that grew by 12% each quarter.

**Task:** I was asked to reduce the ticket volume sent to human agents by at least 30% while keeping customer satisfaction above 90%.

**Action:** I designed a rule‑based chatbot integrated into our Zendesk platform, using Python Flask for the API and spaCy for intent classification. We mapped the top 20 recurring issues (billing, login, data export) into scripted responses, then added an escalation path that routed only ambiguous or high‑severity tickets to agents. To keep quality, I set up a continuous learning loop: every week we reviewed agent escalations, updated intent labels, and retrained the model with new examples. I also built dashboards in Grafana to monitor key metrics in real time.

**Result:** Within three months the bot handled 35% of all tickets, cutting first‑response time to under 30 minutes for those cases. Overall ticket volume dropped by 28%, freeing agents to focus on complex issues and raising CSAT from 88% to 94%. I learned how to balance automation depth with human oversight and the importance of data‑driven iteration in AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
