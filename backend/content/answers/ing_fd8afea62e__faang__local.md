---
qid: ing_fd8afea62e__faang__local
question: 'Q: How do you balance dense vs sparse in hybrid search?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 410
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:29:39-05:00'
sources: []
---

**Clarify**  
Hybrid search fuses *dense* (vector) and *sparse* (keyword) signals to rank results. The core trade‑off: dense captures semantics but is costly; sparse is fast but brittle. I’ll assume we have an index of embeddings, a BM25 index, and a budget on latency/throughput.

**Approach**  
1. **Score fusion strategy** – linear interpolation with tunable λ (0–1).  
2. **Dynamic weighting** – adjust λ per query type or user intent.  
3. **Early‑exit & pruning** – use sparse top‑k to limit dense retrieval candidates.  
4. **Feedback loop** – monitor click‑through to recalibrate λ.

**Depth**  
- Compute `score = λ * BM25(q, d) + (1−λ) * cos(emb_q, emb_d)`.  
- Choose λ via validation or Bayesian optimization.  
- To keep latency low: run BM25 first, fetch top k (e.g., 200), then re‑rank with dense vectors only on those candidates.  
- Complexity: BM25 O(N) per query, dense ANN search O(log N) after pruning.

**Edge Cases**  
- Queries with no semantic match → λ→1.  
- Very short queries → sparse dominates.  
- Cold‑start embeddings → fallback to sparse.  
Test on queries with varying lengths and domains; measure MAP@10 vs latency.

**Optimize & Communicate**  
- Profile the pruning threshold to balance recall and speed.  
- Use multi‑stage ANN (IVF + PQ) for dense search.  
- Present results in a dashboard: λ distribution, latency curves, A/B test gains.  

This structured plan balances expressiveness and efficiency while staying within FAANG’s emphasis on data‑driven tuning and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
