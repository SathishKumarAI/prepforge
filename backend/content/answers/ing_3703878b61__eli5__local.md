---
qid: ing_3703878b61__eli5__local
question: What Is a Database Index? — Indexing | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 200
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:58-05:00'
sources: []
---

Think of a library that holds thousands of books on a single shelf. If you want the book about *quantum physics*, you could start at the front and flip through every volume until you find it—slow and tiring. A database index is like the library’s catalog card system: before you search, you look up “quantum physics” in the index, which tells you exactly which shelf number and position to go to. 

**Index** – a small, organized list that points directly to where data lives inside the big table.  
**Table** – the full collection of records (like all library books).  
**Key** – the column(s) used for searching (the title in our example).

The index speeds up look‑ups dramatically by avoiding a full scan of every row, just as a catalog card lets you skip straight to the right book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
