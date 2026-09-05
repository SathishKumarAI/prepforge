---
qid: ing_b3ad8cf585__star__local
question: 'Explain: Sign up for a free account — What is Overfitting? - Overfitting
  in Machine Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 308
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:15-05:00'
sources: []
---

**Situation:**  
In my last role I was building a churn prediction model for a telecom client. The training data had 120 features and only 2,500 labeled customers, but the initial accuracy on the training set was 98 %.  

**Task:**  
I needed to create a robust model that would generalize well to new customers while still exceeding the client’s target of 85 % predictive accuracy.

**Action:**  
First I plotted learning curves and saw a huge gap between train and validation performance, so I suspected overfitting. I reduced dimensionality with PCA (keeping 95 % variance), dropped highly correlated features, and applied L1 regularization in a logistic regression pipeline. Then I switched to a gradient‑boosted tree model with early stopping on the validation set. I also increased cross‑validation folds from 5 to 10 and used SMOTE to balance classes.

**Result:**  
The final model achieved 87 % accuracy and an AUC of 0.92 on a held‑out test set, up from 78 % before corrections. The client reported a 12 % reduction in churn within three months. I learned that overfitting is when a model memorizes noise; the key to prevention is regularization, feature selection, and proper validation practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
