---
qid: ing_9c5cfa4a2c__eli5__local
question: 'Explain: ​ Provider strategy — Structured output - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 190
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:16-05:00'
sources: []
---

Imagine you’re building a smart assistant that writes grocery lists for different shoppers. Each shopper (the “provider”) has its own way of writing lists: one likes bullet points, another prefers numbered steps, and a third wants a table with prices.  
A **structured output** is the common recipe that tells the assistant *what* to include on every list—item name, quantity, price—and *how* it should be arranged. LangChain’s “provider strategy” lets you plug in any grocery‑list style (the provider) while keeping the same underlying data structure.  
So, instead of rewriting the whole assistant for each new format, you just swap out the formatting piece. The core logic stays the same; only the presentation changes—just like switching a printer driver without touching the document itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
