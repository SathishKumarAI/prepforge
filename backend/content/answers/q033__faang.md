---
qid: q033
question: "What is feature engineering and why is it important?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll define feature engineering as transforming raw data into inputs that expose signal to a model, then explain why it drives performance, especially for classical ML.

**Approach** — Define it, justify its impact, then survey concrete techniques by data type.

**Depth** — Feature engineering is the craft of creating, transforming, and selecting input variables so the model can learn the target more easily. It matters because most models can only fit patterns that are *representable* in their feature space — a good feature can make a linear model beat a poorly-fed complex one. Techniques: **scaling/normalization** (essential for distance- and gradient-based models), **encoding** categoricals (one-hot, target encoding), **handling missing values** (imputation + missingness flags), **binning**, **interaction terms** and polynomial features, **domain-derived features** (ratios, date parts, aggregations), and **text/image transforms** (TF-IDF, embeddings). **Feature selection** (filter/wrapper/embedded methods) removes noise and curbs overfitting.

**Edge cases** — **Data leakage** is the big trap — features that encode the target or future information (e.g., fitting a scaler on the full dataset before splitting). High-cardinality categoricals and correlated features also cause trouble.

**Optimize & communicate** — Fit all transforms *inside* cross-validation folds to prevent leakage; deep learning reduces but doesn't eliminate the need. Signal: I know good features often beat fancier models, and I guard against leakage.
