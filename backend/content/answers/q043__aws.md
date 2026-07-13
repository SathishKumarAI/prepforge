---
qid: q043
question: "What is feature scaling and which algorithms need it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd define it, then show I know exactly *when* it matters — **Dive Deep**. Feature scaling puts features on a comparable range so no single large-magnitude feature dominates. The two workhorses are standardization (subtract mean, divide by std → mean 0, unit variance) and min-max normalization (rescale to [0,1]). I pick standardization by default and min-max when I need bounded inputs, using RobustScaler when outliers are heavy.

Which algorithms need it is the real test. Distance- and gradient-based methods do: k-NN, k-means, SVM, PCA, and neural networks — unscaled features distort distances and slow or destabilize gradient descent. Tree-based methods (decision trees, random forests, gradient boosting) are scale-invariant because they split on thresholds, so scaling is unnecessary there. Knowing that boundary avoids wasted work.

I'd stress the discipline that shows **Insist on the Highest Standards**: I fit the scaler on the *training* set only and apply the same parameters to validation/test/serving — fitting on all data leaks information. I persist the scaler alongside the model.

On AWS, I bake scaling into a SageMaker Processing/Pipeline step and serve identical transforms via Feature Store to prevent train/serve skew.

A bar-raiser listens for the tree-invariance nuance and whether I prevent leakage when fitting the scaler.
