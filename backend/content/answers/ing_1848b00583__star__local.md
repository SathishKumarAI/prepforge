---
qid: ing_1848b00583__star__local
question: Why does overfitting occur? — What is Overfitting? - Overfitting in Machine
  Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 388
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:21-05:00'
sources: []
---

**Situation:**  
I was tasked with predicting customer churn for a telecom client who had only 3,500 labeled records but a very high-dimensional dataset (over 200 features). The internal team expected an accuracy of at least 80 %, yet our initial experiments using a deep neural network were hitting 95 % on training data and only 68 % on the hold‑out set.

**Task:**  
My goal was to build a model that generalizes well, achieving ≥85 % test accuracy while staying explainable for stakeholders who needed insight into key churn drivers.

**Action:**  
I first performed exploratory analysis: identified highly correlated features and removed 30 redundant columns. Then I applied L1 regularization (lasso) and reduced the network depth to a single hidden layer with 32 neurons, using dropout at 0.2. To guard against overfitting I switched from a simple train/test split to k‑fold cross‑validation (k=5), monitored validation loss, and stopped training early when it began to rise. Finally, I used SHAP values to confirm that the model was focusing on meaningful features like “monthly bill” and “contract type.”

**Result:**  
The final model achieved 87 % accuracy on the test set, a 19‑percentage‑point lift over the initial baseline. The training loss stayed within 5 % of validation loss throughout, indicating good generalization. I learned that careful feature engineering, regularization, and robust validation are essential to prevent overfitting, especially with limited data and high dimensionality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
