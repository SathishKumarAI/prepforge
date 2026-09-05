---
qid: ing_76e4529c83__star__local
question: What are different Model Evaluation Techniques in Machine Learning?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 353
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:43-05:00'
sources: []
---

**Situation** – In a recent e‑commerce project, our data science team was tasked with predicting customer churn for the upcoming quarter. The business needed a reliable metric because any false positives would mean unnecessary retention spend, while false negatives could cost us revenue.

**Task** – I had to compare several model evaluation techniques—cross‑validation, bootstrap, learning curves, and ROC/AUC—to determine which gave the most trustworthy performance estimate and guided feature selection.

**Action** – First, I implemented 5‑fold stratified cross‑validation on our baseline logistic regression and random forest models, capturing variance across folds. Next, I ran a 100‑bootstrap experiment to evaluate stability under different sample perturbations. I plotted learning curves for both models to diagnose bias–variance trade‑offs. Finally, I calculated ROC curves and AUC scores, then performed DeLong’s test to compare classifiers statistically. Throughout, I used scikit‑learn pipelines, joblib for parallelism, and matplotlib for visualizing the results.

**Result** – The random forest achieved an AUC of 0.84 versus 0.78 for logistic regression, with consistent cross‑validation scores (±0.02). Bootstrap analysis confirmed low variance (σ=0.015). Learning curves revealed that the forest was under‑fitting early; after adding a few more trees, performance plateaued. I presented these findings to stakeholders, leading to a 12% reduction in churn‑related costs over six months and solidifying our model evaluation framework for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
