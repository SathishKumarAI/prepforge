---
qid: vq_bf08ffcc60__eli5__local
question: WHAT IS A COVERING INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 210
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:00-05:00'
sources: []
---

A **covering index** is like a cheat‑sheet that lets a database answer a question without having to look up the full record.

Imagine you’re looking for all books whose title starts with “C” and you only need the author’s name. Instead of flipping through every book, you have a separate list (the covering index) that says: “Here are titles starting with C, along with their authors.” The list is sorted by title, so you can jump straight to the section for “C”, read off the authors, and stop—no need to open each book.

In database terms, the index stores only the columns needed for a query (plus the key that links back to the full row). Because all required data lives in the index itself, the engine can satisfy the query without touching the main table. This saves time and disk I/O, especially when many rows match but you only need a few columns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
