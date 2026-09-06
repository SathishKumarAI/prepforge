---
qid: ing_cefb627fc3__fp__local
question: 'Explain: 2.3 Dynamic Metrics — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 631
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:20:28-05:00'
sources: []
---

### Why “dynamic metrics” matter

When a large language model (LLM) is distilled *on‑policy*—that is, the student learns while interacting with the teacher’s own generation loop—the usual static loss (cross‑entropy on stored logits) no longer captures what truly drives performance. The problem reduces to **optimizing a non‑stationary objective**: the teacher’s policy evolves as the student changes the environment it sees. If we treat this as an optimization over trajectories, the natural gradient is weighted by the *future* impact of each action on downstream rewards (e.g., perplexity, coherence). A static metric ignores that an early token can alter the entire context and therefore the distribution of subsequent tokens.

### The underlying principle

This dynamic view aligns with **information‑theoretic control**: we wish to minimize the expected *Kullback–Leibler divergence* between teacher and student policies over the *distribution induced by the student’s own rollouts*. Formally,

\[
\mathcal{L}_{\text{dyn}} = \mathbb{E}_{\tau\sim\pi_{\text{student}}}\!\left[\,D_{\mathrm{KL}}\bigl(\pi_{\text{teacher}}(a_t|h_t)\;\|\;\pi_{\text{student}}(a_t|h_t)\bigr)\right],
\]

where \(\tau = (h_1,a_1,\dots,h_T,a_T)\) is a trajectory. The expectation is over the student’s own policy, so gradients propagate through future states—exactly what on‑policy RL does.

### Non‑obvious insight

Most distillation pipelines treat the teacher as a fixed oracle. In reality, **the teacher’s policy is *self‑consistent* with its own generated context**; if the student deviates early, the teacher will be queried on unfamiliar inputs, leading to *distributional shift*. By weighting loss terms according to the *density of trajectories* the student actually visits, dynamic metrics implicitly regularize against this shift—essentially performing a *self‑correcting* KL penalty. This explains why models distilled with dynamic metrics retain far better fluency than those using static cross‑entropy: they learn to stay on the same “trajectory manifold” as the teacher.

### Practical recipe

1. **Roll out** a batch of sequences from the student policy.
2. For each token, compute the KL divergence against the teacher’s logits *conditional on the student‑generated history*.
3. Weight each term by the *product of future action probabilities* (i.e., the likelihood of that trajectory under the student).
4. Backpropagate; optionally add a small entropy bonus to keep exploration.

This procedure turns distillation into a **policy‑matching problem over trajectories**, ensuring the distilled model inherits not only the teacher’s knowledge but also its *dynamics*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
