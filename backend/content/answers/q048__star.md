---
qid: q048
question: "How does Principal Component Analysis (PCA) work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was modeling sensor data from a manufacturing line with 120 correlated features, and training was slow while the model overfit to redundant, noisy signals.

**Task** I needed to cut the dimensionality without throwing away the real structure in the data.

**Action** I applied Principal Component Analysis. PCA finds new orthogonal axes, the principal components, ordered by how much variance they capture, and projects the data onto the top few. Mechanically it standardizes the features, computes the covariance matrix, and takes its eigenvectors and eigenvalues, keeping the components with the largest eigenvalues. I standardized first since PCA is scale-sensitive, then used scikit-learn's PCA and checked the explained-variance ratio, keeping enough components to retain 95% of the variance.

**Result** That collapsed 120 features to 18 while holding 95% of the variance, training got roughly 4x faster, and validation error actually improved because the noise was gone. The lesson: PCA is unsupervised compression along the directions of maximum variance, and the explained-variance curve tells you where to cut.
