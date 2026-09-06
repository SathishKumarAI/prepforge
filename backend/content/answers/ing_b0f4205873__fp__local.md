---
qid: ing_b0f4205873__fp__local
question: 'Explain: Python example — Outlier Detection with Isolation Forest | Towards
  Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 565
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:20:34-05:00'
sources: []
---

**Isolation Forest: why it works**

An outlier is a point that would be *isolated* from the rest of the data with far fewer random cuts than typical points.  
If we repeatedly pick a feature and split on a random value, the expected number of splits needed to separate a normal point grows logarithmically with the sample size \(n\); an outlier lies in a sparse region and is cut off after only a few steps.  

Mathematically, for a data point \(x\) let \(h(x)\) be its average path length over many random trees.  
The anomaly score

\[
s(x)=2^{-\frac{h(x)}{c(n)}},
\]

with \(c(n)\approx 2(\ln (n-1)+0.5772)-\frac{2(n-1)}{n}\), is close to 1 for outliers and near 0.5 for inliers.  
This derivation shows that the method is essentially estimating the *expected isolation cost*—a purely geometric, non‑metric measure of sparsity.

**Non‑obvious insight:**  
Because splits are random, the forest does not assume any particular shape of the data distribution; it adapts to arbitrary manifolds. This makes it robust to high dimensionality and correlated features, unlike distance‑based detectors that suffer from the curse of dimensionality.

```python
import numpy as np
from sklearn.ensemble import IsolationForest

# toy dataset: 200 normal points + 5 outliers
rng = np.random.RandomState(42)
X_normal = rng.randn(200, 2) * [1, 0.5] + [2, -1]
X_outlier = rng.uniform(low=[-4,-3], high=[6,3], size=(5,2))
X = np.vstack([X_normal, X_outlier])

# fit
iso_forest = IsolationForest(contamination=0.025, random_state=42)
iso_forest.fit(X)

scores = iso_forest.decision_function(X)   # negative for outliers
preds  = iso_forest.predict(X)             # -1 → anomaly

print(np.sum(preds==-1), "outliers detected")
```

The algorithm’s simplicity—just random cuts and path counting—belies its powerful, theoretically grounded ability to flag anomalies without distance metrics or density estimation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
