---
qid: ing_2c1e67f191__star__local
question: 'Pair-programming: build a service that takes a user question, enriches
  it with data from a third-party API, and answers via a chat-model API. How do you
  structure it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 376
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:19-05:00'
sources: []
---

**Situation**  
At my last startup we had a chatbot that answered user queries but it was stuck on generic knowledge; our metrics showed a 30 % drop in user satisfaction when the bot couldn’t provide up‑to‑date info about product pricing and availability.

**Task**  
I needed to build an end‑to‑end service that would take any natural‑language question, pull real‑time data from a third‑party inventory API, feed that enriched prompt into our GPT‑4 chat model, and return the answer within 2 seconds for live chat support.

**Action**  
I used FastAPI to expose a `/ask` endpoint. The handler parses the user text, then asynchronously calls the RESTful inventory API (using `httpx.AsyncClient`) with rate‑limiting via `asyncio.Semaphore`. Results are cached in Redis with a 5‑minute TTL to avoid hitting the external API on every request. I construct a prompt template that injects the fetched JSON into the model’s context and stream the response back through Server‑Sent Events, so users see text as it arrives. For reliability, I added circuit‑breaker logic: if the third‑party call fails or times out, the bot falls back to a “data unavailable” message instead of stalling.

**Result**  
The new pipeline cut average response time from 3.8 s to 1.6 s and increased user satisfaction scores by 18 %. I learned that async orchestration plus smart caching turns a brittle API‑dependent bot into a resilient, real‑time assistant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
