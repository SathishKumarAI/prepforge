---
qid: ing_8c638a73fc__eli5__local
question: 'Explain: When to Use Just `langchain-core` vs Full LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 223
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:08-05:00'
sources: []
---

Think of **LangChain** like a kitchen that can either be a single pot or an entire pantry.

* **Just `langchain-core`** is the single pot.  
  It gives you the basic stove (the core logic) and the essential spices (helpers for building chains). Use it when you only need to mix a few ingredients—say, send a question to GPT and get back a short answer. You keep the pantry small, lighter, and faster.

* The **full LangChain** is the whole pantry with many shelves of tools: pre‑built “recipes” (chain templates), connectors for databases, memory modules, and UI helpers. Pick this when you want ready‑made combinations—like a soup that already knows how to fetch data from a spreadsheet, remember past chats, or run multiple LLM calls in parallel.

So: use the core pot for simple, custom flows; bring out the pantry when your project needs reusable patterns, extra memory, or integrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
