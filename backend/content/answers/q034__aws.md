---
qid: q034
question: "How does the k-means clustering algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the loop, then own its assumptions — **Dive Deep**. k-means is unsupervised: you pick k, initialize k centroids, then alternate two steps until stable — assign each point to its nearest centroid, then move each centroid to the mean of its assigned points. It minimizes within-cluster sum of squares. Because it's sensitive to initialization I use k-means++ seeding and multiple restarts.

I'd surface the real limitations I've hit: you must choose k (I use the elbow method or silhouette score), it assumes roughly spherical, equal-size clusters, and it needs feature scaling or large-magnitude features hijack the distance. For non-convex shapes I'd reach for DBSCAN or Gaussian mixtures instead — knowing that boundary is the signal.

I'd ground it: "For customer segmentation I ran k-means on standardized RwFM features, used silhouette to settle on k=5, and the segments drove a targeted campaign that lifted conversion 14%." That connects unsupervised structure to a **Customer Obsession** outcome.

On AWS, SageMaker's built-in k-means scales to large datasets, and I'd persist segment assignments to DynamoDB for low-latency lookup.

A bar-raiser listens for how I chose k with evidence and whether I know when k-means is the wrong tool.
