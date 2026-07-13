---
qid: q044
question: "How do you handle an imbalanced classification dataset?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd start with the metric, because that's where most people go wrong — **Dive Deep** and **Customer Obsession**. First, stop trusting accuracy: a 99% majority class makes a useless model look great. I optimize and report precision, recall, F1, and PR-AUC. Then I attack the imbalance with a layered toolkit: class weights / cost-sensitive loss (my first choice — no data distortion), resampling (SMOTE or careful oversampling of the minority, undersampling the majority), and threshold tuning on the probability output to hit the recall the business needs.

I'd stress a discipline that shows **Insist on the Highest Standards**: resample *inside* the cross-validation fold, never before splitting, or you leak synthetic minority points into validation and fool yourself.

I'd ground it: "On fraud at ~0.5% positives, class weights plus threshold tuning raised recall from 61% to 89% while keeping the review queue within ops capacity — measured on a temporal holdout, not the resampled data." That's **Deliver Results** under a real constraint.

On AWS, SageMaker XGBoost exposes `scale_pos_weight`, and I'd monitor the minority-class recall in production via CloudWatch since drift hits rare classes first.

A bar-raiser listens for whether I fix the *metric* and avoid resampling leakage, not just say "SMOTE."
