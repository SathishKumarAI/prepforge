---
qid: vq_24d9cff176__star__local
question: Q3- How is KNN different from k-means clustering?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:47-05:00'
sources: []
---

**Situation** – In my last data‑science internship I was asked to prototype a recommendation engine for an e‑commerce startup that had just launched a new product line. The team wanted a quick way to cluster customers by purchase behavior and also predict the next item a customer might buy.

**Task** – I needed to pick two algorithms: one for grouping similar users (clustering) and another for classifying a new user’s likely interests (nearest‑neighbor prediction), while keeping the code lightweight enough to run on a single laptop.

**Action** – I implemented k‑means clustering first, using Scikit‑Learn’s `KMeans` with 8 clusters based on normalized purchase vectors. For the classification side, I built a KNN model (`KNeighborsClassifier`) that looked at the 5 nearest neighbors of a new user to predict their next product. I visualized cluster centroids in PCA space and tuned k for both algorithms using cross‑validation.

**Result** – The clustering gave us interpretable segments (e.g., “budget buyers” vs. “premium shoppers”) with an inertia drop of ~30% when moving from 5 to 8 clusters. The KNN predictor achieved a 68 % accuracy on the hold‑out set, outperforming a baseline majority vote by 15 %. I learned that k‑means is unsupervised and centers data points around centroids, whereas KNN is supervised, relying on distance to labeled neighbors for prediction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
