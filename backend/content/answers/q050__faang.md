---
qid: q050
question: "What is data leakage in machine learning and how do you prevent it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a standard train/validation/test workflow and that the interviewer wants the definition, concrete examples, and prevention discipline, since leakage is a top cause of models that look great but fail in production.

**Approach** — Define leakage, distinguish its two common forms, then give a defensive checklist.

**Depth** — Data leakage is when information unavailable at prediction time leaks into training, giving over-optimistic offline metrics that collapse in production. Two forms: target leakage, where a feature is a proxy for or derived from the label (e.g., "account_closed_date" predicting churn); and train-test contamination, where information from the test set influences training. The classic contamination bug is fitting a scaler, imputer, or feature selector on the full dataset before splitting, so test statistics bleed into training. Time-series leakage happens when future rows train a model that predicts the past.

**Edge cases** — Cross-validation done after global preprocessing leaks; SMOTE applied before splitting leaks synthetic neighbors; group leakage when the same user appears in train and test. Time-ordered data needs chronological splits, not random ones.

**Optimize & communicate** — Split first, then fit all preprocessing inside a pipeline on training folds only. Audit features by asking "would this be known at prediction time?" I'd emphasize that catching leakage separates engineers who trust their metrics from those who verify them, a strong seniority signal.
