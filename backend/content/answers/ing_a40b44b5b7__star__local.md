---
qid: ing_a40b44b5b7__star__local
question: 'Explain: METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 372
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:35-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with improving a churn‑prediction model for a telecom client whose quarterly churn rate had risen to 12% from the target of 8%. The existing model’s performance was evaluated only by accuracy, which hid poor calibration on high‑risk customers.

**Task:**  
I needed to adopt a more informative metric that would help us fine‑tune probability thresholds and prioritize retention spend. I chose Mean Squared Error (MSE) as the primary evaluation criterion for the logistic regression model, aiming to reduce it by at least 15% over the baseline.

**Action:**  
I first re‑engineered the pipeline in Python using scikit‑learn: split data into train/validation sets, applied SMOTE to balance churn classes, and tuned hyperparameters with GridSearchCV. I calculated MSE on probability outputs (not class labels) to capture calibration quality. Then I experimented with Platt scaling and isotonic regression, observing that isotonic reduced MSE from 0.112 to 0.076. Finally, I set a new threshold at the point where the ROC curve’s slope matched the cost‑benefit ratio, ensuring we targeted high‑risk churners.

**Result:**  
The revised model lowered MSE by 32%, improved precision for top‑10% risk customers from 0.65 to 0.81, and cut the client’s retention budget waste by ~18%. I learned that selecting the right metric—here MSE on predicted probabilities—can directly drive business value and guide technical decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
