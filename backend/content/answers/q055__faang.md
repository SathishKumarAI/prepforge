---
qid: q055
question: "How do you handle missing data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'd first ask why data is missing and how much, because the mechanism (MCAR, MAR, MNAR) and the fraction missing dictate the right treatment. I'll assume a tabular modeling context.

**Approach** — Diagnose the mechanism, then choose among deletion, imputation, or model-native handling, weighing bias against information loss.

**Depth** — Understand the mechanism first. MCAR (missing completely at random): dropping rows is unbiased but loses data. MAR (missingness depends on observed variables): imputation conditioned on those variables works. MNAR (missingness depends on the unobserved value itself, e.g., high earners hiding income): hardest, may require modeling the missingness. Options: deletion (listwise/column) when little is missing; simple imputation (mean/median/mode) which is fast but shrinks variance and ignores correlations; model-based imputation (KNN, regression, MICE/iterative) which preserves relationships; and adding a "was-missing" indicator so the model can exploit informative missingness. Some models (tree-based, XGBoost) handle NaNs natively.

**Edge cases** — Imputing before the train/test split leaks information; fit imputers on training data only. Mean imputation distorts distributions and correlations. Dropping a column with 60% missing may be better than imputing it.

**Optimize & communicate** — I'd wrap imputation in a pipeline, add missingness flags, and compare strategies via cross-validation. I'd stress starting from the "why is it missing" question, since matching method to mechanism is the senior signal.
