---
qid: ing_b6fd1ca8db__fp__local
question: 'Explain: Uh, you''re doing a federated model here — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 413
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:33:04-05:00'
sources: []
---

**Federated learning as a *distributed Bayesian inference***

The core problem is to let many users contribute data that improves a shared statistical model without ever moving their raw data to a central server.  
From first principles: we want the posterior \(P(\theta|x_1,\dots ,x_N)\) of parameters \(\theta\) given all local datasets \(x_i\). Bayes’ rule gives  

\[
P(\theta|x_{1:N}) \propto P(\theta)\prod_{i=1}^N P(x_i|\theta).
\]

If each client can compute its *local likelihood* \(L_i(\theta)=P(x_i|\theta)\) and only send a summary of that function (or its gradient), the server can multiply them to obtain the global posterior. This is the essence of **federated learning**.

The deeper principle is *information geometry*: the product of local likelihoods is equivalent to moving along geodesics in the space of probability distributions, so the federated aggregation preserves the natural curvature of the model’s parameter manifold.

**Non‑obvious insight:**  
Because the server never sees raw data, it can only approximate the product by exchanging *sufficient statistics* (e.g., gradients or second moments). In high‑dimensional models this approximation becomes a *variational* step; the quality of the global posterior hinges on how well each client’s local statistic captures the curvature of its likelihood. Thus, federated learning is not just privacy‑preserving—it is an instance of distributed variational inference where communication constraints dictate the choice of sufficient statistics.

Google Wave’s 2009 prototype used this idea to let many clients collaboratively update a shared language model while keeping user edits locally, illustrating early practical deployment of federated Bayesian inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
