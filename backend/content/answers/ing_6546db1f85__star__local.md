---
qid: ing_6546db1f85__star__local
question: Your ads CTR model shows a 2% offline AUC gain, but the online A/B shows
  revenue-neutral results with worse calibration. What's going on and what do you
  do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 358
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:12-05:00'
sources: []
---

**Situation:**  
I was leading the ad‑relevance team for a large e‑commerce platform. Our new CTR model had scored a 2 % AUC improvement in offline validation on historical click logs, so we pushed it to production. Within two weeks of the online A/B test, we saw no lift in revenue and the predicted probabilities were poorly calibrated—over‑predicting clicks for high‑bid campaigns.

**Task:**  
I needed to diagnose why the offline metric wasn’t translating to business value and restore reliable calibration while preserving any predictive gains.

**Action:**  
1. I compared feature distributions between training, validation, and live traffic using KS tests; a drift in user‑device mix was evident.  
2. I re‑trained the model with domain‑adaptation: added a “traffic‑source” indicator and applied a weighted loss that penalized mis‑calibration on high‑bid slots.  
3. Implemented Platt scaling per campaign segment, then used an online calibration monitor (ECE) to trigger retraining when error exceeded 0.02.  
4. Finally, I ran a multi‑armed bandit rollout to blend the old and new models for 30 % of impressions, gradually increasing the share as ECE improved.

**Result:**  
Calibration dropped from 0.15 to 0.04 ECE, revenue increased by 1.8 % over baseline, and the model’s AUC stayed within 0.5 % of offline gains. I learned that distribution drift and calibration are critical when moving from offline metrics to live monetized traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
