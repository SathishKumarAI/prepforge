---
qid: ing_23a6adc0af__star__local
question: 'Explain: Conversation memory — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 359
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:13-05:00'
sources: []
---

**Situation** – In mid‑2024 I joined a fintech startup building an AI‑powered chat assistant for its merchant portal. The product was live but churn rates spiked: merchants complained that the bot “forgot” earlier parts of their conversation and kept asking for the same account number, which frustrated users and increased support tickets by 18 %.  

**Task** – I had to design a lightweight conversation memory layer so the agent could retain context across multi‑turn chats without violating GDPR or inflating latency. The goal was to cut repeated‑question incidents by at least 50 % while keeping response time under 300 ms.  

**Action** – I implemented an in‑memory, session‑scoped vector store using Redis Streams and sentence‑embedding vectors from OpenAI’s text‑embedding‑ada‑002. Each turn appended a short key–value pair (e.g., “account_id:12345”) to the stream, then the agent queried the most recent 5 turns for relevant slots via cosine similarity before generating its reply with GPT‑4o. I added an LRU eviction policy and audit logs to satisfy compliance. Continuous A/B testing showed a 62 % drop in duplicate‑question tickets.  

**Result** – The bot’s perceived intelligence improved, reducing churn by 12 % within two months and cutting support costs by $25k/month. I learned that hybrid memory (embedding + key/value store) balances privacy, speed, and accuracy for real‑world AI assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
