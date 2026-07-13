---
qid: q048
question: "How does Principal Component Analysis (PCA) work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Establish that PCA is *unsupervised* dimensionality reduction that maximizes captured variance, no labels involved. State the assumption that features are numeric and should be standardized first.

2. **Mental model.** Think 'rotate the axes to align with the directions of greatest spread, then keep the few that matter.' Principal components are orthogonal directions ranked by variance explained.

3. **Reason step by step.** Standardize features, compute the covariance matrix, find eigenvectors/eigenvalues (or use SVD): eigenvectors are the component directions, eigenvalues the variance each captures. Rank by eigenvalue, keep the top k, then project the data onto those k axes.

4. **Traps to avoid.** Do not call it supervised or say it uses labels. Do not forget scaling, unscaled features let large-magnitude ones dominate the variance. Do not say it increases dimensions. And flag that components are *linear combinations*, so PCA is a linear method (contrast with kernel PCA, t-SNE, UMAP).

5. **Sanity-check and communicate.** Confirm the ordering: standardize, covariance, eigen-decomposition, select, project. Communicate benefits (decorrelation, noise reduction, visualization) and the cost (lost interpretability of original features), so the answer weighs both sides.
