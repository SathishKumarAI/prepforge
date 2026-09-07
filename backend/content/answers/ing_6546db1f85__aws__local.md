---
qid: ing_6546db1f85__aws__local
question: Your ads CTR model shows a 2% offline AUC gain, but the online A/B shows
  revenue-neutral results with worse calibration. What's going on and what do you
  do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 470
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:55-05:00'
sources: []
---

**Situation** – In my last role I built a CTR model that achieved a *2 %* lift in offline AUC, yet when we launched an online A/B test the revenue impact was neutral and the predicted click‑through rates were poorly calibrated (predicted 0.35 but observed 0.20).  

**Task** – Diagnose why the offline signal didn’t translate to real‑world gains and redesign the pipeline so that model performance aligns with business metrics.

**Action**  
1. **Dive Deep into Data Drift** – Logged feature distributions in Amazon SageMaker Feature Store; discovered a 15 % shift in user device type and a new ad format that the offline data didn’t contain.  
2. **Re‑train on Fresh, Representative Data** – Added recent click logs (last 30 days) and engineered a “format‑specific” feature. Trained with SageMaker Pipelines, using hyperparameter tuning to target *calibration error* (ECE) rather than AUC alone.  
3. **Deploy Online Calibration Layer** – Wrapped the model in an AWS Lambda that applies Platt scaling; monitored ECE via Amazon CloudWatch metrics.  
4. **Iterate Rapidly** – Ran a 48‑hour rolling A/B with 10 % traffic, achieving *+12 %* revenue lift and reducing calibration error from 0.12 to 0.04.

**Result** – The new pipeline cut cost per click by 8 %, increased monthly ad revenue by $1.2M, and reduced model drift incidents by 90 %.  

**Leadership Principles** – *Customer Obsession* (focus on real revenue impact), *Ownership* (own end‑to‑end pipeline), *Dive Deep* (identify feature drift), *Bias for Action* (quick re‑training & A/B).  

Bar‑raiser listens for evidence of ownership, deep technical insight, quantified business impact, and lessons learned from the calibration failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
