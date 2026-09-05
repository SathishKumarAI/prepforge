---
qid: ing_0a4e4c7046__star__local
question: 'Explain: What''s included — Supervised Machine Learning: Regression and
  Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 396
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:28-05:00'
sources: []
---

**Situation:**  
During my final semester at university I was part of a capstone team tasked with predicting student dropout rates for an online learning platform. The client needed a model that could not only estimate the probability of dropping out (classification) but also predict how many weeks a student would stay active before leaving (regression).  

**Task:**  
I had to design and implement a supervised machine learning pipeline that delivered both a binary classifier and a regression model, evaluate their performance with appropriate metrics, and present actionable insights to the platform’s product manager.  

**Action:**  
First, I cleaned the dataset, engineered features such as average weekly engagement time and interaction frequency, and split it into training/validation/test sets. For classification I trained a logistic regression model, tuned its regularization via cross‑validation, and evaluated it with ROC‑AUC and F1‑score. For regression I built a random forest regressor, using mean absolute error (MAE) as the loss function. I compared both models to baseline naïve predictors, performed feature importance analysis, and created SHAP visualizations to explain predictions. Finally, I packaged the code into a reproducible Jupyter notebook and automated the pipeline with scikit‑learn’s Pipeline API.  

**Result:**  
The classifier achieved an AUC of 0.87 and an F1 of 0.78, while the regressor recorded an MAE of just 3.2 weeks on the test set—an improvement of 30% over baseline. The client used these insights to implement targeted interventions for at‑risk students, reducing dropout by 12% in the following quarter. I learned how to balance model complexity with interpretability and how supervised learning can simultaneously address classification and regression tasks within a single project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
