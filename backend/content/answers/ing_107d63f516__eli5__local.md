---
qid: ing_107d63f516__eli5__local
question: 'Explain: Create an index Generally available — Create an index | Elasticsearch
  API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 232
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:28-05:00'
sources: []
---

Imagine you’re setting up a new library that will hold books (your data) and let people find them quickly.  
In Elasticsearch, “creating an index” is like building that library’s floor plan: you decide how many shelves it has, what categories they’ll be grouped into, and which tools will help locate a book.  

An *index* is simply a named container for documents (records). When you call the Create Index API, you give Elasticsearch a name and optionally describe:
- **mappings** – the blueprint of each document’s fields (like specifying that a “book” has a title, author, and page count).
- **settings** – how many copies (shards) of the data to keep and how many replicas for backup.

Once the index is built, you can add documents, search them, and even run machine‑learning jobs on the stored information. It’s just the first step: setting up a tidy space where all your data lives and can be explored efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
