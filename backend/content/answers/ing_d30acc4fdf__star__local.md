---
qid: ing_d30acc4fdf__star__local
question: 'Explain: Tool design — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 344
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:41-05:00'
sources: []
---

**Situation:**  
At my previous company we were building an internal knowledge‑base chatbot that had to pull up-to-date product specs from a legacy REST API. The API was slow (≈800 ms per call) and the bot’s latency target was under 500 ms, so users complained of lag.

**Task:**  
I needed to redesign the agent architecture so it could fetch data efficiently while still using natural language prompts for every user query, keeping the overall response time below 400 ms.

**Action:**  
1. Implemented a lightweight “tool” abstraction in Python: each external API became a separate `Tool` class exposing an `execute()` method.  
2. Integrated LangChain’s AgentExecutor to let the LLM decide when to call the tool versus generating text.  
3. Added a caching layer with Redis; every spec lookup was stored for 12 hrs, reducing API hits by ~90%.  
4. Introduced async calls and connection pooling so multiple tool invocations ran concurrently.  
5. Built a monitoring dashboard that logged tool usage, latency, and cache hit rates.

**Result:**  
Response times dropped from 800 ms to 350 ms on average, while cache hit rate climbed to 92%. User satisfaction scores improved by 18%, and we reduced API costs by ~70% due to fewer calls. I learned that treating external services as first‑class “tools” lets the LLM orchestrate them cleanly, improving both performance and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
