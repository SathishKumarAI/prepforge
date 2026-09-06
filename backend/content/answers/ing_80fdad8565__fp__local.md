---
qid: ing_80fdad8565__fp__local
question: 'Explain: Text Search Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 594
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:37-05:00'
sources: []
---

### From the Problem to the Solution

When a user types a phrase, an engine must decide **which documents are “most relevant”** among millions of texts.  
The fundamental challenge is that *relevance* is not just word‑match; it depends on term rarity, context, and query intent.  A search database is a data structure that turns this probabilistic problem into efficient look‑ups by precomputing the necessary statistics.

### Why Different Databases Exist

Each design trades **index size**, **update speed**, and **query expressiveness** against one another:

| Database | Core Idea | Use Case |
|---|---|---|
| Inverted index | Store postings (doc → term positions). | Classic full‑text search. |
| BM25 / Okapi | Weight terms by IDF & document length. | Ranking‑centric engines. |
| Phrase/Span index | Preserve adjacency of tokens. | Exact phrase queries. |
| N‑gram index | Index contiguous token sequences. | OCR or noisy text. |
| Fuzzy index | Edit distance buckets. | Autocorrect, typo tolerance. |
| Prefix tree (Trie) | Shared prefixes for autocompletion. | Suggest next words. |
| Suffix array | All suffixes sorted lexicographically. | Longest common substring. |
| Vector space / Embedding | Map docs to dense vectors; cosine similarity. | Semantic search. |
| Graph‑based index | Nodes = terms, edges = co‑occurrence. | Contextual relevance. |
| Probabilistic model (LDA) | Topic distributions per doc. | Discover latent themes. |
| Temporal index | Time‑stamped postings. | News archives. |
| Geo‑spatial index | R‑tree on coordinates of document metadata. | Location‑aware search. |
| Bloom filter | Fast set membership test, probabilistic. | Quick existence checks. |
| Sharded cluster | Distribute partitions across nodes. | Scale‑out for massive corpora. |
| Cache layer (Memcached/Redis) | Keep hot queries in RAM. | Reduce latency. |

### One Non‑Obvious Insight

Most people think “more terms = better precision.”  In reality, **term *context* is more powerful than term frequency**: a single rare word can be highly informative only if it appears within a certain syntactic or semantic frame.  Vector‑space and graph indices capture this contextuality by encoding relationships among terms—turning the index into a *semantic network* rather than a flat list of tokens.

By matching the **mathematical nature of the query** (exact, fuzzy, semantic) to the corresponding index structure, you achieve both speed and relevance without compromising either.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
