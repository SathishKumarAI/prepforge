---
qid: ing_6a9c529c5e__faang__local
question: 'Explain: Reciprocal Rank Fusion (RRF) for Combining Results'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 563
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:00-05:00'
sources: []
---

**Reciprocal Rank Fusion (RRF)**  
*Goal*: Combine several ranked retrieval lists into a single, higher‑quality ranking without learning from data.

---

### 1️⃣ Clarify  
You have *N* rankers (e.g., BM25, BERT, TF‑IDF) producing ordered lists of documents for the same query. Each list assigns a rank `r_i(d)` to document *d*. We want a unified score that prefers items appearing early in any list.

**Assumptions to confirm**
- All rankers return unique ranks (no ties).  
- Rank ranges are comparable (e.g., all start at 1).  
- A cutoff `k` is acceptable for the fusion (documents beyond *k* contribute negligibly).

---

### 2️⃣ Approach  
For each document, compute a **fusion score** as the sum of reciprocals of its ranks across rankers. The final list is sorted by this score descending.

Algorithm sketch:

```
for each query:
    scores = {}
    for each ranker i:
        for rank r, doc d in top k_i:
            scores[d] += 1 / (r + λ)   # λ small constant to avoid division by zero
    output docs sorted by scores
```

Typical λ = 60.

---

### 3️⃣ Depth  
- **Score formula**: `score(d) = Σ_i 1/(rank_i(d)+λ)`  
- **Complexity**: O(N·k + M log M), where *M* is the number of unique documents across top‑k lists.  
- **Trade‑offs**:  
  - Simple, no training needed.  
  - Sensitive to ranker quality; a very poor ranker can still influence results unless λ or cutoff mitigates it.

---

### 4️⃣ Edge Cases  
- Document absent in a list → treat as rank = ∞ (score contribution ≈ 0).  
- Ties in ranks → arbitrarily break ties or average reciprocal values.  
- Very small λ → huge score swings; test stability by varying λ.

---

### 5️⃣ Optimize & Communicate  
- **Parameter tuning**: Validate λ and k on a held‑out validation set to balance precision vs recall.  
- **Caching**: Precompute reciprocal weights for common ranks.  
- **Explainability**: RRF is transparent—each ranker’s influence is additive, making debugging easier.

*Result*: A lightweight ensemble that often outperforms any single ranker while keeping latency low—exactly the kind of pragmatic solution FAANG teams love.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
