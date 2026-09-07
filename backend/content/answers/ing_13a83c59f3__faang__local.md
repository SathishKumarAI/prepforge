---
qid: ing_13a83c59f3__faang__local
question: 'Explain: Unified, High-Relevance Search — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 483
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:29:02-05:00'
sources: []
---

**Unified, High‑Relevance Search – Glean MCP Server**

| Section | What I’ll Cover |
|---------|-----------------|
| **Clarify** | *Problem:* Design a search service that aggregates multiple data sources (docs, emails, code) into one query interface while delivering top‑ranked results. Confirm: 1) Data volume (~10⁹ items), 2) Latency goal (<200 ms), 3) Security model (role‑based access). |
| **Approach** | 1️⃣ Ingest → normalize metadata and content into a shared index. <br>2️⃣ Rank with a hybrid model: BM25 for lexical relevance + learned embeddings for semantic similarity. <br>3️⃣ Enforce per‑user filters at query time using vectorized bitmasks. |
| **Depth** | • **Indexing:** Use Lucene‑style inverted indices plus HNSW graphs for embedding proximity. Store term vectors, document vectors, and access flags in a columnar store (e.g., Parquet). <br>• **Query Pipeline:** Tokenize → fetch candidate set via term postings → expand with nearest neighbors → score fusion (linear combination of BM25 & cosine similarity). <br>• **Complexity:** Insertion O(log N) for HNSW, query retrieval O(k log N + M) where k=neighbors, M=candidate count. |
| **Edge Cases** | • No matching terms → fallback to semantic search only. <br>• Privileged data: ensure mask removes unauthorized docs before ranking. <br>• Large documents: chunking and re‑ranking by relevance density. |
| **Optimize & Communicate** | • Cache popular queries in Redis to hit sub‑10 ms. <br>• Periodic pruning of stale vectors to keep index size manageable. <br>Explain trade‑offs: BM25 gives deterministic speed; embeddings add semantic depth but cost extra compute. Highlight that the unified layer abstracts source differences, letting clients issue a single query API while maintaining fine‑grained access control. |

**Result:** A single, low‑latency search endpoint delivering high‑relevance results across heterogeneous data, scalable to billions of items and compliant with strict security constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
