---
qid: ing_162c652b67__faang__local
question: 'Explain: Customers who viewed this item also viewed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 437
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:35:00-05:00'
sources: []
---

**Clarify**  
The question asks for a recommendation strategy that surfaces items frequently purchased together with a given product—“customers who viewed *this* item also viewed.” We assume: (1) we have clickstream or purchase logs; (2) the goal is real‑time or near‑real‑time suggestions; (3) data privacy constraints allow aggregation but not individual profiling.

**Approach**  
1. Build a co‑view matrix from session logs.  
2. Apply an association rule algorithm (e.g., FP‑Growth) to extract frequent itemsets and compute *lift* scores.  
3. For each product, store the top N associated items sorted by lift.  
4. Serve recommendations via a lookup service; optionally re‑rank with popularity or recency.

**Depth**  
- **Data prep:** Aggregate sessions → (user_id, timestamp, item_id).  
- **Algorithm:** FP‑Growth runs in O(N log N) time on the transaction set and yields all pairs above a support threshold.  
- **Metric:** Lift = P(A∧B)/(P(A)·P(B)); high lift means strong association beyond chance.  
- **Storage:** Key‑value store mapping item → list of (item, lift).  
- **Serving latency:** <10 ms lookup; can cache hot pairs.

**Edge Cases**  
- New items with no history → fallback to popularity or collaborative filtering.  
- Sparse data in niche categories → raise support threshold to avoid noise.  
- Rapid trend shifts → periodic retraining (e.g., every 24 h).

**Optimize & Communicate**  
To scale, shard the co‑view matrix by item prefix and use MapReduce for FP‑Growth. For latency, precompute top‑K per item. I’d explain this pipeline in a diagram, justify lift over simple co‑occurrence, and highlight how we balance accuracy with real‑time constraints—showing structured reasoning that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
