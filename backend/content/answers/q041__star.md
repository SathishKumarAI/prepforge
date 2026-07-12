---
qid: q041
question: "How does a random forest work and why is it better than a single decision tree?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a churn-prediction project at a telecom client, our single decision tree hit 82% accuracy in cross-validation but swung wildly between folds and overfit badly on the training set, memorizing noise in low-usage segments.

**Task** I needed a model that generalized better and gave the product team stable, trustworthy churn scores they could act on.

**Action** I replaced the lone tree with a random forest. The key idea is that it trains hundreds of trees, each on a bootstrap sample of the rows and, at every split, only a random subset of features. That decorrelates the trees so their errors cancel when you average the votes. I used scikit-learn's RandomForestClassifier with 300 trees, tuned max_features and max_depth, and pulled out-of-bag error and feature importances for the write-up.

**Result** Test accuracy rose to 88% and fold-to-fold variance dropped sharply, so the score was reliable. The lesson stuck: one tree is high-variance, but averaging many diverse trees trades a little interpretability for a big stability and accuracy win.
