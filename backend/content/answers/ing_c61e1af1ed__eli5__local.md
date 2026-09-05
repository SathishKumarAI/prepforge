---
qid: ing_c61e1af1ed__eli5__local
question: 'Explain: Prevent mapping explosions — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 263
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:58-05:00'
sources: []
---

Imagine you’re building a giant library where every book is an “elastic document.”  
Each book has a list of tags (the *mapping*) that tells the library how to find it—genre, author, year, etc.  
If you let people add any tag they want, soon you’ll have thousands of tiny categories: “thriller‑novel,” “thriller‑mystery,” “thriller‑psychological,” and so on. The catalog becomes a tangled maze that slows every search—this is a **mapping explosion**.

To avoid it, the library sets rules (a *mapping schema*): only a fixed set of tags are allowed, and each tag has a clear definition (e.g., “genre” can be “fiction,” “non‑fiction,” or “science”).  
When new books arrive, they’re checked against these rules. If a book tries to add an unauthorized tag, the system either rejects it or maps it to a predefined category.  

So, preventing mapping explosions is like keeping the library’s catalog tidy: you predefine the tags and enforce them, ensuring every search runs fast and returns meaningful results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
