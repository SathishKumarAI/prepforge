---
qid: ing_2178b2ec25__star__local
question: 'Explain: Learner reviews — Supervised Machine Learning: Regression and
  Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 376
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:36:32-05:00'
sources: []
---

**Situation** – At the beginning of my data‑science bootcamp I was stuck on a Kaggle competition that required predicting house prices and classifying rental listings into “short‑term” vs “long‑term.” My team’s models were overfitting, and we weren’t meeting our 10 % RMSE target.

**Task** – I needed to deepen my grasp of supervised learning fundamentals—especially how regression and classification differ in loss functions, evaluation metrics, and model selection—so that we could rebuild the pipeline from scratch and hit the competition deadline.

**Action** – I enrolled in Coursera’s “Supervised Machine Learning: Regression and Classification” course. While watching the lectures, I immediately applied each concept to our codebase:  
- Implemented mean‑squared error vs. cross‑entropy loss with scikit‑learn pipelines.  
- Used regularization (Lasso/Ridge) for regression and class‑weighting for imbalanced classification.  
- Built a validation loop that swapped metrics (RMSE, MAE, F1) to see their impact on hyperparameters.  
I also wrote unit tests to verify that each model’s output matched the theoretical loss curve from the course.

**Result** – Within 48 hours I refactored our models; RMSE dropped from 12.4% to 8.9%, and classification F1 rose from 0.65 to 0.78, landing us in the top 15 % of competitors. I learned that mastering the theory behind loss functions directly translates into tangible performance gains and that continuous metric monitoring is essential for any supervised learning project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
