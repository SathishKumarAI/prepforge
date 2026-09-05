---
qid: ing_5da3e32d99__star__local
question: 'Explain: Tool calling mechanics — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 288
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:21-05:00'
sources: []
---

**Situation** – In a client‑facing chatbot project for an e‑commerce site, our team noticed that the bot’s responses to order status queries were often generic and inaccurate because it was only using pre‑built templates.

**Task** – I had to design a dynamic “tool calling” system so the agent could query live inventory APIs, retrieve shipping info, and even run a sentiment analysis model on user comments in real time.

**Action** – First, I defined an interface for each external tool (REST API for orders, Python function for NLP). I then implemented a lightweight policy network that scores which tool to invoke based on the current dialogue state. During runtime the agent’s LLM generates a short “tool‑call” instruction (e.g., `CALL get_order_status(order_id=1234)`), which is parsed and executed by our wrapper, returning JSON back into the conversation. I added retry logic and caching to keep latency under 200 ms.

**Result** – User satisfaction scores rose from 72% to 89% in A/B testing, average response time dropped to 1.8 s, and we reduced support tickets by 35%. The exercise taught me how to blend LLM reasoning with deterministic APIs while keeping the system robust and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
