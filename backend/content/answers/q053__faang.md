---
qid: q053
question: "What is Exploratory Data Analysis (EDA) and what does it involve?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a fresh dataset before modeling and that the interviewer wants both the purpose of EDA and the concrete techniques, not just a definition.

**Approach** — Define EDA's goal, then organize the techniques into univariate, bivariate/multivariate, and quality checks.

**Depth** — EDA is the process of investigating a dataset to understand its structure, patterns, quality, and relationships before formal modeling, so you form hypotheses and catch problems early. It involves: univariate analysis, examining each variable's distribution with histograms, box plots, and summary statistics (mean, median, spread, skew). Bivariate and multivariate analysis, exploring relationships via scatter plots, correlation matrices, and group-by comparisons. Data-quality checks, quantifying missing values, duplicates, outliers, and inconsistent types or encodings. The output guides feature engineering, model choice, and preprocessing decisions, and it often surfaces data-collection bugs.

**Edge cases** — High-dimensional data makes pairwise exploration explode, use dimensionality reduction or sampling. Over-exploring the same data risks p-hacking and spurious patterns; keep a held-out test set untouched. Aggregates can hide subgroup effects (Simpson's paradox).

**Optimize & communicate** — I'd pair automated profiling tools with targeted, hypothesis-driven plots rather than blindly charting everything, and document findings. I'd frame EDA as reducing risk before committing to a modeling direction, which shows I treat it as investigation, not decoration.
