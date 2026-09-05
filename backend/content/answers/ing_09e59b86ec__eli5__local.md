---
qid: ing_09e59b86ec__eli5__local
question: 'Explain: 5.6 Archiving Old Data — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 223
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:24-05:00'
sources: []
---

Imagine a library that keeps books in two rooms: the **main hall** for new readers and the **storage wing** for older, rarely‑visited titles. When a book has been shelved for years, it’s moved to storage so the main hall stays tidy and fast. But librarians still want to know when someone asks for a stored book, so they set up a *notification service*: whenever a patron requests an old title, a message pops up in their desk saying “Your requested book is now available from storage.”  

In machine‑learning systems, **archiving old data** means moving stale training examples or logs to cheaper, slower storage (like moving books to the wing). The **design notification service** is a lightweight component that watches for requests to archived data and sends an alert so downstream processes can fetch it if needed. It keeps the main database lean, reduces cost, yet guarantees no request goes unanswered—just like librarians still help patrons find their old favorite books.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
