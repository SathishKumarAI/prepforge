---
qid: ing_6315a3afb2__fp__local
question: 'Explain: Rethinking On-Policy Distillation of Large Language Models: Phenomenology,
  Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 599
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:35:40-05:00'
sources: []
---

**Why distill a large language model (LLM) *on‑policy*?**  
An LLM is a stochastic policy \(p_\theta(y|x)\) that samples text. When we fine‑tune on downstream data, the *behavioral distribution* shifts: new contexts, styles, or constraints alter the output statistics. If we train a smaller student \(q_\phi\) only with supervised cross‑entropy against ground truth (off‑policy), it never sees these altered trajectories and thus cannot match the teacher’s *on‑distribution* performance.

**Mechanism – a variational view**  
We seek to minimise the Kullback–Leibler divergence between student and teacher over all *possible* sampled sequences:
\[
\min_\phi \; \mathbb{E}_{x}\!\Big[\, D_{\!KL}(p_\theta(\cdot|x)\,\Vert\, q_\phi(\cdot|x)) \Big].
\]
Because the expectation is taken over the teacher’s own sampling distribution, we are effectively performing *policy‑space variational inference*. The gradient becomes a re‑weighted log‑probability:
\[
\nabla_\phi \approx -\mathbb{E}_{y\sim p_\theta}\!\big[\, \nabla_\phi \log q_\phi(y|x)\,\big],
\]
which is precisely the on‑policy objective. This contrasts with off‑policy distillation that would use a fixed dataset of teacher outputs.

**Phenomenology – why it matters**  
Empirically, on‑policy distillation preserves *coverage* (the student can generate rare but correct tokens) and *diversity*, because the student is exposed to the full distribution of teacher rollouts rather than a biased sample. It also mitigates *mode collapse*: the student does not overfit to the most frequent outputs.

**Recipe for practice**  
1. **Sample trajectories** from the teacher using its own decoding policy (e.g., nucleus sampling).  
2. **Compute per‑token importance weights** as the teacher’s log‑probabilities; optionally clip extremes.  
3. **Update the student** with weighted cross‑entropy, optionally adding a small entropy regulariser to encourage exploration.  
4. **Iterate**: after each update, resample from the *updated* teacher (or keep the original) to maintain stability.

**Non‑obvious insight**  
On‑policy distillation is essentially *self‑supervised curriculum learning*: the teacher’s own uncertainty guides the student’s focus, automatically prioritising tokens where the teacher is most confident. This aligns with the principle of **information bottleneck**, ensuring that only the most informative parts of the policy are transferred, yielding compact yet powerful students.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
