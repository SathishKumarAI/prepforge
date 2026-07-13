---
qid: q069
question: "How do you encode categorical variables for machine learning?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Dive Deep** and **Are Right A Lot**: the encoding choice depends on cardinality, whether the model handles categoricals, and leakage risk. **One-hot** for low-cardinality nominal features, clean but explodes dimensionality. **Label/ordinal** encoding only when there's a true order, since imposing fake order misleads linear models. **Target/mean encoding** for high cardinality, but computed within cross-validation folds or it leaks the target. **Frequency** or **hash** encoding for very high cardinality like user IDs. Tree models tolerate integer encodings; linear and neural models usually need one-hot or learned embeddings.

The judgment I signal is guarding against two traps: dimensional blow-up and target leakage. I'd give a concrete example: naive target-encoding a high-cardinality zip-code feature on the full dataset inflated validation AUC to 0.95, but fold-wise encoding revealed the true 0.82; catching that leakage saved us from shipping an overconfident model. For thousands of categories I've used embeddings in SageMaker instead of one-hot. And I handle unseen categories at inference explicitly. A bar-raiser listens for whether you match encoding to cardinality and model type and, above all, prevent target-encoding leakage by fitting inside the training fold, the mistake that quietly wrecks many pipelines.
