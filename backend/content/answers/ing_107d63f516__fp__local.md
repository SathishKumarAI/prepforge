---
qid: ing_107d63f516__fp__local
question: 'Explain: Create an index Generally available — Create an index | Elasticsearch
  API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 387
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:40:29-05:00'
sources: []
---

**Why Elasticsearch needs an “index”**

When a user types *“machine learning”* the system must answer in milliseconds from billions of documents.  
The fundamental problem is to reduce a linear scan to a sub‑linear lookup: given a set of query terms, find all records that contain them and rank them by relevance.  

**From this problem comes the inverted index**

1. **Tokenization & analysis** – each document is broken into *terms* (words, n‑grams, etc.) via analyzers.  
2. **Posting lists** – for every term we store a list of document IDs that contain it.  
3. **Scoring** – term frequency, inverse document frequency, and field boosts are precomputed to compute BM25 or TF‑IDF scores on the fly.

Elasticsearch’s “Create an index” API is the point where you define *how* these structures will be built:

- **Mappings** decide which fields become searchable, how they’re tokenized, and whether positions (for phrase queries) are stored.  
- **Settings** set the number of shards (parallel inverted indexes), replicas (fault tolerance), and analyzer defaults.

The API is therefore not just a “create” call; it’s a contract that guarantees the underlying data structures satisfy the search‑time constraints.  

**Non‑obvious insight**

Many overlook *position awareness*. By default, Elasticsearch stores term positions, enabling phrase and proximity queries. If you disable this for speed, those queries become impossible—an elegant trade‑off between index size and query expressiveness that rarely gets highlighted in tutorials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
