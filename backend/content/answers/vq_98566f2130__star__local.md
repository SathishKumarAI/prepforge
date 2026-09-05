---
qid: vq_98566f2130__star__local
question: When to do re-sampling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 370
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:54-05:00'
sources: []
---

**Situation:**  
During a credit‑card fraud detection project for a fintech client, our training set was highly imbalanced—only 1.2% of transactions were fraudulent. The model’s recall dropped to 68%, missing too many real fraud cases.

**Task:**  
I needed to improve the model’s ability to detect fraud without blowing up false positives or overfitting, while staying within the client’s budget for manual review work.

**Action:**  
First, I plotted the ROC curve and precision‑recall trade‑off to confirm that a higher recall was critical. Then I experimented with two resampling strategies: 1) **Oversample** the minority class using SMOTE at a ratio of 3:1; 2) **Undersample** the majority class by randomly dropping 70% of legitimate transactions, preserving diversity with stratified sampling. I trained identical XGBoost pipelines on each dataset, tuned hyperparameters via Bayesian optimization, and evaluated both on an untouched hold‑out set. The SMOTE‑augmented model yielded a recall of 84% with only a 1.5% drop in precision, while the undersampled model suffered from high variance.

**Result:**  
We deployed the SMOTE approach, raising fraud detection recall from 68% to 84%, reducing missed fraudulent revenue by an estimated $2.3 M annually. The client reported fewer manual reviews thanks to a manageable precision‑recall balance. I learned that resampling should be guided by business impact metrics and validated on a separate hold‑out set to avoid overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
