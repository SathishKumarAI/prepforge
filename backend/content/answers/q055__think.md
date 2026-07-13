---
qid: q055
question: "How do you handle missing data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** The first question is always *why is it missing and how much?* State that the mechanism, MCAR, MAR, or MNAR, drives the right treatment, and that you would not blindly impute.

2. **Mental model.** Two big buckets: deletion vs imputation, chosen by the missingness mechanism and volume. Layer on a leakage guardrail and the idea that missingness itself can be informative.

3. **Reason step by step.** Deletion (listwise rows or columns) is fine when little is missing and it is random. Imputation options scale in sophistication: mean/median/mode (simple, distorts variance), forward/backward fill (time series), model-based (k-NN, regression, MICE/iterative), or a constant plus a 'was-missing' indicator. Some gradient-boosting libraries handle missingness natively.

4. **Traps to avoid.** Do not always drop every row with a missing value. Do not fill everything with zero regardless of context. Crucially, fit imputation on *training data only* to avoid leakage, and do not ignore that missingness can carry signal.

5. **Sanity-check and communicate.** Re-tie your recommendation to the mechanism you assumed. Mention adding a missing-indicator feature, that nuance signals you understand missingness can predict the target, elevating the answer above a rote list.
