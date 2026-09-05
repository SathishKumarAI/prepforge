---
qid: vq_304f23c748__fp__local
question: Q24- How would you evaluate a logistic regression model?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 460
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:02-05:00'
sources: []
---

**From first principles: what does a logistic model actually deliver?**  
It outputs *probabilities* \(p(x)=\sigma(w^Tx+b)\). The fundamental problem is to make these probabilities as close as possible to the true Bernoulli parameter \(\theta_x=P(Y=1|x)\).  

**Why log‑loss (cross‑entropy) is natural**  
The likelihood of observing label \(y\in\{0,1\}\) given \(p\) is \(p^y(1-p)^{1-y}\). Maximizing this likelihood (or minimizing the negative log‑likelihood) yields the *maximum‑likelihood estimator*. The resulting objective is convex and differentiable; it directly penalizes mis‑calibrated probabilities.  

**Why a second, decision‑based metric matters**  
In practice we often threshold \(p\) to classify. Thus we evaluate rank ordering of scores: **ROC AUC** measures the probability that a randomly chosen positive gets a higher score than a random negative. It is invariant to any monotonic transformation of scores and captures discriminative power without committing to a particular operating point.

**Non‑obvious insight**  
A model can have excellent log‑loss yet poor ROC AUC if its *probabilities are over‑confident* (e.g., all positives near 1, negatives near 0). Conversely, a high AUC may hide severe miscalibration. Therefore **jointly report both log‑loss and AUC**: the former ensures probabilistic fidelity; the latter guarantees ordering quality.

**Practical checklist**  
1. Compute training/test log‑loss to assess calibration.  
2. Plot ROC curve and compute AUC for discriminative ability.  
3. Optionally plot a reliability diagram or perform Brier score analysis to check calibration across probability bins.  

These metrics stem from the two core principles: *information theory* (log‑loss) and *ranking geometry* (AUC).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
