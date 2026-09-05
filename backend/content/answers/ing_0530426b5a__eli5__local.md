---
qid: ing_0530426b5a__eli5__local
question: 'Explain: Simple Coherency Model — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 232
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:43:43-05:00'
sources: []
---

Think of a big library (the cluster) where every book is split into many pages and each page is kept on different shelves (data nodes). The **Simple Coherency Model** is the rule that tells us how to keep those pages in sync when someone wants to read or rewrite them.

* **Master node (NameNode)** – the librarian who knows where every page lives.  
* **Data nodes** – the shelf‑keepers holding the actual pages.  
* **Block** – a chunk of a file, like a single page.  

When you ask for a book, the librarian tells you which shelves hold each page, and you read them in order—no two readers ever get conflicting copies because only one person can write to a page at a time (the block is locked). If someone rewrites a page, the librarian updates its address so everyone next time gets the new version. This lock‑and‑tell system keeps the library’s contents coherent without complex coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
