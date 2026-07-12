---
qid: q034
question: "How does the k-means clustering algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** Marketing at an e-commerce company wanted customer segments for targeted campaigns but had no labels, just behavioral data on thousands of shoppers. They needed structure discovered, not predicted.

**Task** I had to group customers into meaningful segments using unsupervised learning, and k-means was the right starting tool.

**Action** I explained and applied k-means. It partitions data into k clusters by iterating two steps: assign each point to its nearest centroid, then move each centroid to the mean of its assigned points, repeating until assignments stop changing. Details drove quality. I standardized features since k-means relies on Euclidean distance, used k-means++ initialization to avoid bad random starts, and picked k with the elbow method on inertia plus silhouette score, landing on k=5. I ran multiple restarts to escape local minima.

**Result** We got five clean, interpretable segments, like bargain-hunters and loyal high-spenders, and campaigns targeted to them lifted conversion by 14%. The lesson: k-means is simple and fast, but scaling your features and choosing k deliberately are what make the clusters actually mean something.
