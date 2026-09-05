---
qid: ing_2a90c72fa2__star__local
question: 'Explain: 1.11.1.1. Histogram-Based Gradient Boosting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 347
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:12-05:00'
sources: []
---

**Situation** – At my last role I was tasked with predicting churn for a telecom client whose data set had over 3 million rows and dozens of categorical features, many of which were high‑cardinality (e.g., device type, region). Traditional tree ensembles were too slow to train on our limited GPU budget.

**Task** – Build a model that achieved at least 5 % improvement in AUC over the baseline logistic regression while training within two hours on a single workstation.

**Action** – I chose Histogram‑Based Gradient Boosting (HGB) from scikit‑learn. First, I performed target‑mean encoding for categorical columns to reduce dimensionality. Then I used `HistGradientBoostingClassifier` with `max_bins=255`, `learning_rate=0.1`, and `max_iter=200`. The algorithm binned continuous features into histograms, allowing the decision trees to split on bin edges instead of raw values; this cut memory usage by ~70 % and training time from 8 hrs to 1.5 hrs. I also applied early stopping with a validation set and used class‑weighting to handle churn imbalance.

**Result** – The model reached an AUC of 0.82 versus the baseline’s 0.77, a 6 % relative lift, and produced feature importances that matched domain expectations (e.g., monthly bill tier, contract type). I learned that careful binning can dramatically speed up GBM training without sacrificing accuracy, making it ideal for large‑scale tabular data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
