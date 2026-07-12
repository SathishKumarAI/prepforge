---
qid: q044
question: "How do you handle an imbalanced classification dataset?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a fraud-detection model, only about 0.8% of transactions were fraudulent. My first classifier reported 99% accuracy but was useless, it just predicted "not fraud" every time and caught nothing.

**Task** I needed a model that actually flagged fraud without drowning the review team in false positives.

**Action** I attacked the imbalance directly. First I threw out accuracy and moved to precision, recall, and PR-AUC. I applied SMOTE to synthesize minority examples on the training folds only, set class_weight='balanced' in the classifier, and tuned the decision threshold instead of leaving it at 0.5. I also validated with stratified k-fold so each fold kept the rare class proportion.

**Result** Recall on fraud went from basically zero to 76% while keeping precision around 40%, which the ops team found workable given the review budget. The big lesson was that on skewed data accuracy lies, and resampling plus the right metric plus threshold tuning together are what move the needle.
