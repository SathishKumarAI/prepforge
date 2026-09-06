---
qid: ing_a394c8f294__fp__local
question: 'Explain: What is the difference between Bagging and Boosting? | Quantdare'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 427
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:53:53-05:00'
sources: []
---

**From first principles**

Both bagging and boosting are *ensemble* methods that turn a weak predictor into a strong one by combining many models.  
The **fundamental problem** they solve is the bias–variance trade‑off: a single learner may overfit (high variance) or underfit (high bias).  

| Aspect | Bagging | Boosting |
|--------|---------|----------|
| **How data are sampled** | Each base model sees an i.i.d. bootstrap sample of the training set, independently of others. | Models see the *same* data but with adaptive weights that change after each round. |
| **Goal of sampling** | Reduce variance by averaging uncorrelated errors. | Reduce bias by forcing subsequent learners to focus on hard‑to‑predict instances. |
| **Learning objective** | Train each learner independently (e.g., decision trees). | Sequentially minimize a loss function; each new learner corrects the mistakes of the ensemble so far. |
| **Typical base learner** | Any consistent algorithm (trees, SVMs, etc.). | Usually weak learners (stumps or shallow trees). |

**Deeper principle**

Bagging exploits *sampling variability* to decorrelate errors—an application of the law of large numbers in a high‑dimensional space.  
Boosting implements an **online gradient descent** on the empirical risk: each iteration performs a step in function space, guaranteeing that the ensemble’s loss decreases (under convex losses).  

**Non‑obvious insight**

The key to boosting is *weight re‑assignment*, not just error correction. The weights are proportional to the exponential of the negative margin; thus, boosting implicitly learns a **probabilistic model of the class posterior**, whereas bagging merely averages predictions without altering probability estimates. This explains why boosted trees often achieve higher calibration and better performance on imbalanced data than bagged forests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
