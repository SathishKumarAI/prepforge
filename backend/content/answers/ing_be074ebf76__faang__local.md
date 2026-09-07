---
qid: ing_be074ebf76__faang__local
question: 'Explain: Q6: Describe hybrid search and when you would use it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 423
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:04:25-05:00'
sources: []
---

**Clarify**  
Hybrid search blends *vector* similarity with *keyword/lexical* matching, returning results that satisfy both semantic relevance and exact term constraints. I’ll assume we’re working on a product‑search feature where users type natural language queries but also need strict filters (e.g., brand or price).  

**Approach**  
1. Encode the query into two embeddings: one for semantic search (BERT, CLIP) and one for keyword extraction.  
2. Run a vector search against an ANN index to get top‑N semantically similar documents.  
3. Apply lexical filtering on these candidates using inverted indexes or regexes to enforce exact terms/filters.  
4. Re‑rank the filtered set with a small neural reranker that weighs both semantic similarity and keyword match scores.

**Depth**  
- *Vector component*: FAISS/Annoy, O(log N) query time.  
- *Keyword component*: Lucene/Solr, fast term lookups.  
- *Re‑ranker*: 2‑layer feedforward network; complexity O(M) where M is the filtered set size (typically <100).  
Trade‑offs: higher recall but more filtering cost; lower latency if we cache common filters.

**Edge Cases**  
- Ambiguous queries with no keyword matches → fall back to pure semantic search.  
- Extremely large filter sets → pre‑compute composite bitsets.  
- Updates to the corpus require re‑encoding and index rebuilds.

**Optimize & Communicate**  
To reduce latency, we can fuse the vector and lexical stages using a *hybrid ANN* that stores term vectors alongside embeddings. For scalability, shard the indexes by category and use a load balancer to route queries. I would explain this flow to interviewers as: “We first cast a wide net with semantic similarity, then prune aggressively with exact terms, finally re‑rank to balance relevance and constraints.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
