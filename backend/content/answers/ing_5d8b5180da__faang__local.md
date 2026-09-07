---
qid: ing_5d8b5180da__faang__local
question: 'Explain: The Problem — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 481
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:21:24-05:00'
sources: []
---

**Problem – Fraud Detection**

1. **Clarify**  
   We need a system that flags potentially fraudulent transactions in real time, balancing high recall (catch most frauds) with low false‑positive rates so legitimate users aren’t inconvenienced.  
   *Assumptions to confirm:*  
   - Data: structured logs (user ID, amount, location, device), historical labels, and streaming capability.  
   - Latency requirement (< 50 ms per transaction).  
   - Privacy constraints on user data.

2. **Approach**  
   1. **Feature Engineering** – derive temporal patterns, velocity metrics, device anomalies.  
   2. **Modeling** – ensemble of a lightweight online learner (e.g., CatBoost) for speed + an offline deep model (GRU over recent history) for richer context.  
   3. **Scoring Pipeline** – use a threshold tuned on ROC‑AUC, with adaptive calibration per user segment.  
   4. **Feedback Loop** – incorporate manual review outcomes to retrain weekly.

3. **Depth**  
   - Online learner: O(1) inference, < 5 ms latency, memory‑efficient.  
   - Offline deep model: batch‑process nightly, weights cached for fast lookup; contributes 20–30 % of score.  
   - Overall system complexity: inference O(n_features), training O(N log N).  
   Trade‑off: heavier models improve AUC but increase latency; we keep them separate to meet SLAs.

4. **Edge Cases**  
   - New device/first‑time login → high uncertainty, fallback to stricter threshold.  
   - Seasonality spikes (holidays) → adjust baseline rates.  
   - Adversarial evasion: monitor feature drift and retrain more frequently.

5. **Optimize & Communicate**  
   • Deploy A/B tests comparing single vs. ensemble scores; measure lift in true positives.  
   • Use explainable AI (SHAP) to surface top contributing features for ops review.  
   • Narrate progress by showing incremental ROC improvement, latency impact, and cost per false positive—aligning with business KPIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
