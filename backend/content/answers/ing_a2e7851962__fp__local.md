---
qid: ing_a2e7851962__fp__local
question: 'Explain: Heuristics — What is concept drift in ML, and how to detect and
  address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 522
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:12-05:00'
sources: []
---

**Concept Drift – the “moving target” problem**

At its core a supervised model is an *approximation* of a mapping  
\(f: X \rightarrow Y\).  Training data are samples from some distribution
\(P_{\text{train}}(X,Y)\) that we assume will hold when the model is deployed.
If, over time, the true data‑generation process changes so that the joint
distribution \(P_{\text{new}}(X,Y)\neq P_{\text{train}}\), the mapping we learned
no longer represents reality.  
This shift—whether in feature marginals (covariate drift), in the relation
between features and label (concept drift), or both—is what we call *concept
drift*.  The fundamental problem is that a fixed hypothesis set can no
longer achieve low expected loss because the target function itself has moved.

**Detecting drift**

1. **Statistical monitoring** – compute test statistics on incoming data,
   e.g., KS‑test or Wasserstein distance between recent and historical
   feature distributions, or monitor the distribution of prediction residuals.
2. **Performance drift** – track a sliding window of metrics (accuracy,
   AUC, loss).  A statistically significant decline signals that the model’s
   assumptions are violated.
3. **Ensemble disagreement** – maintain multiple models trained on different
   time slices; rising disagreement indicates that newer data no longer align
   with older training regimes.

A non‑obvious insight: *monitoring residuals is often more sensitive than
feature‑level tests*, because the model’s own error amplifies subtle joint
distribution changes that raw features may hide.

**Addressing drift**

- **Retraining / online learning** – periodically retrain on recent data or use
  incremental algorithms (e.g., stochastic gradient descent) to adapt weights.
- **Adaptive windows** – weight newer observations more heavily in loss
  functions (exponential decay), effectively shifting the training distribution
  toward the current one.
- **Model ensembles with time stamps** – blend predictions from models trained
  on different epochs, weighting them by their recent performance.

Ultimately, concept drift is a manifestation of *non‑stationarity*; handling it
requires continuous monitoring and dynamic adaptation so that the learned mapping
remains a faithful surrogate for an ever‑changing reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
