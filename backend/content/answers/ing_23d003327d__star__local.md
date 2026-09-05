---
qid: ing_23d003327d__star__local
question: Walk me through train/validation/test splits. When do you use cross-validation,
  and when is it a bad idea?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 413
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:37-05:00'
sources: []
---

**Situation:**  
While leading a fraud‑detection project for a fintech client, we had 1.2 million labeled transactions. The model needed to generalize across time‑shifting patterns and we were under pressure to deliver a production‑ready scorecard within two months.

**Task:**  
I had to design the data‑splitting strategy that would give us an honest estimate of real‑world performance, avoid leakage, and still allow rapid iteration on feature engineering.

**Action:**  
First, I created a time‑based holdout: the last 30 days formed the test set; the preceding 60 days were split into training (80 %) and validation (20 %). This respected the temporal order. For hyper‑parameter tuning I used 5‑fold stratified cross‑validation on the training portion, ensuring each fold preserved the fraud ratio (~0.8 %). I leveraged scikit‑learn’s `TimeSeriesSplit` for future experiments to guard against look‑ahead bias. When we later needed to evaluate a new feature set with only 150 k samples, I switched to leave‑one‑out cross‑validation because the test set would have been too small to be reliable.

**Result:**  
The final model achieved an AUC of 0.94 on the held‑out test set, outperforming baseline by 6 %. The split strategy reduced overfitting risk by 18 % compared to naive random splits, and we rolled out the solution three weeks ahead of schedule. I learned that cross‑validation is powerful when data are independent, but for time‑series or very small datasets a simple train/val/test split often yields more trustworthy estimates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
