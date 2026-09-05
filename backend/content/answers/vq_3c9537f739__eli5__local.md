---
qid: vq_3c9537f739__eli5__local
question: WHAT IS AN INDEX IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 184
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:50-05:00'
sources: []
---

Imagine your library has a huge catalog of books, but you only keep one copy of each title on the shelf. To find a book quickly, you use a *index*—a separate list that tells you exactly which shelf and spot a title is in. In SQL, an index works the same way: it’s a little database structure that keeps track of where rows are stored based on the values of one or more columns.

When you ask for rows that match a value (say “John Doe” in a name column), the database looks at the index instead of scanning every row. The index tells it right away which rows to read, so the query runs fast—just like flipping straight to the page number in a book’s index instead of leaf‑rolling through all pages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
