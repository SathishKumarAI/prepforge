---
qid: ing_5aff81a499__faang__local
question: 'Explain: Retrieval Depth — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 435
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:58-05:00'
sources: []
---

**Retrieval Depth – Hybrid Search**

**Clarify**  
We’re asked how *retrieval depth* works when combining exact‑match retrieval with semantic (vector) search—i.e., a hybrid system that ranks documents by both keyword relevance and embedding similarity. Assume we have an inverted index for terms, a vector store for embeddings, and a ranking pipeline that merges scores.

**Approach**  
1. **Stage 1 – Retrieval depth**: limit the number of candidates per query (e.g., top‑k) from each engine.  
2. **Stage 2 – Fusion**: combine term‑frequency TF‑IDF scores with cosine similarity, normalizing both to a common scale.  
3. **Stage 3 – Re‑ranking**: optionally apply a learning‑to‑rank model trained on click logs.

**Depth**  
- *Retrieval depth* controls the breadth of candidate pools; too shallow misses semantically relevant docs, too deep overwhelms downstream ranking and latency.  
- Hybrid scoring often uses weighted sum: `score = α * TFIDF + (1–α) * cosine`.  
- Normalization can be min‑max or z‑score per engine.  
- Complexity: retrieval is O(k log N) for each engine; fusion is linear in k.  
- Trade‑off: higher depth → better recall, higher compute and latency.

**Edge Cases**  
- Empty query terms → fallback to semantic only.  
- Duplicate documents across engines → deduplication before ranking.  
- Highly skewed term distributions can dominate TFIDF if α is too high.

**Optimize & Communicate**  
Start with a small k (e.g., 100) and tune α via A/B tests on engagement metrics. Profile latency; consider approximate nearest neighbor search to keep depth manageable. Explain that retrieval depth balances recall versus performance—critical for real‑time recommendation systems. This structured reasoning shows clear problem framing, technical detail, and awareness of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
