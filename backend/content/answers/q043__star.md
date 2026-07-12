---
qid: q043
question: "What is feature scaling and which algorithms need it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building a customer-segmentation pipeline where features ranged from age in years to annual income in the hundreds of thousands, and my first k-means run produced clusters that were essentially just income buckets.

**Task** I had to make the clustering treat every feature fairly instead of letting the large-magnitude columns dominate.

**Action** The fix was feature scaling. Because k-means uses Euclidean distance, income's raw magnitude swamped everything else. I applied StandardScaler to standardize each feature to zero mean and unit variance, and fit the scaler only on training data to avoid leakage. I also noted which algorithms actually need it: distance and gradient-based ones like k-means, KNN, SVM, PCA, and neural nets do, while tree-based models like random forests and gradient boosting are scale-invariant and don't.

**Result** After scaling, the clusters split cleanly on age, income, and tenure together, and the marketing team got three actionable segments. The lesson: always ask whether your algorithm is distance-based before trusting unscaled features.
