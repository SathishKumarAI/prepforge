---
qid: ing_464f52448e__faang__local
question: 'Explain: Advanced Retrieval Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 547
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:27-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of *Advanced Retrieval Patterns* in the context of AI‑powered search or vector retrieval systems. I’ll assume we’re talking about modern retrieval‑augmented generation (RAG) pipelines that use embeddings and dense indexes, and you’d like to know what makes “advanced” patterns different from basic keyword lookups.

**Approach**  
1. Define baseline: exact‑match vs. semantic similarity.  
2. Enumerate advanced techniques: re‑ranking, query expansion, multi‑hop retrieval, hybrid sparse‑dense indexing, contextual filtering.  
3. Explain each with a short example and note its impact on relevance & latency.

**Depth**  

| Pattern | What it does | Example | Benefit |
|---------|--------------|---------|---------|
| **Re‑ranking** | First retrieve top‑k vectors, then re‑score with a fine‑tuned model (e.g., BERT). | Retrieve 100 docs, rerank with RoBERTa. | Higher precision without full‑index scan. |
| **Query Expansion** | Add synonyms or related terms before embedding. | “car” → “vehicle”, “automobile”. | Captures documents that use varied vocab. |
| **Multi‑hop Retrieval** | Chain retrievals: fetch a seed, then retrieve related items (e.g., citations). | Retrieve article A, then its cited papers. | Builds richer knowledge graphs. |
| **Hybrid Sparse–Dense Indexing** | Combine BM25 with ANN for speed & semantic depth. | First filter by BM25, then ANN re‑rank. | Low latency + high recall. |
| **Contextual Filtering** | Use user profile or session context to prune irrelevant docs. | User’s location → only local news. | Personalizes results. |

**Edge Cases**  
- *Cold start*: no embeddings → fall back to keyword.  
- *High dimensionality*: ANN may miss distant but relevant vectors.  
- *User bias*: aggressive filtering can reduce serendipity.

**Optimize & Communicate**  
Start with a lightweight hybrid index; profile latency vs. relevance, then add re‑ranking only for top‑k if needed. When presenting to stakeholders, emphasize that each layer trades off compute for quality—clear metrics (recall@10, NDCG) help justify the added complexity. This structured narrative aligns with FAANG interview expectations: clear problem restatement, systematic approach, depth of technical detail, edge‑case awareness, and a concise, data‑driven optimization plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
