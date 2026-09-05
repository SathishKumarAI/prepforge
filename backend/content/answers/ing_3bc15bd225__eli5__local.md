---
qid: ing_3bc15bd225__eli5__local
question: 'Explain: Searches run on a single thread per shard'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 189
total_tokens: 347
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:55-05:00'
sources: []
---

Imagine a library where each book is a *shard* of data, and the librarian (the search engine) can read only one page at a time. “Single‑thread per shard” means that for each book the librarian uses just one hand to flip pages—no multitasking inside that book. If you ask a question about a book, the librarian will first go through its pages one by one with that single hand, marking matches as they come. Only after finishing the current page can the librarian switch to another hand (or another book). This keeps the process simple and predictable: each shard’s search is isolated, avoiding confusion from juggling many hands at once. The trade‑off is speed—more books can be searched in parallel, but each book itself takes a little longer because it uses only one thread.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
