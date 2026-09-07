---
qid: ing_a76dd4dc2d__faang__local
question: Why Hybrid Search (Vector + Full-Text)? — Real Time Search
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 418
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:13:48-05:00'
sources: []
---

**Clarify**  
You’re asking why a search system that serves real‑time queries should combine vector embeddings with traditional full‑text (FT) indexing. I’ll assume the goal is: *low latency, high recall, and relevance for user intent in an application like e‑commerce or knowledge base.*

**Approach**  
1. Build an FT index (Lucene/Elastic) for exact keyword matching and fast filtering.  
2. Train embeddings on the same corpus; store them in a vector index (FAISS/HNSW).  
3. At query time, run both engines in parallel: FT returns candidate snippets; vector retrieval scores semantic similarity. Merge results via a learned fusion model or weighted ranking.

**Depth**  
- **FT** gives deterministic hit‑rate for exact terms, supports facets, and handles large volumes with minimal compute.  
- **Vector search** captures synonyms, paraphrases, and contextual relevance—critical when queries are ambiguous or misspellings occur.  
- Combining them lets you retain FT’s speed while boosting recall; the fusion layer can learn to down‑weight noisy vector matches for short keyword queries. Complexity: FT query O(log N), vector ANN O(log N) (HNSW), overall latency ~10–30 ms on commodity hardware.

**Edge Cases**  
- Very short queries → FT dominates.  
- Domain‑specific jargon not in embeddings → fallback to FT.  
- Embedding drift over time → periodic re‑embedding and index refresh.  

**Optimize & Communicate**  
To improve, cache the top‑K vector candidates per query prefix; use a hybrid scoring function that normalizes both similarity scores. I’d explain: *“We’re essentially layering semantic understanding on top of exact matching to cover both sides of the spectrum—precision from FT and recall from vectors.”* This satisfies interviewers’ emphasis on structured reasoning, clear communication, and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
