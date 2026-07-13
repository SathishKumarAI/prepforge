---
qid: q037
question: "What is k-fold cross-validation and why use it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll define k-fold CV and explain what problem it solves versus a single train/validation split. Confirm we want mechanics plus the motivation and cost trade-off.

**Approach** — Describe the procedure, then justify it (lower-variance estimate, full data use), then variants and costs.

**Depth** — k-fold cross-validation splits the data into **k equal folds**. You train on k−1 folds and validate on the held-out fold, then **rotate** so each fold serves as validation exactly once — giving k performance scores you **average**. Why: a single validation split gives a **high-variance, luckily-or-unluckily-sampled** estimate; averaging k folds yields a more **reliable, lower-variance** estimate of generalization, and every data point is used for both training and validation — valuable when data is scarce. It's the standard for **hyperparameter tuning** and model comparison. Cost: k× the training time.

**Edge cases** — For **imbalanced classes** use **stratified** k-fold (preserves class ratios per fold). For **time series**, standard shuffling leaks the future — use forward-chaining/rolling splits. **Leave-One-Out** (k=n) is nearly unbiased but expensive and high-variance. Any preprocessing must be fit **inside** each fold to avoid leakage.

**Optimize & communicate** — k=5 or 10 balances bias, variance, and compute; nest an inner CV loop for honest hyperparameter tuning. Signal: I know it reduces estimate variance and I flag stratification and temporal leakage as the real-world caveats.
