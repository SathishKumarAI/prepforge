---
qid: ing_59694b2d15__star__local
question: 'Explain: Tools & Tool-Calling — Langchain Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 369
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:39-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a conversational AI for the finance team that needed to pull real‑time stock data and execute trades via an API. The existing chatbot was just text‑only and couldn't access external services, so the analysts complained it was useless.

**Task:**  
I had to extend the LangChain framework to enable “tool calling” so the LLM could invoke specific APIs—fetching market prices, placing orders, and logging results—while keeping the conversation natural.

**Action:**  
1. I defined a set of tool schemas in LangChain (e.g., `get_price(symbol)`, `place_order(symbol, qty)`), each with JSON‑based arguments and response formats.  
2. Implemented a custom PromptTemplate that wrapped these tools into a system message, guiding the LLM to produce a structured “tool call” instead of plain text.  
3. Wrote an async tool executor that validated the LLM’s JSON output, called the corresponding Python function (using `requests` for the API), and returned results back to the chain.  
4. Added safety checks: rate‑limit handling, retry logic, and audit logging.

**Result:**  
Within two weeks we launched a beta where analysts could ask, “What’s Apple’s price now?” and receive instant data plus an optional trade command—all within the same chat flow. Usage increased by 45%, and we reduced manual spreadsheet updates from 3 hours/day to zero. I learned how to blend LLM reasoning with deterministic APIs while preserving latency and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
