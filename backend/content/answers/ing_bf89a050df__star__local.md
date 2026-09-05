---
qid: ing_bf89a050df__star__local
question: What Are Computer-Use Agents? — Computer Use Agents
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 336
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:53:49-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching a new mobile banking app that needed to process customer support tickets in real time. Our manual triage team was slow, and the ticket volume had jumped 40 % during the holiday season.

**Task** – I was tasked with designing an autonomous computer‑use agent that could read incoming emails, extract key details (account number, issue type), log them into our ticketing system, and even draft a first‑draft response to reduce agent workload by at least 30 %.

**Action** – I built the agent in Python using spaCy for entity extraction and OpenAI’s GPT‑4 for natural language understanding. The agent parsed the email body, queried our internal REST API to fetch account status, then used Selenium to log into Zendesk and create a ticket with all fields populated. For drafting replies, it generated a concise response template that a human could review before sending. I added a retry loop and logging to handle network hiccups, and set up a Slack alert if the agent failed more than three times in a row.

**Result** – Within two weeks of deployment, ticket triage time dropped from 12 minutes to 3 minutes per ticket, cutting the support team’s workload by 32 %. The automated replies also improved first‑response satisfaction scores from 78 % to 92 %. I learned that combining NLP with simple UI automation can create powerful, low‑maintenance agents that scale customer service without deep infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
