---
qid: q069
question: "How do you encode categorical variables for machine learning?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask two things that drive the choice: is the variable **nominal or ordinal**, and what is its **cardinality**? Also note the downstream model type, since trees and linear models tolerate encodings differently.
2. **Mental model.** Treat encoding as a decision tree keyed on those attributes: ordered category → preserve order; unordered + few levels → avoid implying order; unordered + many levels → control dimensionality and leakage.
3. **Reason step by step.** Map each branch: one-hot for nominal low-cardinality (no false ordering, but adds columns); label/ordinal for genuinely ordered categories; target/mean encoding for high cardinality (powerful but leakage-prone, so use CV/smoothing); frequency or hashing when cardinality explodes.
4. **Traps to dodge.** Do not label-encode nominal data for a linear model — it invents a fake ranking. Do not target-encode naively (leaks the label). Do not forget unseen categories at inference and fitting encoders on training data only.
5. **Sanity-check and communicate.** Verify the chosen encoding did not silently inject order or blow up dimensionality, and that a holdout category is handled. Present it as "pick by ordinality, cardinality, and model," then name the matching technique — that reasoning beats a one-size answer.
