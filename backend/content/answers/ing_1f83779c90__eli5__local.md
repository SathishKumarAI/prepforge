---
qid: ing_1f83779c90__eli5__local
question: 'Explain: Index lifecycle management (ILM) — Elasticsearchstreams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 226
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:26:09-05:00'
sources: []
---

Think of an Elasticsearch stream like a library that keeps adding new books every day.  
**Index Lifecycle Management (ILM)** is the librarian’s rule‑book for handling those books as they age.

1. **Create phase** – When a book arrives, ILM puts it in a fresh shelf (a “hot” index) where readers can find it quickly.  
2. **Warm phase** – After a week, the book isn’t needed so fast; it’s moved to a quieter shelf that still reads well but uses less space.  
3. **Cold phase** – Months later, the book is rarely checked out. ILM moves it to an archival shelf that’s slower to access but cheap to store.  
4. **Delete phase** – After a year or more, the book is removed entirely, freeing room for new titles.

Just as a librarian balances speed and cost, ILM automatically stages data from hot to cold to delete, keeping Elasticsearch fast yet economical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
