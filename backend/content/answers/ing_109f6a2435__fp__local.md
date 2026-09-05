---
qid: ing_109f6a2435__fp__local
question: What are MCP's sampling and elicitation primitives for, and why does hardly
  anyone use them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 616
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:40:53-05:00'
sources: []
---

**MCP’s sampling and elicitation primitives** were engineered to give a *generic, information‑theoretic* handle on two perennial AI problems:

| Primitive | Core idea | What it solves |
|-----------|-----------|----------------|
| **Sampling** | Draw from the joint distribution of model states via an unbiased Markov chain (e.g., Gibbs or Metropolis–Hastings). | Approximate expectations when analytic forms are intractable, thereby enabling posterior inference and uncertainty quantification. |
| **Elicitation** | Query‑selection rules that maximize expected information gain (mutual information between the query answer and the target variable). | Reduce human effort by asking only the most informative questions, useful for active learning or crowdsourcing. |

### Why the primitives sound elegant

Both rely on a *deep principle*: any probabilistic model can be explored by a random walk that preserves its stationary distribution, while an optimal question is one that maximally reduces entropy about what we care about. In theory they guarantee convergence (sampling) and asymptotic optimality (elicitation).

### Why almost nobody uses them

1. **Computational burden** – A full Markov chain can take thousands of iterations to mix; for high‑dimensional vision or language models this is prohibitive.
2. **Implementation friction** – Writing a correct Gibbs sampler requires hand‑crafting conditional distributions; many practitioners prefer off‑the‑shelf gradient‑based inference (e.g., variational autoencoders).
3. **Practical suboptimality** – The “information‑gain” criterion assumes perfect modeling of uncertainty, which rarely holds in real data; greedy heuristics or simple uncertainty sampling often perform comparably with far less overhead.
4. **Limited tooling** – Most ML libraries expose stochastic gradient descent and basic active‑learning loops, but not a plug‑in for MC sampling or entropy‑based question design.

### One non‑obvious insight

The *sampling* primitive can be turned into an *implicit regularizer*: by forcing the model to generate many plausible outputs (via a long Markov chain) before training, one effectively augments the dataset with its own uncertainty estimates. This “self‑bootstrapping” has been shown to improve robustness in few‑shot settings, yet it is rarely exploited because practitioners think sampling is only for inference, not training.

In short, MCP’s primitives sit at the intersection of theory and practice but are stifled by cost, complexity, and a lack of ready‑made libraries that expose their full power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
