---
qid: q046
question: "Explain Support Vector Machines and the kernel trick."
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd build intuition first, then the trick — demonstrating **Dive Deep** on a harder topic. An SVM finds the hyperplane that separates classes with the *maximum margin* — the widest gap to the nearest points, the support vectors. Maximizing the margin is what gives good generalization. The soft-margin version adds a slack penalty (the C hyperparameter) to tolerate some misclassification, trading margin width against training errors.

The kernel trick handles non-linearly-separable data. Instead of explicitly mapping features into a high-dimensional space where they *are* linearly separable, a kernel function (RBF, polynomial) computes the inner product in that space directly — so you get the power of a huge feature space without ever materializing it. RBF is my default because it handles complex boundaries with two knobs, C and gamma, which I tune together by cross-validation.

I'd stay honest about fit: SVMs shine on small-to-medium, high-dimensional data (text) but scale poorly to millions of rows, where I'd prefer gradient boosting. "On a text classifier with 20k features and 15k docs, an RBF SVM beat logistic regression by 4 points of F1."

A bar-raiser listens for whether I can explain *why* the kernel avoids explicit expansion and where SVMs stop being the right tool.
