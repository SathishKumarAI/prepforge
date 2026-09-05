---
qid: ing_de7510e97b__eli5__local
question: 'Explain: Master-slave and master-master — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 224
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:26:58-05:00'
sources: []
---

Think of a library that wants to keep its books up‑to‑date everywhere.  
In a **master‑slave** setup, there is one “chief librarian” (the master). He checks out new books and writes the catalog. Every other branch of the library (the slaves) simply copies what the chief says – they can read the catalog but cannot change it themselves. If the chief makes a mistake, all branches must wait for him to fix it before they can update.

In a **master‑master** setup, every branch has its own librarian who can both check out books and write the catalog. All librarians keep an eye on each other’s changes and agree on how to merge them when two of them add or modify the same book at the same time. This lets the library work in parallel but requires a system for resolving conflicts.

So, master‑slave is “one writer, many readers”; master‑master is “many writers who coordinate.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
