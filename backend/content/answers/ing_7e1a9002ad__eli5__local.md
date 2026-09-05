---
qid: ing_7e1a9002ad__eli5__local
question: 'Explain: How do you choose a vector database? pgvector vs dedicated vector
  stores vs search engines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 274
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:56:40-05:00'
sources: []
---

Imagine your data as books in a huge library. A **vector database** is the librarian that knows how to find books whose *ideas* (their numerical fingerprints) are close together, even if they’re written in different languages.

**pgVector** is like using the library’s existing catalog system (PostgreSQL). It works well when you already have a book collection there and only need occasional “similar‑book” searches. You get all the usual catalog features—security, backup, joins—with a small extra extension for fingerprints.

A **dedicated vector store** (e.g., Milvus, Pinecone) is a specialized librarian who spends all day mastering the art of similarity search. It offers faster lookups and more tuning knobs but adds another system to maintain.

**Search engines** (like Elasticsearch with k‑NN plugins) are like a hybrid library: they index full text for keyword searches while also handling vector similarity. They’re great if you need both quick text queries and fuzzy matching in one place.

So pick pgVector when you want simplicity inside your existing database; choose a dedicated store for high‑performance, large‑scale similarity work; and go with a search engine if you need both full‑text and vector search together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
