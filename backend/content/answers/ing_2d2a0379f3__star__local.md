---
qid: ing_2d2a0379f3__star__local
question: 'Explain: Computer-Use Tools (Anthropic) — Tool Use And Mcp'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 414
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:20-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an internal chatbot to triage customer support tickets. The volume had jumped 35 % and our SLA slipped from 2 h to 6 h, so we needed an automated system that could fetch knowledge base articles, open a ticket in Zendesk, and even run a quick sentiment‑analysis script on the user’s message.

**Task** – I had to design a solution that let the language model (Claude) call external APIs safely, pick the right tool for each sub‑task, and do so within the 10 k token context window while keeping latency under 1.5 s per request.

**Action** – I wrapped the Anthropic “Tool Use” feature in a microservice that exposed three endpoints: `searchKB`, `createTicket`, and `sentimentScore`. In the prompt I defined a JSON schema for each tool’s arguments, so Claude could return a structured call. On the backend I validated the JSON, logged every call, and used an async queue (Redis + Celery) to keep responses fast. For safety I added a policy that blocked any request containing personal data unless it matched our GDPR whitelist.

**Result** – The bot resolved 42 % of tickets automatically, cutting average resolution time from 6 h to 1.8 h and freeing the support team to focus on complex issues. I learned how to blend Anthropic’s tool‑use API with real‑world constraints—security, latency, and compliance—to deliver a production‑grade AI assistant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
