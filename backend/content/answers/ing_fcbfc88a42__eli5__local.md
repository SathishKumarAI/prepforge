---
qid: ing_fcbfc88a42__eli5__local
question: 'Explain: Design the Twitter timeline and search — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 194
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:15:02-05:00'
sources: []
---

Imagine a giant library where every book is a tweet and the librarian’s job is to hand out the right books to each reader as soon as they arrive.  
When someone “follows” another, the librarian keeps a list of those authors (followers). Every time a new book appears, the librarian adds it to the shelves that belong to all readers who follow that author—just like pushing an update into many timelines at once.  

The search feature is like a super‑fast indexer: each word in every book gets catalogued, so when a reader types a query, the system can instantly pull all matching books from the index and sort them by relevance (date, popularity).  

This way, the timeline stays fresh for everyone and searching feels instant—just as a well‑organized library lets you find any book in seconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
