---
qid: ing_817508bd2e__eli5__local
question: 'Q: You are designing a legal document search system with 5M documents.
  The team is debating between dense bi-encoder search with a cross-encoder reranker
  vs. ColBERT. What do you recommend?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 217
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:55-05:00'
sources: []
---

Imagine each legal document as a book on a giant shelf and every search query as a librarian asking for the most relevant books.  
A **dense bi‑encoder** turns both query and book into short “summaries” (vectors). It quickly grabs a handful of likely matches, then a **cross‑encoder reranker** reads each candidate with the query in full to decide which is truly best—like a senior librarian double‑checking the first picks.  
**ColBERT** keeps every word’s vector and compares them one by one, so it can spot subtle relevance but at the cost of more memory and slower speed.

For 5 million documents where response time matters, start with the bi‑encoder + cross‑encoder pipeline: fast retrieval plus a smart second look. If you need the absolute top‑ranked results and have enough compute, swap in ColBERT later. This balances speed, accuracy, and resource use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
