---
qid: q059
question: "What are outliers and how can you detect them?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume numeric data and that the interviewer wants a definition, detection methods, and, importantly, judgment about what to do with outliers rather than blindly removing them.

**Approach** — Define outliers, cover statistical and model-based detection, then address treatment decisions.

**Depth** — An outlier is a data point that deviates markedly from the rest of the data. Detection methods: the statistical Z-score flags points more than about 3 standard deviations from the mean, good for roughly normal data but itself sensitive to the outliers it seeks. The IQR method flags points below Q1 minus 1.5*IQR or above Q3 plus 1.5*IQR, and is robust because quartiles resist extremes; this is what box plots visualize. Visualization (box plots, scatter plots, histograms) catches them by eye. Model-based methods like Isolation Forest, DBSCAN, and Local Outlier Factor handle multivariate and non-linear cases where a point is normal per-feature but jointly anomalous.

**Edge cases** — Z-score assumes normality and breaks on skewed data. Multivariate outliers hide from univariate checks. Crucially, an outlier may be a genuine signal (fraud, a real rare event), not an error, removing it can destroy the very thing you're modeling.

**Optimize & communicate** — I'd investigate the cause before acting: fix data-entry errors, but keep or cap (winsorize) legitimate extremes, or use robust models. I'd stress that the decision depends on domain context, showing I don't treat outlier removal as automatic.
