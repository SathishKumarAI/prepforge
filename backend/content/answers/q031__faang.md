---
qid: q031
question: "How does the k-Nearest Neighbors (k-NN) algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll cover k-NN for classification (majority vote) and note the regression variant. Confirm we want mechanics, complexity, and the role of k.

**Approach** — Describe prediction as a lazy, instance-based lookup; then discuss k, distance, complexity, and trade-offs.

**Depth** — k-NN is **lazy** — no training beyond storing the data. To predict for a query point, compute its distance (usually Euclidean; also Manhattan, cosine) to all stored points, take the **k closest**, and for classification return the majority class among them; for regression, average their values. Choosing **k** trades bias for variance: small k (k=1) fits noise (low bias, high variance); large k smooths and can underfit. k is typically odd for binary voting to avoid ties. Complexity is the catch: prediction is **O(n·d)** per query with a brute-force scan — expensive at scale — though KD-trees or ball-trees speed low-dimensional lookups, and approximate methods (HNSW) handle high dimensions.

**Edge cases** — **Curse of dimensionality**: distances become uninformative in high dimensions. **Feature scaling is mandatory** — unscaled features dominate the distance. Imbalanced classes bias the vote; use distance-weighting.

**Optimize & communicate** — I'd normalize features, tune k via cross-validation, weight votes by inverse distance, and use ANN indexes for large data. Signal: I flag the scaling requirement and the O(n) inference cost unprompted — the two things that bite in practice.
