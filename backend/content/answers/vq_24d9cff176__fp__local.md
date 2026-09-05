---
qid: vq_24d9cff176__fp__local
question: Q3- How is KNN different from k-means clustering?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 378
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:26:57-05:00'
sources: []
---

**K‑Nearest Neighbours (KNN) vs. k‑means Clustering**

Both algorithms involve the integer *k*, but they tackle fundamentally different problems.  
* **KNN** is a *supervised* prediction method: given a labelled training set, it estimates the class of a new point by looking at its *k* closest neighbours in feature space. The decision rule is purely local; no global model is built.  
* **k‑means** is an *unsupervised* clustering technique that partitions the data into *k* groups by iteratively moving cluster centroids to minimise the sum of squared Euclidean distances from points to their assigned centroid.

Why must they behave this way?  

1. **Objective function:** KNN optimises a *local consistency* criterion—if most neighbours share a label, predict that label. k‑means optimises a *global variance minimisation*, which is equivalent to maximum likelihood under Gaussian mixture assumptions with equal spherical covariances.  
2. **Geometry of decision boundaries:** KNN’s boundaries are data‑driven Voronoi cells; they can be highly irregular and adapt to the underlying distribution. k‑means produces convex, spherical clusters because its objective forces centroids to lie at the mean of assigned points.

**Non‑obvious insight:**  
A single point can belong to different *k*-neighbourhoods for varying *k*, yet the centroid it pulls towards in k‑means may remain unchanged if that point is already close to an existing centroid. Thus, KNN’s sensitivity to local density contrasts with k‑means’ insensitivity to outliers when *k* is small—an important consideration when choosing between them for noisy data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
