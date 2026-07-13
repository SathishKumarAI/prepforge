---
qid: q031
question: "How does the k-Nearest Neighbors (k-NN) algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain it, then own its trade-offs — that's **Dive Deep**. k-NN is a lazy, instance-based method: there's no training step beyond storing the data. To predict, it finds the k closest points by a distance metric (usually Euclidean), then takes a majority vote for classification or an average for regression. Small k means low bias/high variance (noisy); large k smooths but can blur real boundaries — I pick k by cross-validation.

I'd surface the gotchas I've hit in production: it demands feature scaling (unscaled dollars dominate ages), it degrades in high dimensions (curse of dimensionality), and inference cost grows with dataset size because every query scans the data. "On a product-similarity feature, naive k-NN was too slow at 40M items, so I switched to an approximate nearest-neighbor index and cut p99 latency from 800ms to 45ms with negligible recall loss" — that's **Deliver Results** under a real constraint.

I'd connect it to AWS: OpenSearch k-NN or SageMaker's built-in kNN with ANN indexing for scale, features served from a Feature Store to keep training/serving consistent.

A bar-raiser listens for whether I know *when not to use it* and how I made it fast in practice.
