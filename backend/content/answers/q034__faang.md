---
qid: q034
question: "How does the k-means clustering algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll describe k-means as unsupervised partitioning into k clusters minimizing within-cluster variance, then cover initialization, convergence, and choosing k.

**Approach** — Walk the iterative two-step loop, then discuss the objective, pitfalls, and k selection.

**Depth** — k-means partitions n points into k clusters by minimizing **within-cluster sum of squares** (inertia). Algorithm (Lloyd's): (1) initialize k centroids; (2) **assignment** — assign each point to its nearest centroid (Euclidean); (3) **update** — recompute each centroid as the mean of its assigned points; (4) repeat 2–3 until assignments stop changing. Each iteration is O(n·k·d), and it's guaranteed to converge to a **local** optimum (inertia never increases), though not the global one. Initialization matters: **k-means++** seeds spread-out centroids to avoid bad local minima. You pick k externally.

**Edge cases** — Assumes **spherical, similarly-sized clusters**; fails on elongated or density-varying shapes (use DBSCAN/GMM). Sensitive to outliers (means shift) and feature scale (**must standardize**). Random init can give different results — run multiple times.

**Optimize & communicate** — Choose k via the **elbow method** on inertia or **silhouette score**; run several k-means++ restarts and keep the lowest inertia. Signal: I state the spherical-cluster assumption and scaling requirement, and I know it's a local optimizer needing restarts — the things that decide whether it works on real data.
