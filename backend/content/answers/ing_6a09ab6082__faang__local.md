---
qid: ing_6a09ab6082__faang__local
question: Design the output representation for a behaviour prediction model. What
  metrics would you gate it on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 431
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:33-05:00'
sources: []
---

**Clarify**  
We’re building a *behaviour‑prediction* model (e.g., click, purchase, churn). The question asks: *“Design the output representation and what metrics would you use to evaluate it?”*  
Assumptions I’d confirm:  
- Prediction horizon (instant vs. 30‑day).  
- Output granularity (binary flag per user or probabilistic score).  
- Deployment context (real‑time API vs batch scoring).  

**Approach**  
1. Pick a **probabilistic output** (`p ∈ [0,1]`) – most downstream systems need calibrated risk scores.  
2. Map probabilities to **decision thresholds** for business actions (e.g., discount offers).  
3. Store *raw probability* plus *derived categorical flag* in the same record for flexibility.  

**Depth**  
- **Output schema**: `{user_id, timestamp, event_score, event_flag}` where `event_flag = 1 if score ≥ τ`.  
- Use a **calibration layer** (Platt scaling or isotonic regression) to ensure `p` matches empirical likelihood.  
- For multi‑class behaviours, use *one‑vs‑rest* logits and softmax probabilities.  

**Edge Cases**  
- Imbalanced classes → check for score compression.  
- Concept drift → re‑calibrate periodically.  
- Missing features → fallback defaults (e.g., mean probability).  

**Optimize & Communicate**  
- **Metrics**:  
  - *AUC‑ROC* (ranking quality),  
  - *Log‑Loss / Brier Score* (probability calibration),  
  - *Precision@k / Recall@k* for top‑N targeting.  
- Highlight trade‑offs: higher AUC may hurt calibration; choose the metric that aligns with business ROI.  
- Communicate results via dashboards showing both ranking and calibration curves, ensuring stakeholders see how thresholds impact conversion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
