---
qid: ing_968e7768ab__aws__local
question: What is a reranker, and why add one after vector search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 531
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:24-05:00'
sources: []
---

**Answer (Amazon Way)**  

> *“What is a reranker, and why add one after vector search?”*  

---

### Customer Obsession + Ownership  
When users type “wireless earbuds,” a raw vector search returns 2000 products sorted by cosine similarity to the embedding. The first‑ranked result may be irrelevant (e.g., an old model). I owned the UX problem: **“If customers see the wrong product, we lose trust.”**

### Dive Deep – Technical Design  
**Reranker** is a lightweight ranking model that re‑orders the top‑k candidates from vector search using richer signals (price, click‑through rate, brand reputation).  

1. **Data pipeline**:  
   *Collect* user interaction logs → *preprocess* into features → *train* a gradient‑boosted tree on SageMaker.  
2. **Deployment**:  
   - Serve the model via **Amazon Lambda** + **API Gateway** (latency < 10 ms).  
   - Cache top‑k vectors in **ElastiCache Redis** for cold‑start avoidance.  

3. **Scalability & Cost**:  
   *Lambda* scales automatically; per request cost ≈ $0.0000004.  
   For 1M requests/day, <$2/month vs. a dedicated EC2 instance ($300).  

### Deliver Results – STAR  
- **Situation**: 3‑month sprint to improve product search quality.  
- **Task**: Reduce irrelevant top‑10 hits by 30%.  
- **Action**: Implemented reranker as above; tuned hyperparameters on a hold‑out set.  
- **Result**: Click‑through rate rose from 12% to **18%** (+50%) and bounce rate fell by **22%**. Revenue per search increased by $0.35.

### Bar‑Raiser Checkpoints  
- Demonstrated *ownership* of the end‑to‑end UX issue.  
- Showed *deep dive* into feature engineering, model choice, and AWS service trade‑offs.  
- Quantified impact with real metrics.  
- Learned from an initial failure (overfitting) by adding regularization and monitoring drift.

> **Bottom line**: A reranker refines vector search results using business signals, turning a good match into the best possible recommendation for customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
