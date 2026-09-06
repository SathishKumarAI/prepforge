---
qid: ing_6a09ab6082__fp__local
question: Design the output representation for a behaviour prediction model. What
  metrics would you gate it on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 406
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:50:21-05:00'
sources: []
---

**Output Representation**

Let the model predict a *behaviour vector*  
\(b=(p_{1},\dots ,p_{K})\in[0,1]^{K}\) where each component is the probability that the user will perform action \(k\) in the next time step.  The vector is **soft** (not one‑hot) because real users often exhibit *partial* engagement: e.g., they may skim a post and later click it.  To encode this, we use a *multivariate Bernoulli likelihood* and impose a *Dirichlet prior* over \(b\).  This yields the joint posterior

\[
P(b|x)=\text{Dir}(b;\alpha+f(x)),
\]

where \(f(x)\) is the neural encoder output.  The Dirichlet captures uncertainty and allows us to marginalise over unseen actions, a property that pure cross‑entropy loss lacks.

**Gating Metrics**

1. **Calibration error (ECE)** – guarantees that predicted probabilities match empirical frequencies; essential when decisions depend on risk thresholds.  
2. **Mutual information between \(b\) and the true action** – measures *informational gain* beyond baseline, aligning with the principle of maximizing expected utility.  
3. **Entropy regularisation** – penalises over‑confident predictions that could lead to brittle policies in non‑stationary environments.  

Non‑obvious insight: *Mutual information serves as a proxy for exploration value.* A high MI indicates that observing the true action will substantially reduce uncertainty, signalling when an agent should actively probe (e.g., ask a clarifying question). This bridges prediction with active learning, ensuring the model not only predicts but also knows when it needs more data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
