---
qid: ing_13e1623ec3__eli5__local
question: 'Explain: Connect APIs declaratively — Introduction to Apollo Federation
  - Apollo GraphQL Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 213
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:06:47-05:00'
sources: []
---

Imagine a big library where each department keeps its own books on a separate shelf. A visitor (your app) wants to find a book by title, but the shelves are scattered and sometimes the same title appears in different sections. Instead of walking every aisle, you use a *central catalog* that knows which shelf holds what book.

In Apollo Federation, each micro‑service is like one department’s shelf, exposing its own GraphQL schema (the “books”). The **declarative** part means you don’t hand‑write code to stitch them together; instead, each service declares the parts of the overall data graph it owns. A special gateway reads all those declarations and builds a single unified API, just like the central catalog that maps titles to shelves.

So, with Federation, your app queries one GraphQL endpoint, but behind the scenes, the gateway fetches pieces from many services automatically—no manual wiring needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
