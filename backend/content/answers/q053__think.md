---
qid: q053
question: "What is Exploratory Data Analysis (EDA) and what does it involve?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Frame EDA as what you do *before* formal modeling to understand the data and catch problems. State the assumption that they want both the activities and the goals, not a tool list.

2. **Mental model.** Think in widening circles: one variable at a time, then relationships between variables, then data-quality checks, all driven by visualization and iteration (the Tukey spirit).

3. **Reason step by step.** Summary statistics (mean, median, quartiles, counts), then univariate analysis (histograms, box plots, value counts), then bivariate/multivariate (scatter plots, correlation matrices, cross-tabs), then missing-value and outlier detection, then data-quality checks (types, ranges, duplicates). Tie each to a purpose: understand distributions, find anomalies, form and test hypotheses, guide feature engineering.

4. **Traps to avoid.** Do not describe EDA as a final or deployment step, it is early. Do not reduce it to 'make some charts'; the point is deciding *what to do next*. Do not skip the data-quality angle.

5. **Sanity-check and communicate.** Confirm you connected each technique to a decision it informs. Land the 'garbage in, garbage out' motive: EDA prevents building on flawed data, which is why it is indispensable rather than optional.
