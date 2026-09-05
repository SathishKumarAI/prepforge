---
qid: ing_1b6d7d5d69__eli5__local
question: 'Explain: Arize Phoenix has a built-in MCP server that lets your agents
  query traces with SQL'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 203
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:30-05:00'
sources: []
---

Imagine your software is like a big library full of books (the data). Sometimes you want to find exactly the page where something happened—like a character’s first appearance or a key event. Arize Phoenix is a librarian that can read every book and remember where everything is.

The “MCP server” (short for *Model‑Centric Platform*) is its special desk. When your AI agents (the librarians’ helpers) need to know why the model made a decision, they ask the MCP desk a question in SQL—“Show me all the cases where the model predicted ‘spam’ and the input had a word ‘free’.” SQL is just a plain language for asking about rows of data.

So the MCP server acts like an ever‑ready research assistant that lets your agents pull out exact, traceable examples from the library without sifting through every page.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
