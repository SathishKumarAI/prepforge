---
qid: ing_adb52671ba__star__local
question: 'Explain: We only have two features, age, and — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 279
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:28-05:00'
sources: []
---

**Situation:**  
During a hackathon last year I was tasked with building a churn prediction model for a telecom client who only provided the raw dataset with two columns: customer age and whether they had used the mobile data plan in the last month.

**Task:**  
I needed to create an accurate binary classifier that could flag high‑risk customers while keeping the model lightweight enough to run on the client’s edge device.

**Action:**  
First, I engineered a few interaction terms (age × plan usage) and binned age into decades. Using scikit‑learn, I trained a logistic regression with L1 regularization to keep only the most informative features. To evaluate robustness, I performed 5‑fold cross‑validation and tuned C via grid search. I also plotted ROC curves to confirm that the chosen threshold maximized the F1 score.

**Result:**  
The final model achieved an AUC of 0.78 and correctly identified 84% of churners with a false positive rate under 12%. Deploying it reduced the client’s monthly churn by 3%, saving them roughly $150k annually. I learned that even with minimal features, thoughtful preprocessing and regularization can yield production‑ready ML solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
