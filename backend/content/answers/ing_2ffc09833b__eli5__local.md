---
qid: ing_2ffc09833b__eli5__local
question: 'Explain: Query Routing and Classification — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 208
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:51:46-05:00'
sources: []
---

Think of a huge library that’s open all day, but you’re only allowed to visit one shelf at a time because the librarians are busy.  
**Query routing** is like a smart assistant who first decides which shelf your question belongs on—history, science, or fiction—before you even walk in. It looks at the words you typed and sends you straight to the right section, saving everyone’s time.  

Once you’re on that shelf, **classification** is the librarian who reads your request a bit more closely and tells you exactly which book (or set of books) will answer it best. In production AI systems, this two‑step process happens automatically and at massive scale: the first step routes a user’s query to the right data cluster; the second step classifies the exact content needed from that cluster. Together they keep responses fast, accurate, and efficient—just like a well‑organized library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
