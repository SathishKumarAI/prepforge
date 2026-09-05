---
qid: ing_4a30d3f8f9__star__local
question: 'Explain: Function Calling & Tool Use — Structured Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 345
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:38-05:00'
sources: []
---

**Situation:**  
At my last startup we built a customer‑support chatbot that had to pull live inventory data from three disparate APIs while keeping the conversation natural. The engineering team was struggling because each API had its own schema and authentication method, and we were hitting rate limits when we tried naive polling.

**Task:**  
I needed to design an architecture where the bot could *call* the right external service on demand, parse its response, and embed that information back into a coherent reply—all without bloating the model’s context window or breaking latency targets.

**Action:**  
I introduced a lightweight function‑calling layer. Each API endpoint became a declarative “tool” with a JSON schema for arguments and results. The LLM was prompted to either generate a structured call (e.g., `{"name":"get_stock","arguments":{"sku":"12345"}}`) or produce plain text. A Node.js middleware intercepted these calls, performed OAuth authentication, invoked the API, and returned the result in the same JSON format for the model to incorporate. I also added a caching decorator that stored frequent queries for 30 seconds to reduce load.

**Result:**  
The bot’s response time dropped from an average of 1.8 s to under 700 ms, while accuracy improved by 27% (measured against manually verified inventory checks). The architecture now scales across new APIs with minimal code changes, and I learned that treating external services as first‑class tools lets the model focus on language generation rather than data plumbing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
