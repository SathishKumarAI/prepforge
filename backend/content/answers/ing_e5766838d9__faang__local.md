---
qid: ing_e5766838d9__faang__local
question: 'Explain: Reranker — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 452
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:42-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *reranking* in the context of semantic search—i.e., given an initial set of candidate documents retrieved by a vector‑based index, how do we re‑order them using richer semantics? I’ll assume: (1) embeddings are pre‑computed; (2) the reranker has access to the query and full document text; (3) latency budget is tight (e.g., <50 ms per request).  

**Approach**  
1. **Retrieve candidates** via ANN search (FAISS, Milvus).  
2. **Compute a fine‑tuned similarity score** for each candidate using a transformer that consumes query + document text (e.g., cross‑encoder BERT).  
3. **Combine scores**: weighted sum of ANN cosine similarity and reranker logits to preserve recall while improving relevance.  
4. **Return top‑k** after sorting.  

**Depth**  
- *Cross‑Encoder*: \(O(L_q + L_d)\) tokens → quadratic attention cost; fine‑tuned on QA or relevance datasets (MS MARCO, TREC).  
- *Complexity*: For 10 candidates, ~10× inference time of a single encoder; GPU/TPU batching keeps latency <30 ms.  
- *Trade‑offs*: ANN gives high recall but noisy ranking; reranker boosts precision at cost of compute.  

**Edge Cases**  
- **Short queries**: embeddings may be ambiguous → rely more on semantic matching.  
- **Out‑of‑vocabulary terms**: transformer handles subword tokenization, but domain drift can hurt.  
- **Very long documents**: truncate or use hierarchical pooling to fit model limits.  

**Optimize & Communicate**  
- Use *parameter‑efficient fine‑tuning* (Adapter layers) to keep the model lightweight.  
- Cache reranker outputs for frequent queries.  
- Explain to interviewers that this two‑stage pipeline balances recall, precision, and latency—exactly what FAANG systems demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
