---
qid: ing_2cce76ab7a__faang__local
question: 'Explain: The Interview Question — Recommendation Engine'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 477
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:27:16-05:00'
sources: []
---

**Clarify**  
We’re asked to design a recommendation engine—essentially “what should I show this user next?”  Confirm assumptions:  
- Data sources (user profiles, item catalog, interaction logs).  
- Scale (millions of users/items, real‑time vs batch).  
- Evaluation metric (click‑through or conversion).  

**Approach**  
1. **Model selection** – collaborative filtering (CF) vs content‑based vs hybrid.  
2. **Feature engineering** – user embeddings, item metadata, context (time, device).  
3. **Training pipeline** – batch offline training for global models; online A/B or incremental updates for personalization.  
4. **Serving layer** – low‑latency cache + fallback to compute on request.  

**Depth**  
- *Collaborative Filtering*: use matrix factorization (SVD) or implicit ALS for sparse click data → latent vectors \(U_i, V_j\). Score = \(U_i \cdot V_j\). Complexity: \(O(k(n+m))\) per epoch; inference \(O(k)\).  
- *Content‑Based*: TF‑IDF/embedding of item text + user profile matching.  
- *Hybrid*: blend CF scores with content similarity (weighted sum or gating network).  
- *Cold start*: bootstrap new users with demographic clustering; bootstrap items via metadata.  
- *Evaluation*: offline RMSE, online lift on CTR.  

**Edge Cases**  
- New users/items → fallback to popularity or content.  
- Sparse interactions → regularization or Bayesian priors.  
- Real‑time churn → stale embeddings; handle with periodic re‑training or streaming updates.  

**Optimize & Communicate**  
- Use approximate nearest neighbor (FAISS) for top‑k retrieval, reducing latency from \(O(n)\) to \(O(\log n)\).  
- Compress embeddings (quantization) to fit in cache.  
- Explain trade‑offs: higher accuracy with CF vs lower latency with content.  
- Narrate reasoning: “We first ask what data we have and how fast the system must respond; that guides whether we can afford heavy matrix ops or need a lightweight nearest‑neighbor search.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
