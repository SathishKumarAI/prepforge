---
qid: q031
question: "How does the k-Nearest Neighbors (k-NN) algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** For a quick product-recommendation prototype, the team needed a baseline "similar items" model in two days, with no time to train anything heavy.

**Task** I had to stand up something simple and interpretable that we could iterate on, and k-NN was the natural fit.

**Action** I implemented k-Nearest Neighbors. The idea is lazy learning: there's no training step, you just store the data, and at prediction time you find the k closest points by a distance metric and take a majority vote for classification or an average for regression. The details mattered a lot. I standardized every feature so no single large-scale feature dominated the Euclidean distance. I tuned k with cross-validation, landing on k=15 to smooth out noise without blurring boundaries. I also weighted neighbors by inverse distance so closer items counted more, and used a KD-tree to keep lookups fast.

**Result** The baseline hit 82% top-5 relevance and shipped in a day and a half. The lesson: k-NN is only as good as your distance metric, so feature scaling and the choice of k are where the real accuracy comes from.
