---
qid: vq_de1dffcb09__eli5__local
question: Why are the DML operations are slower on Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 220
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:03-05:00'
sources: []
---

Think of a library that keeps two catalogs for every book:  
* **The shelf** (the main data) and  
* **A quick‑look index** (a list of titles pointing to shelves).

When you add, change or delete a book, the librarian must update both places. Updating the shelf is easy—just put the new copy in its spot. But updating the quick‑look list is harder: the librarian has to find every entry that points to that book, move it to a new location, and then rewrite the whole list so it stays sorted.  

In databases, DML (INSERT/UPDATE/DELETE) touches the table rows first, then must touch each index row that references those rows. Index updates involve more I/O, page splits, and locking, which takes extra time. So even though indexes speed up reads, they slow down writes because every write has to “rewrite” the index too.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
