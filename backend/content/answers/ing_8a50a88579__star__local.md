---
qid: ing_8a50a88579__star__local
question: 'Explain: Problem statement — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 368
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:18-05:00'
sources: []
---

**Situation:**  
At my previous company we had a product‑development team that spent roughly 30 % of every sprint on recurring status meetings. The agendas were often vague, action items got lost in email threads, and the team’s velocity dipped because people spent hours chasing follow‑ups.

**Task:**  
I was tasked with building an AI‑powered meeting assistant that could capture real‑time minutes, auto‑assign tasks, and surface relevant documents, all while keeping the team’s workflow unchanged. The goal was to cut meeting time by 20 % and reduce post‑meeting action‑item lag to under two hours.

**Action:**  
I used a combination of speech‑to‑text (Google Cloud Speech API), natural‑language understanding (spaCy for entity extraction, Hugging Face transformers for intent classification), and an internal knowledge graph to surface context. The assistant logged notes in Confluence via its REST API and created Jira tickets automatically with priority tags. I built a lightweight web widget that integrated into Teams, so the bot would appear as a chat participant and prompt clarifying questions when ambiguity was detected. To keep latency low, I deployed the NLP pipeline on an AWS Lambda edge function, caching frequent queries in Redis.

**Result:**  
After a two‑week pilot, meeting duration dropped from 45 minutes to 36 minutes (20 % reduction). Action‑item completion rose from 60 % within a week to 90 % within 24 hours. I learned that embedding the assistant as a conversational partner—rather than a separate tool—greatly boosts adoption, and that combining edge computing with cloud services can deliver real‑time AI without compromising privacy or latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
