---
qid: ing_968e7768ab__eli5__local
question: What is a reranker, and why add one after vector search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 158
total_tokens: 319
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:37-05:00'
sources: []
---

Think of vector search as a big library that hands you a list of books that look similar to the title you typed. It’s fast, but it doesn’t know which book will actually answer your question best; it just knows they’re close in “concept space.”

A reranker is like a friendly librarian who reads those few pages each book and decides which one truly fits what you want. The first step finds candidates quickly; the second step, the reranker, re‑orders them by how well their content matches your intent.

So we add a reranker after vector search to turn a rough match list into a precise, useful answer—speed plus accuracy combined.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
