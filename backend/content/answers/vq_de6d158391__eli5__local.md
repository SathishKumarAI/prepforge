---
qid: vq_de6d158391__eli5__local
question: What are the different types of Restricted Joins?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 281
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:10-05:00'
sources: []
---

Think of a data set as a library of books, each book having several attributes (author, year, genre).  
A **restricted join** is like asking the librarian to give you only the books that satisfy a specific rule—*“only books written by authors who started publishing after 2000”*. The rule is the *restriction*, and it limits which rows (books) can appear in the final list.

There are two common kinds:

1. **Inner restricted join** – You get a book only if it appears in both libraries **and** satisfies the rule. It’s like pulling out books that exist in Library A and Library B *and* meet the author‑year condition.

2. **Outer restricted join** – You keep all books from one library, but you still apply the rule to the matching side. If a book doesn’t satisfy the restriction or has no match, its missing part is filled with blanks (NULLs). It’s like keeping every book in Library A, but only showing the partner book from Library B when it meets the condition; otherwise, you leave that spot empty.

In both cases the *restriction* acts as a filter on the joined data, just as a librarian would filter books by a rule.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
