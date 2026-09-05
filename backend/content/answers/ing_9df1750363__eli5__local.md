---
qid: ing_9df1750363__eli5__local
question: 'Explain: Search Indexing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 253
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:55-05:00'
sources: []
---

Think of a library that keeps an online catalog for every book it owns. The catalog must stay up‑to‑date whenever a book is added, moved, or removed. **Change Data Capture (CDC)** is the librarian’s “quick‑scan” tool: instead of re‑reading the whole shelf each time, the system watches the library’s records and notes only the changes—new titles, updated authors, deleted entries—and pushes those tiny updates to the catalog.

In a search‑indexing design, the database (the shelves) emits CDC events whenever data changes. A lightweight “change‑listener” reads these events, transforms them into indexable documents, and feeds them to the search engine (like Elasticsearch). This way the index stays fresh without re‑building from scratch, saving time and resources.

**Key terms:**  
- *Change Data Capture (CDC):* a method that captures only data modifications instead of full snapshots.  
- *Index:* a searchable structure built from documents, allowing fast queries.  

The result is a live, responsive search experience that mirrors the database’s current state with minimal lag.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
