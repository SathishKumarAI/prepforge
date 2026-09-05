---
qid: ing_ebd2ab7fa2__star__local
question: 'Explain: Start building in the console — What is Overfitting? - Overfitting
  in Machine Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 362
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:30-05:00'
sources: []
---

**Situation**  
During a data‑science sprint at my last company, we were building a predictive model to flag fraudulent transactions for an online payment platform. The dataset had 1.2 million records but only 0.5% fraud, so the class imbalance was severe.

**Task**  
I needed to deliver a model that maintained high precision (≥ 95%) while keeping false‑positive rates below 3%, all within a two‑week deadline for the quarterly compliance audit.

**Action**  
First, I split the data into training, validation, and hold‑out sets using stratified K‑folds. While experimenting with a Gradient Boosting Machine in Amazon SageMaker, I observed that the training AUC jumped to 0.99 but validation stayed at 0.72—classic overfitting signs. To counter this, I applied several techniques: reduced tree depth from 10 to 5, added L2 regularization (lambda = 1), and used early stopping after 50 rounds. I also engineered new features like transaction velocity and merchant similarity scores, then retrained the model. Finally, I performed a SHAP analysis to ensure feature importance was consistent across folds.

**Result**  
The final model achieved an AUC of 0.91 on the hold‑out set, precision = 96%, and false‑positive rate = 2.7%. The project was delivered on time, and our fraud detection accuracy improved by 12% compared to last quarter. I learned that monitoring training vs validation metrics early and applying regularization are key to preventing overfitting in real‑world ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
