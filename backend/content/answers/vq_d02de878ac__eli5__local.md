---
qid: vq_d02de878ac__eli5__local
question: Database models ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 151
output_tokens: 300
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:28:46-05:00'
sources: []
---

Think of a library that keeps books in shelves.  
A **database model** is like the plan you use to organize those shelves.

* **Relational (tables)** – Imagine each shelf holds one type of book: all novels on one, all biographies on another. Each book has numbered spots (rows) and columns that list title, author, year. You can ask for “all novels by Jane Austen” or join the novel shelf with a separate author shelf to find where she lives in the library.

* **Document (JSON)** – Now each shelf holds entire books as little boxes: a box contains title, author, chapters, and even pictures inside one piece of paper. You pull out a whole book at once; it’s easier when you need everything together but harder if you only want the chapter titles.

* **Key‑value** – Like a phonebook where each name (key) points straight to an address (value). Fast lookup, but no structure beyond that one pair.

* **Graph** – Shelves are nodes, and lines between them show relationships: “friend of,” “borrowed from.” Great when you need to trace connections quickly.

So a database model is the blueprint that decides how data sits on shelves, how you find it, and what relationships you can follow. Each type shines in different kinds of questions you might ask.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
