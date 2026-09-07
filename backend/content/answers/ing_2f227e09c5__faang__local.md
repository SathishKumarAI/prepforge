---
qid: ing_2f227e09c5__faang__local
question: 'Explain: Pattern 4: Multi-Vector Query — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 497
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:10-05:00'
sources: []
---

**Pattern 4 – Multi‑Vector Query (Vector Databases)**  
*In a FAANG interview you’d explain the concept, why it matters, and how you’d build/optimize it.*

---

### 1️⃣ Clarify  
> *Restate*: “We want to retrieve items that are similar to **multiple** query vectors at once—e.g., find products matching both ‘cute’ **and** ‘budget’ embeddings.”  
> *Assumptions*: same‑dimensionality, cosine/inner‑product similarity, dataset size > 1M.

### 2️⃣ Approach  
1. **Indexing**: build an IVF or HNSW index per dimension.  
2. **Query Fusion**: either (a) **AND** – intersect candidate sets from each vector; (b) **weighted sum** – combine distances linearly.  
3. **Candidate Reduction**: use product quantization to prune to top‑k before final ranking.

### 3️⃣ Depth  
*Algorithm*: for each query vector `q_i`, retrieve its top‑N neighbors → set `S_i`. Compute intersection `∩ S_i` or weighted score `score = Σ w_i * sim(q_i, x)`. Complexity: `O(k·log M)` per vector; overall near-linear in number of vectors.  
*Trade‑offs*: larger N gives recall but more work; weighting allows soft “AND” semantics.

### 4️⃣ Edge Cases  
- **Sparse queries** (few neighbors): fallback to brute‑force.  
- **High dimensionality**: product quantization degrades, consider ANN in lower‑dim space.  
- **Dynamic updates**: re‑insert vectors may invalidate IVF partitions → use incremental HNSW.

### 5️⃣ Optimize & Communicate  
- Use *batching* of query vectors to amortize index lookups.  
- Cache popular multi‑vector queries with LRU policy.  
- Explain that this pattern is essential for recommendation engines where a user’s intent spans multiple attributes (style, price, brand).  

**Result**: Efficiently retrieves highly relevant items while balancing recall and latency—exactly what FAANG teams look for in large‑scale AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
