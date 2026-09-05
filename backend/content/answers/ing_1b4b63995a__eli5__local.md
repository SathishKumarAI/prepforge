---
qid: ing_1b4b63995a__eli5__local
question: 'Explain: SPLADE Implementation — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 226
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:30-05:00'
sources: []
---

Imagine your library has two kinds of books: **hardcovers** that are very reliable but slow to flip through, and **e-books** that you can instantly skim for keywords.  
SPLADE works like a librarian who first reads the *e-book* version of every document and builds a quick “keyword index” (a sparse vector of important terms). When you ask a question, the librarian first looks in this fast index to find the most relevant books. Then, for those few books, she opens the hardcover copies and does a deeper reading (the dense neural representation) to fine‑tune the ranking.  
**Sparse vector:** a list that points only to a handful of important words, like a short bookmark list.  
**Dense vector:** a detailed map of the entire book’s meaning, captured by a neural network.  

By combining both, SPLADE gets the speed of quick keyword look‑ups and the depth of full semantic understanding—making search fast yet accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
