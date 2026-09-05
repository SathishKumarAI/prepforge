---
qid: ing_0c7d618f04__fp__local
question: 'Explain: 1.11.1.1.1. Usage — 1.11. Ensembles: Gradient boosting, random
  forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 498
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:32:22-05:00'
sources: []
---

**Why ensembles?**  
In supervised learning we want a hypothesis \(h\) that minimizes expected loss
\(R(h)=\mathbb{E}_{(x,y)}[\ell(h(x),y)]\).  A single model is often biased (too simple) or high‑variance (overfits).  By combining many weak learners we can reduce variance while preserving low bias—an instance of the **bias–variance trade‑off** and an application of *law of large numbers* to predictions.

### Core ensemble techniques in scikit‑learn

| Method | Mechanism | When it shines |
|--------|-----------|----------------|
| **Bagging (Bootstrap Aggregating)** – `BaggingClassifier/Regressor` | Draws \(B\) bootstrap samples, trains base estimators independently, averages or votes. | High variance models (e.g., decision trees). |
| **Random Forest** – `RandomForestClassifier/Regressor` | Bagging + random feature subsampling at each split. | Large tabular data; interpretable via feature importances. |
| **Gradient Boosting** – `GradientBoosting*`, `HistGradientBoosting*` | Sequentially fits a weak learner to the *negative gradient* of loss, updating residuals. | Structured loss functions (log‑loss, squared error) and tabular data. |
| **Voting** – `VotingClassifier/Regressor` | Hard or soft voting over independent models. | Heterogeneous ensembles where each member captures different patterns. |
| **Stacking** – `StackingClassifier/Regressor` | Trains a meta‑learner on predictions of base models (level‑0). | Complex tasks where interactions between base outputs matter. |

### Non‑obvious insight  
All these methods share a *“learn what the others miss”* principle:  
- Bagging reduces variance by averaging uncorrelated errors.  
- Random Forest adds decorrelation via feature subsampling, tightening the variance bound \( \sigma^2/B\).  
- Gradient Boosting explicitly models residuals, turning bias into an optimization problem.  
Thus, ensembles are not just “more data” but *structured diversity*—the fundamental lever that turns a collection of mediocre learners into a robust predictor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
