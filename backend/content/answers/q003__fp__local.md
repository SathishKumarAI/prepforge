---
qid: q003__fp__local
question: Explain the difference between supervised, unsupervised, and reinforcement
  learning.
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 579
total_tokens: 752
web_searches: 0
cost_usd: 0.0
sources: []
---

In a learning system we always face **the same fundamental problem**: *how to map input data \(x\) to an output \(y\) that maximises some objective*.  
The three paradigms differ only in the form of information available about this objective.

| Paradigm | What is supplied | Objective function |
|----------|------------------|--------------------|
| **Supervised** | Exact pairs \((x,y)\) | Minimise prediction error \(\mathbb{E}\bigl[(\hat y(x)-y)^2\bigr]\). |
| **Unsupervised** | Only \(x\)’s | Maximise data‑likelihood or minimise reconstruction error, e.g. \(\max_{\theta}\log p_\theta(x)\) or \(\min_{\theta}\|x-\hat x_\theta(x)\|^2\). |
| **Reinforcement** | Sequence of states \(s_t\), actions \(a_t\), and delayed rewards \(r_t\) | Maximise expected cumulative reward \(\mathbb{E}\bigl[\sum_{t} \gamma^t r_t\bigr]\). |

### Why these forms arise

1. **Supervised**: We *know* the desired output; the loss is simply distance to it—an instance of supervised regression/classification, a direct application of empirical risk minimisation.

2. **Unsupervised**: The goal is to discover structure that explains the data distribution itself. Maximising likelihood or minimizing reconstruction error are natural because they correspond to *information‑theoretic* compression (minimum description length) and *geometric* fidelity in latent space.

3. **Reinforcement**: Here the outcome of an action is not immediate; we must consider future consequences. The Bellman optimality principle turns this into a dynamic programming problem, turning the learning objective into a stochastic optimisation over trajectories—an instance of sequential decision theory.

### Non‑obvious insight

All three can be unified under **variational inference**:  
- Supervised loss is a special case where the posterior over \(y\) collapses to a point mass.  
- Unsupervised learning is equivalent to inferring latent variables with a prior, i.e., a variational auto‑encoder formulation.  
- Reinforcement learning can be cast as *posterior regularised* optimisation, where the policy distribution is constrained by expected returns.

Thus, at their core, these paradigms are simply different ways of specifying what part of the joint distribution over \((x,y)\) (or \((s,a,r)\)) we observe and how we wish to approximate or optimise it.
