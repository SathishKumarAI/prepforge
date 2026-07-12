---
qid: q069
question: "How do you encode categorical variables for machine learning?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a pricing model, the dataset had a mix of categoricals: a two-value region flag, a five-value plan tier, and a merchant-category column with over 900 levels. My first naive one-hot pass exploded the feature space and tanked performance.

**Task** I needed an encoding strategy per column that fit both the cardinality and the model type I'd use.

**Action** For the low-cardinality nominal columns I used one-hot encoding. For the ordered plan tier I used ordinal encoding to preserve the natural ranking. For the 900-level merchant category, one-hot was a non-starter, so I used target encoding with smoothing and out-of-fold computation to avoid leakage, and I compared it against a frequency encoding baseline. Since I was also trying a gradient-boosting model, I tested its native categorical handling too. Crucially, I fit every encoder on the training fold only.

**Result** The out-of-fold target encoding cut dimensionality from 900+ columns to one while improving validation RMSE about 9% over frequency encoding. The lesson I stress: encoding choice depends on cardinality, whether the category is ordered, and the model, and you must guard against target leakage.
