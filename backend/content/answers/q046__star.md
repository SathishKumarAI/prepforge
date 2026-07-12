---
qid: q046
question: "Explain Support Vector Machines and the kernel trick."
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I inherited a text-classification task separating support tickets into urgent versus routine, and a linear logistic model stalled at 74% F1 because the classes clearly weren't linearly separable in the raw feature space.

**Task** I wanted a classifier that could carve out a nonlinear boundary without me manually engineering polynomial features.

**Action** I brought in a Support Vector Machine. An SVM finds the hyperplane that maximizes the margin between classes, and the support vectors are the borderline points that define it. The kernel trick was the key: instead of explicitly projecting data into a high-dimensional space, an RBF kernel computes inner products there implicitly, so you get a nonlinear boundary cheaply. I used scikit-learn's SVC with an RBF kernel and grid-searched C and gamma to balance margin width against misclassification.

**Result** F1 climbed to 85% and training stayed fast on our roughly 20k samples. My takeaway was intuitive: SVMs care about the hardest examples near the boundary, and kernels let you go nonlinear without paying the cost of an explicit high-dimensional mapping.
