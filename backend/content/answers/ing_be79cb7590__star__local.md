---
qid: ing_be79cb7590__star__local
question: 'Explain: Concept drift vs. Target drift — What is concept drift in ML,
  and how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 357
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:59-05:00'
sources: []
---

**Situation**  
At my last job I was maintaining a churn prediction model for a telecom client whose monthly revenue had been steadily declining. The production scorecard, trained on data from the previous year, started showing a sharp drop in precision—false positives surged by 35% over two weeks.

**Task**  
I needed to determine whether the degradation was due to concept drift (the relationship between features and churn changed) or target drift (the definition of churn itself had shifted), and then correct it so that marketing could still target at-risk customers effectively.

**Action**  
First, I built a monitoring pipeline in Python using **scikit‑learn’s `model_evaluation`** to compare the distribution of key predictors over time. I applied a sliding‑window Kolmogorov–Smirnov test and a drift detection method (ADWIN) on the model’s probability outputs. The tests flagged a significant shift in the relationship between usage patterns and churn labels, confirming concept drift. To address it, I retrained the model weekly with a rolling 90‑day window, added a new feature capturing recent data plan changes, and implemented an online learning update using **LightGBM’s `update`** method to keep the model current.

**Result**  
After retraining, precision improved from 62% back to 78%, and the false positive rate fell by 40%. The system now auto‑alerts when drift exceeds a threshold, reducing manual reviews by 70%. I learned that proactive monitoring of feature distributions and incremental learning can keep models accurate in dynamic environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
