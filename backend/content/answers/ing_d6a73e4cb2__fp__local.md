---
qid: ing_d6a73e4cb2__fp__local
question: 'Explain: Data types supported — Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 391
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:26-05:00'
sources: []
---

Elasticsearch stores documents as JSON, but the search engine must convert those values into a *searchable* representation.  
The fundamental problem is **efficient retrieval under uncertainty**: we want to answer “does this field contain X?” or “how many records have Y within Z?” while keeping memory and query time minimal.  
Hence each JSON value is mapped to one of a handful of **data types**, each chosen for the mathematical properties it guarantees:

| Type | Core property | Why it matters |
|------|---------------|----------------|
| `text` | tokenized, inverted index | supports full‑text search; words are hashed into postings lists. |
| `keyword` | atomic string, exact match | preserves original value; ideal for filters and aggregations. |
| `numeric` (`integer`, `float`, etc.) | contiguous integer ranges | enables range queries via B‑trees or bitmaps. |
| `date` | sortable epoch milliseconds | allows date math and interval queries. |
| `geo_point` / `geo_shape` | spatial index (R‑tree, quad‑trees) | supports proximity and containment tests. |
| `boolean` | two‑valued bitmap | trivial storage & lookup. |

The non‑obvious insight: **type choice dictates the index structure**. A `text` field uses an inverted list; a `keyword` field uses a hash table. When you query, Elasticsearch switches between these structures automatically—hence why correct typing is as important as schema design.  

In practice, every document’s type declaration tells Elasticsearch *how to compress, how to index, and how to answer* queries in logarithmic or near‑constant time, turning raw JSON into a high‑performance search machine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
