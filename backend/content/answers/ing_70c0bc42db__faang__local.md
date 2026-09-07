---
qid: ing_70c0bc42db__faang__local
question: 'Explain: Design the recommendation system for Instagram Reels.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 534
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:05:55-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re building a *Reel‑level* recommender that surfaces short videos to users as they scroll.  
Key assumptions:  

- **Cold‑start:** new creators & content exist; we need content‑based signals initially.  
- **Scale:** 10⁹+ active users, 10¹² interactions per day.  
- **Latency:** ≤ 200 ms per Reel load (client‑side).  
- **Privacy:** no PII leakage; model must respect user data policies.

**2️⃣ Approach**  

1. **Feature engineering** – embed video metadata (tags, captions, audio fingerprint), creator profile stats, and short‑term interaction windows.  
2. **Hybrid ranking pipeline** –  
   *a.* *Content filter* (e.g., Transformer encoder) to compute similarity between candidate Reels and user’s recent watch history.  
   *b.* *Collaborative layer* using implicit matrix factorization or graph neural nets over the interaction graph.  
3. **Real‑time scoring** – pre‑compute per‑user “interest vectors” offline; during serve, combine with content scores via weighted sum (A/B test weights).  
4. **Feedback loop** – online learning updates embeddings every 5 min to capture trending topics.

**3️⃣ Depth**  

- *Complexity*: Offline training ≈ O(N·logN) for clustering + O(M·d²) for factorization; online inference O(d) per Reel.  
- *Trade‑offs*: Full graph GNN gives higher accuracy but heavier latency; a lightweight MLP keeps 200 ms budget.  
- *Cold‑start*: Use content embeddings exclusively until interaction data accrues.

**4️⃣ Edge Cases**  

- New creators with zero interactions → fallback to popularity + content similarity.  
- Rapid trend spikes → ensure online retraining frequency is enough.  
- Spam or copyrighted content → filter via automated flagging before recommendation.

**5️⃣ Optimize & Communicate**  

- **Batch inference** on GPU clusters; cache top‑k per user per session.  
- **Explainability**: surface “Because you liked X” to boost trust.  
- **Monitoring**: A/B test CTR, watch time, and churn impact continuously.  

By blending content, collaborative signals, and real‑time learning while respecting latency & privacy constraints, we can deliver a scalable, personalized Reel recommendation engine suitable for Instagram’s massive user base.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
