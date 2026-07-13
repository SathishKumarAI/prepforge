---
qid: q053
question: "What is Exploratory Data Analysis (EDA) and what does it involve?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd tie EDA to **Dive Deep** and **Learn and Be Curious**: it's the disciplined curiosity phase before any model. EDA means understanding the data's shape, quality, and relationships. Concretely I check: distributions and summary stats per feature, missingness patterns, outliers, cardinality of categoricals, correlations, and target leakage risks. I visualize with histograms, box plots, scatter plots, and correlation heatmaps, often in a SageMaker notebook querying via Athena so I can profile at scale without moving data.

The judgment I signal is that EDA is where you catch the errors that would silently ruin a model, and where hypotheses are born. I'd give a specific example: during EDA I found a timestamp column that was populated only after the outcome occurred, a leakage trap that would have inflated AUC to 0.99; catching it in EDA saved a doomed launch. I also treat EDA as the moment I sanity-check assumptions with the business owner. A bar-raiser listens for whether you use EDA to find leakage, quality issues, and biased sampling early, rather than rushing to modeling and paying for it later.
