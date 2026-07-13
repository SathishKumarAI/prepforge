---
qid: q033
question: "What is feature engineering and why is it important?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Define it as transforming raw data into informative features, and assume the interviewer wants both the "what techniques" and the "why it matters," especially for classical ML. Note deep learning changes the picture.

2. **Mental model.** "A model can only learn from what the features expose." Feature engineering is about surfacing signal that the algorithm can't easily discover on its own.

3. **Reason step by step.** List technique buckets: encoding categoricals (one-hot, target, ordinal), scaling/normalization, creating interaction/polynomial features and ratios, binning, extracting structure from dates or text (TF-IDF), handling missing values and outliers, and domain-specific features. Then argue importance: for tabular/classical ML, good features often beat fancier algorithms; deep learning automates representation learning but thoughtful features still help on tabular data and small samples.

4. **Traps to avoid.** The critical one is data leakage - never build features using target or future information. Don't confuse it with hardware choice, learning-rate scheduling, or final evaluation.

5. **Sanity-check.** For any engineered feature, ask "would this value be available at prediction time?" to catch leakage. Communicate the payoff: better features raise the ceiling more cheaply than swapping models.
