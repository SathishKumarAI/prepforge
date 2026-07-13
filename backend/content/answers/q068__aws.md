---
qid: q068
question: "What is the difference between Pearson and Spearman correlation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd anchor this to **Are Right A Lot**: picking the wrong correlation coefficient produces confidently wrong conclusions. Pearson measures the strength of a **linear** relationship and assumes roughly continuous, normal-ish data; it's sensitive to outliers. Spearman is Pearson computed on the **ranks**, so it captures any **monotonic** relationship, handles ordinal data, and is robust to outliers and nonlinearity.

The judgment I signal is choosing by the data's shape. I'd give a concrete example: two variables had a clear monotonic but curved relationship; Pearson read a weak 0.4 and nearly made me discard a genuinely predictive feature, while Spearman showed 0.85 and revealed the real association. A single outlier can likewise inflate or crush Pearson while Spearman barely moves. So my rule of thumb: Spearman when I suspect nonlinearity, ordinal features, or outliers; Pearson when the relationship is plausibly linear and I want the familiar interpretation. I'd compute both during EDA in a notebook and compare them as a diagnostic. And I'd remind the panel that either way, correlation isn't causation. A bar-raiser listens for whether you match the coefficient to linearity and outlier assumptions, rather than defaulting to Pearson and missing monotonic signal.
