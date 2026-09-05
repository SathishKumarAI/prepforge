---
qid: ing_63549f5f6e__star__local
question: 'Q13: How do you implement tool use / function calling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:25-05:00'
sources: []
---

**Situation** – In my last role, we were building a conversational agent for our customer support portal that needed to pull real‑time order status and update shipping details from two legacy REST APIs. The client’s SLA required responses within 1 second, so any heavy processing had to be offloaded.

**Task** – I was tasked with integrating OpenAI’s function calling into the chatbot flow so the LLM could request API data directly, while keeping latency low and ensuring secure access tokens were refreshed automatically.

**Action** – First, I defined a clear JSON schema for each API operation (e.g., `getOrderStatus`, `updateShipping`). I wrapped those endpoints in lightweight FastAPI microservices that exposed signed JWT‑protected routes. In the LLM prompt I added “function calls” metadata and used a custom middleware to intercept function call intents: it validated arguments, invoked the appropriate service via HTTP/2 with keep‑alive, cached responses for 5 seconds, and streamed partial results back to the user. I also implemented retry logic with exponential backoff and circuit breaker patterns to handle transient failures.

**Result** – The chatbot’s average turn time dropped from 3.8 s to 0.9 s, meeting SLA targets. Order‑status accuracy hit 99.7%, and we reduced API call volume by 35% thanks to caching. I learned that coupling LLM function calls with a lightweight, observability‑enabled service layer is key for production‑grade AI assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
