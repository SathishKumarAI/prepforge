---
qid: q034
question: "How does the k-means clustering algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note it's unsupervised and that you must choose k in advance. Assume they want the iterative loop plus the assumptions and failure modes.

2. **Mental model.** Two alternating steps that greedily reduce within-cluster variance - assign points to nearest centroid, then move centroids to the mean - repeated until nothing changes.

3. **Reason step by step.** Initialize k centroids (k-means++ beats random). Assignment step: each point joins its nearest centroid, usually by Euclidean distance. Update step: recompute each centroid as the mean of its members. Repeat until centroids stabilize. Then cover choosing k via the elbow method or silhouette score, sensitivity to initialization and feature scaling, the assumption of roughly spherical equal-sized clusters, and convergence only to a *local* optimum (hence multiple restarts).

4. **Traps to avoid.** Don't say it needs labels or auto-picks k. Don't claim a global optimum. Don't forget it struggles with irregular shapes and outliers - mention DBSCAN or GMMs as alternatives.

5. **Sanity-check.** Confirm the two steps monotonically lower the objective, so convergence is guaranteed (to a local min). Communicate the practical knobs - k selection, k-means++, scaling, restarts - since that's what separates a textbook answer from a practitioner's.
