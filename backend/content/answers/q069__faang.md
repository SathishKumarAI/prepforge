---
qid: q069
question: "How do you encode categorical variables for machine learning?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Ask whether the categories are nominal (no order) or ordinal (ranked), their cardinality, and the model type — trees tolerate label encoding, linear models don't.

**Approach** — Map encoding choice to category type and cardinality, then flag pitfalls.

**Depth** — **One-hot encoding** creates a binary column per category; ideal for nominal, low-cardinality features with linear models, but explodes dimensionality. **Ordinal/label encoding** maps categories to integers; correct for ordinal data or tree-based models, but injects a false order for linear models. **Target (mean) encoding** replaces a category with the mean target for that group — powerful for high cardinality but leaks the label unless done with out-of-fold or smoothing. **Frequency/count encoding** uses category counts. **Hashing** trades collisions for fixed dimensionality at very high cardinality. **Embeddings** learn dense vectors for neural nets.

**Edge cases** — Unseen categories at inference must be handled (an "unknown" bucket). Target encoding leaks without cross-fold discipline. High cardinality (e.g., zip codes) makes one-hot impractical. Missing values need their own category.

**Optimize & communicate** — Fit encoders on training data only; use out-of-fold target encoding to prevent leakage. Narrate: "Nominal + low cardinality + linear model → one-hot; high cardinality → target or hashing." That mapping shows systematic judgment.
