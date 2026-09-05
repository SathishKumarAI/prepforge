---
qid: ing_3776afe72c__eli5__local
question: 'Explain: Delete empty or unneeded indices — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 205
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:35-05:00'
sources: []
---

Think of an Elasticsearch cluster as a big library with many bookshelves (indices).  
Each shelf is split into sections called *shards*, just like chapters in a book.  
If you keep a shelf that has no books—maybe it was created for a project that never happened—you’re wasting space and making the librarian’s job harder, because every time someone asks for a book the system still checks that empty shelf.

**Delete empty or unneeded indices** means removing those shelves with nothing inside.  
When you do this, the library can redistribute its real books into fewer, fuller sections (shards).  
Fewer shards mean less overhead: faster searches, lower memory use, and easier maintenance.  

So, just like a tidy library keeps only shelves that actually hold books, clean up unused indices to keep your Elasticsearch cluster lean and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
