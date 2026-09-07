---
qid: ing_6546db1f85__faang__local
question: Your ads CTR model shows a 2% offline AUC gain, but the online A/B shows
  revenue-neutral results with worse calibration. What's going on and what do you
  do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 444
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:39:49-05:00'
sources: []
---

**Clarify**  
You built an offline CTR model that improved AUC by 2 %. In production, the A/B test shows no revenue lift and worse calibration (predicted probabilities diverge from observed click rates). Likely causes: distribution shift between training and live traffic, feature drift, target mismatch (AUC ≠ revenue), or mis‑calibration of probability outputs.  

**Approach**  
1. Verify data alignment (feature distributions, user segments).  
2. Inspect calibration curves pre‑/post‑deployment.  
3. Re‑evaluate the objective: AUC maximization may not translate to revenue; consider a weighted loss that penalizes high‑value clicks.  
4. If drift is present, set up an online learning pipeline (e.g., periodic retraining with recent logs).  

**Depth**  
- **Calibration check:** Plot predicted vs. actual CTR per bin; compute Brier score and ECE.  
- **Revenue mapping:** Estimate expected revenue per click (E[rev|click]) and recompute a revenue‑weighted AUC or use a logistic loss that incorporates revenue as a weight.  
- **Model drift test:** KS‑test on feature distributions, monitor mean CTR over time.  
- **Retraining strategy:** Use a sliding window of the last 7–14 days, re‑train weekly; employ online calibration (Platt scaling or isotonic regression) post‑deployment.  

**Edge Cases**  
- Sudden traffic spikes or new ad formats can break assumptions.  
- If revenue per click varies by campaign, a single global model may underperform. Test on stratified sub‑populations.  

**Optimize & Communicate**  
Explain that AUC improvement alone is insufficient when the business metric is revenue; we need to align the loss with revenue and maintain calibration through continual monitoring. Present a plan: immediate calibration correction (e.g., Platt scaling), then shift to a revenue‑aware training objective, coupled with an online retraining loop. This demonstrates structured problem solving, clear communication, and depth in technical reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
