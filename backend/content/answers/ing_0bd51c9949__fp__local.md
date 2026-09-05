---
qid: ing_0bd51c9949__fp__local
question: 'Explain: 2.2 On-Policy Distillation — Rethinking On-Policy Distillation
  of Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 734
total_tokens: 928
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:09-05:00'
sources: []
---

**On‑policy distillation for LLMs: a principled view**

The goal is to transfer knowledge from a *teacher* language model (LM) \(T\) into a *student* LM \(S\) so that \(S\) reproduces the teacher’s distribution over next tokens while being cheaper to run.  
A naïve “offline” distillation samples \((x, y)\) pairs from a static corpus and minimizes
\[
\mathcal{L}_{\text{off}}=\mathbb{E}_{(x,y)}[-\log S(y|x)].
\]
However, language generation is sequential: the distribution of future tokens depends on *previous* predictions. If \(S\) is trained only on teacher‑generated prefixes, it may learn to mimic a teacher that itself never had to correct its own mistakes—an *off‑policy* mismatch.

**On‑policy distillation** resolves this by letting \(S\) generate prefixes and then asking the teacher to label those exact prefixes. Formally,
\[
\mathcal{L}_{\text{on}}=\mathbb{E}_{x\sim D}\;\mathbb{E}_{y_{1:T}\sim S}[-\log T(y_t|x,y_{<t})],
\]
where the inner expectation is over sequences produced by \(S\). This loss is an *importance‑weighted* estimate of
\[
\mathbb{E}_{x}\;\mathbb{E}_{y\sim S}[D_{\text{KL}}(T(\cdot|x,y_{<t})\,||\,S(\cdot|x,y_{<t}))],
\]
which is minimized when \(S\) matches the teacher’s predictive distribution **under its own trajectory**. The process is a *policy gradient* with zero‑variance baseline: each token is weighted by the log‑likelihood ratio \(\log S/T\), which cancels out because we train directly on teacher scores.

### Why it works
1. **Distribution alignment:** By sampling from \(S\) itself, the student learns to correct its own biases; the teacher’s feedback becomes *on‑policy*.
2. **Variance reduction:** The loss is a direct expectation over teacher logits, avoiding high‑variance REINFORCE estimators.
3. **Implicit regularization:** The KL term penalizes large deviations from the teacher, ensuring that the student stays close to a well‑regularized prior.

### Non‑obvious insight
The *recipe* (teacher “labels” student‑generated prefixes) is essentially performing **self‑supervised learning with an external oracle**. This mirrors variational inference: we approximate the posterior \(p(y|x)\) (the teacher’s distribution) by a simpler model \(q_S(y|x)\). The on‑policy loss is then the evidence lower bound (ELBO) without a reconstruction term—only the KL divergence is optimized, but *under the student’s own sampling distribution*. This perspective explains why even a very small student can match the teacher’s performance: it learns to approximate the posterior directly rather than fitting raw data.

In short, on‑policy distillation is not merely “teach‑to‑follow”; it is an efficient, policy‑aware variational inference that guarantees alignment between teacher and student trajectories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
