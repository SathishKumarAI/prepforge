---
qid: ing_347998963e__eli5__local
question: 'Explain: Search Ranking — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 222
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:58:54-05:00'
sources: []
---

Think of a library that wants to show you the most useful books first when you ask for “history of space.”  
**Search ranking** is the algorithm that decides which books (or web pages) appear at the top. It’s like a librarian who looks at many clues: how often people read a book, what other books are often paired with it, and whether the book actually talks about your exact question.

- **Query** – the words you type in (“history of space”).  
- **Ranking score** – a number the algorithm gives each page that says “how good is this for you?”  
- **Relevance** – how well the page matches what you asked.  

The machine learns from past searches: if many people clicked on a particular article after typing similar words, its score goes up. In interviews, you’ll explain this process and discuss tricks (like using word embeddings or click‑through data) that make the ranking smarter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
