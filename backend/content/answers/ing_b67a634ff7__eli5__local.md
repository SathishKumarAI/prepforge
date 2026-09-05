---
qid: ing_b67a634ff7__eli5__local
question: You are exposing retrieval as a tool to an agent, over MCP. How does designing
  a tool interface differ from designing a retrieval API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 213
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:40-05:00'
sources: []
---

Imagine the agent is a chef who wants to cook a dish (answer a question).  
A **retrieval API** is like giving the chef a recipe book: it tells them where to look for ingredients, how to read each page, and what format the recipes are in. The chef can pick any recipe they want, but they must understand the book’s layout.

A **tool interface** is like handing the chef a smart kitchen assistant that knows exactly which pantry holds the needed ingredient and can fetch it instantly. Instead of the chef reading the book, the assistant follows a simple command—“give me the tomato”—and returns the exact item.  

So, designing a tool interface focuses on a clean, high‑level “command → result” contract (no need to know how data is stored), while a retrieval API requires the user to understand the underlying structure and query language of the database. The former abstracts away complexity; the latter exposes it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
