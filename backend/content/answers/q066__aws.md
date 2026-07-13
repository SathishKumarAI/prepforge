---
qid: q066
question: "What are the main approaches to feature selection?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Invent and Simplify** and **Dive Deep**: fewer, better features mean simpler, cheaper, more robust models. There are three families. **Filter** methods rank features by a statistic independent of any model, correlation, mutual information, chi-square, fast and scalable. **Wrapper** methods, like recursive feature elimination or forward/backward selection, train models on subsets and are accurate but expensive. **Embedded** methods do selection during training, L1/Lasso driving coefficients to zero, or tree-based importance from a random forest or gradient boosting.

The judgment I signal is matching method to constraints and guarding against leakage. I'd give a concrete example: I cut a 300-feature model to about 40 using Lasso plus importance, which barely moved AUC but roughly halved inference latency and cost and made the model far easier to explain to stakeholders, a clear simplify win. Crucially, I run selection *inside* the cross-validation fold, never on the full dataset, or I'd leak test information and overstate performance. On AWS I'd do this in SageMaker. A bar-raiser listens for whether you know all three families, avoid selection-based leakage, and justify the simplicity, latency, and cost payoff, not just chasing marginal accuracy.
