---
qid: ing_817508bd2e__faang__local
question: 'Q: You are designing a legal document search system with 5M documents.
  The team is debating between dense bi-encoder search with a cross-encoder reranker
  vs. ColBERT. What do you recommend?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 496
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:51-05:00'
sources: []
---

**Clarify**  
We need an end‑to‑end retrieval pipeline for ~5 M legal PDFs/HTMLs that supports ad‑hoc keyword + semantic queries, low latency (≤ 200 ms per request), and high relevance for a small user base (~1k daily users). Key assumptions: documents are pre‑indexed; GPU budget is moderate; the search will be used in an interactive web UI.  

**Approach**  
1. Build a *dense bi‑encoder* encoder (e.g., SBERT or LegalBERT) to produce 768‑dim vectors for all docs.  
2. Index these with HNSW/FAISS for sub‑second nearest‑neighbor lookups.  
3. Feed the top‑k (~10–20) candidates to a *cross‑encoder* reranker (e.g., LegalRoBERTa fine‑tuned on Q&A pairs).  

**Depth**  
- **Bi‑encoder**: 2× cheaper inference, no pairwise computation, perfect for large corpora.  
- **Cross‑encoder**: O(k) cost but gives calibrated relevance; legal queries often hinge on subtle context, so a few rounds of reranking outperform ColBERT’s token‑level attention.  
- **ColBERT**: While it offers fine‑grained token matching, its per‑query GPU load (token‑wise dot products) scales poorly for 5 M docs and would hit latency limits unless we maintain a massive GPU cluster.  

**Edge Cases**  
- Extremely short queries → fallback to keyword search.  
- New documents added → bi‑encoder embeddings can be generated in batch; cross‑encoder reranker remains unchanged.  
- Memory constraints on GPU → use mixed precision for the cross‑encoder.  

**Optimize & Communicate**  
- Cache the top‑k candidates across sessions to amortize HNSW lookups.  
- Profile latency: aim < 100 ms for bi‑encoder + 20 ms for reranker; if exceeded, reduce k or use a distilled cross‑encoder.  
- Explain that this stack balances *relevance* (cross‑encoder) with *scalability* (bi‑encoder), meeting legal domain demands without over‑provisioning GPU resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
