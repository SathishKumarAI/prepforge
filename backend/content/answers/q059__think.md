---
qid: q059
question: "What are outliers and how can you detect them?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Define an outlier as a point deviating markedly from the rest, then immediately flag the key nuance: it might be an error *or* a genuine rare event (fraud), so detection and handling differ. Ask about the domain if possible.

2. **Mental model.** Split the answer into detection methods and handling decisions, and let context decide handling rather than a reflex to delete.

3. **Reason step by step.** Detection: IQR method (below Q1 minus 1.5 times IQR or above Q3 plus 1.5 times IQR, visualized with box plots), z-score (absolute z above 3 for roughly normal data), visualization (scatter/histogram/box plots), and model-based approaches for multivariate cases (DBSCAN, Isolation Forest, Local Outlier Factor). Handling: investigate first, remove only clear errors, cap/winsorize or log-transform to reduce influence, or keep them if legitimate.

4. **Traps to avoid.** The cardinal mistake is 'outliers are always errors, delete them', they may be the whole point (fraud, anomalies). Do not claim outliers never affect statistics (they distort mean, variance, linear regression), and do not say manual inspection is the only method.

5. **Sanity-check and communicate.** Ensure you gave both a rule-based method (IQR/z-score) and a model-based one. Lead with 'investigate before you act', which demonstrates judgment rather than blind cleaning.
