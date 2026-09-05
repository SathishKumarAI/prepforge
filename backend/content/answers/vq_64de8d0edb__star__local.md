---
qid: vq_64de8d0edb__star__local
question: How will you balance/correct data that is unbalanced?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 338
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:51-05:00'
sources: []
---

**Situation**  
In my last role I was leading a fraud‑detection model for an online payments platform. The training set contained only 0.8 % fraudulent transactions, so the raw accuracy hovered at 99 %—perfect on paper but terrible in practice.

**Task**  
I needed to build a classifier that could reliably flag fraud without flooding the review queue with false positives, aiming for >90 % recall while keeping precision above 70 %.

**Action**  
First I explored resampling: undersampled the majority class by random deletion and oversampled fraud cases using SMOTE, then trained an XGBoost ensemble. Next, I switched to a cost‑sensitive learning approach—assigning a higher penalty for misclassifying fraud—to tune the decision threshold. I also implemented a two‑stage pipeline: a lightweight rule‑based filter (feature engineering on transaction amount and velocity) followed by the boosted model, reducing the false positive rate from 5 % to 2.3 %. Finally, I set up an automated monitoring dashboard that tracks class distribution drift and retrains weekly.

**Result**  
The balanced model achieved 92 % recall and 72 % precision, cutting the fraud review backlog by 35 % while increasing detected fraudulent revenue by $1.2M in Q3. I learned that combining resampling with cost‑sensitive learning often yields more robust performance than either technique alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
