---
qid: ing_c7781a450d__eli5__local
question: 'Explain: Compare several designs — Designing Data-Intensive Applications
  (DDIA) \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 294
total_tokens: 482
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:51:46-05:00'
sources: []
---

Imagine you’re building a huge library that must serve millions of readers at once, and the books are constantly being added, edited, or removed.  
DDIA shows three different ways to organize this library:

1. **Single‑Database “Monolith”** – All books live in one giant shelf (a single SQL database). It’s simple to set up, but when a new book arrives or someone borrows many at once, the whole shelf slows down or crashes.

2. **Microservices with Replication** – Split the library into themed sections (micro‑services) and keep copies of each section on several shelves (replicas). Readers can get a copy quickly, but keeping every copy up‑to‑date when books change is hard.

3. **Event‑Driven Architecture** – Instead of copying entire sections, write a log of every action (“book added”, “book borrowed”) and let each section read the log to update itself. It’s like having a master notebook that all sections consult; this keeps the system consistent even when many people are adding or borrowing at once.

All three designs aim for speed, reliability, and scalability, but they trade off complexity, consistency, and cost in different ways—just as a librarian chooses between one big shelf, several replicated shelves, or a shared notebook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
