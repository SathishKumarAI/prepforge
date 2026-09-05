---
qid: ing_160010e0aa__eli5__local
question: 'Explain: CDC (Change Data Capture) — How do we incorporate Event Sourcing
  into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 244
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:22-05:00'
sources: []
---

Imagine a library that keeps a log of every book loan and return.  
**Change Data Capture (CDC)** is like the librarian’s notebook: whenever a book moves from shelf to borrower, the librarian writes down “Book X checked out” and when it comes back, she writes “Book X returned.” The notebook records *only* what changed, not the whole library inventory each time.

**Event Sourcing** takes that notebook further. Instead of just noting changes, we treat each note as an event that can be replayed to rebuild the library’s state at any moment: “Book X checked out on 2024‑01‑15” and later “Book X returned on 2024‑02‑03.” By storing every event, we can reconstruct past states, audit why a book is missing, or even roll back to an earlier point.

So, CDC supplies the raw change events from your database, and Event Sourcing turns those events into a complete history that any part of the system can replay whenever it needs to know *exactly* what happened.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
