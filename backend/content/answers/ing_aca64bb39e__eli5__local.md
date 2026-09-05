---
qid: ing_aca64bb39e__eli5__local
question: 'Explain: Indexing — Database-Internals/DataStructures/Index.md at main
  \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 217
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:14-05:00'
sources: []
---

Think of a library where every book is written on a single page and the books are shuffled randomly on shelves. If you want to find “The Great Gatsby,” you’d have to flip through every page until it appears—slow and tiring.

An index in a database is like a detailed, alphabetized table‑of‑contents that tells you exactly which shelf and spot a book (or record) sits on. It’s built from the values of one or more columns (the “search keys”). Instead of scanning all rows, the database follows the index to jump straight to the matching records.

The index is itself a small, organized data structure—often a B‑tree—that keeps pointers to the actual data pages. When you add, delete, or change data, the index updates automatically so it remains accurate. Thus, queries that filter on indexed columns run quickly, just as finding a book by its title in a well‑ordered table of contents is instant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
