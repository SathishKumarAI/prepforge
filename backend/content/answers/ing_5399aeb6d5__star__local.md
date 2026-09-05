---
qid: ing_5399aeb6d5__star__local
question: 'Explain: Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 319
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:20-05:00'
sources: []
---

**Situation:** At my previous startup we were building a customer‑support chatbot for an e‑commerce platform that had just launched a new loyalty program. The existing support team was overwhelmed and response times were lagging behind our promised SLA of 30 seconds.

**Task:** I needed to define the functional requirements for the conversational agent so it could answer common queries about points, rewards, and redemption steps while escalating only truly complex issues to humans.

**Action:** I gathered data from the help‑desk ticketing system (≈4,000 tickets in two months), identified 12 high‑frequency intents, and mapped out a dialogue flow using Rasa NLU for intent classification. I specified slot‑filling rules for “reward balance” and “expiration date,” built fallback patterns for ambiguous queries, and set up an escalation trigger when confidence fell below 0.6. I also defined KPI metrics: first‑contact resolution rate, average handle time, and user satisfaction score.

**Result:** The bot handled 68% of inbound tickets within the first 30 seconds, cutting human agent workload by 35%. First‑contact resolution rose from 52% to 78%, and customer satisfaction scores improved from 4.1/5 to 4.6/5 over three months. I learned that clear intent coverage paired with well‑defined fallback paths is key to a successful conversational product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
