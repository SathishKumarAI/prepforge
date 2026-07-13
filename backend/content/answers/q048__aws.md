---
qid: q048
question: "How does Principal Component Analysis (PCA) work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the intuition and the math, then a real use — **Dive Deep**. PCA is unsupervised dimensionality reduction. It finds new orthogonal axes — principal components — that are linear combinations of the original features, ordered so the first captures the most variance, the second the next-most, and so on. Mechanically you standardize the features, compute the covariance matrix, take its eigenvectors (the components) and eigenvalues (the variance each explains), and project the data onto the top-k components. Keeping the top few often retains most variance while collapsing many correlated features.

I'd flag the discipline points that show rigor: PCA requires scaling first (it's variance-driven), and the components are less interpretable since they mix original features. I choose k by the cumulative explained-variance curve (e.g., enough components to reach 95%).

I'd ground it: "On a model with 300 highly correlated sensor features, PCA to 25 components kept 96% of variance, cut training time 60%, and reduced overfitting — validation error dropped 8%." That's **Frugality** and **Deliver Results** together.

I'd note when *not* to use it: if interpretability is required, or relationships are non-linear (then t-SNE/UMAP for visualization). On AWS, SageMaker has a built-in PCA algorithm for large data.

A bar-raiser listens for the variance/eigenvector intuition and awareness of PCA's interpretability cost.
