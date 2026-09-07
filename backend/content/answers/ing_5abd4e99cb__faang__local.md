---
qid: ing_5abd4e99cb__faang__local
question: 'Explain: Your offline evals improved but the online metric dropped after
  launch. Walk me through the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 434
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:31-05:00'
sources: []
---

**Clarify**  
*Restate:* “After deploying a new recommendation model, our A/B test shows the offline precision@k went up by 3 %, yet the live engagement metric (e.g., click‑through rate) fell 2 %. What could explain this divergence?”  
*Assumptions to confirm:*  
- Offline data was sampled from production logs (same distribution).  
- Online metric is measured over the same user cohort and time window.  
- No concurrent changes in UI or traffic patterns.

**Approach**  
1. Verify data alignment (feature drift, timestamp sync).  
2. Inspect model behavior on edge cases (rare items, cold users).  
3. Check feedback loop: are online interactions altering feature distributions?  
4. Validate metric definitions and A/B test integrity.  

**Depth**  
- **Feature Drift:** Compare the distribution of key inputs (e.g., user age, recency) between offline training set and live traffic; use KS‑test or histograms.  
- **Model Calibration:** Compute probability calibration curves; a well‑trained model may over‑predict probabilities, causing too many low‑value recommendations.  
- **Cold‑Start & Diversity:** Evaluate per‑segment precision—cold users might see less relevant items, lowering CTR.  
- **Metric Leakage:** Ensure offline metric (precision@k) doesn’t correlate with click probability; if it does, the model may optimize for a proxy that hurts engagement.  

**Edge Cases**  
- Rare items causing “popularity bias.”  
- Users in new regions with unseen demographics.  
- Time‑of‑day shifts affecting user intent.

**Optimize & Communicate**  
Propose a multi‑objective loss (precision + CTR surrogate), retrain on a blended offline+online validation set, and run a staged rollout with continuous monitoring of both metrics. Explain that aligning the objective function with the true business metric is essential—this shows structured thinking, depth, and clear communication expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
