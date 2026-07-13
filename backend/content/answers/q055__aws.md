---
qid: q055
question: "How do you handle missing data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd anchor this to **Dive Deep**: the *why* behind missingness matters more than the fill. First I diagnose the mechanism, MCAR, MAR, or MNAR, because that determines what's safe. Missing-not-at-random is dangerous: if income is missing precisely for high earners, dropping or mean-filling biases everything. Options I weigh: drop rows only when missingness is tiny and random; drop a column if it's mostly empty; impute with mean/median/mode for MCAR; use model-based or KNN imputation when relationships are strong; or, crucially, add a **missingness indicator** so the model can learn that absence itself is signal.

The interview judgment is that I never blindly impute. I'd give a concrete example: a sensor feed had 15% missing values that turned out to correlate with device failures, so the missingness *was* the predictive signal; an indicator flag beat any imputation. In an AWS pipeline I'd handle this in Glue and fit imputers only on training folds to avoid leakage. A bar-raiser listens for whether you investigate *why* data is missing and prevent leakage, rather than reflexively reaching for filling with the mean.
