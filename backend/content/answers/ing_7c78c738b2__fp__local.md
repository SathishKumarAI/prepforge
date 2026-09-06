---
qid: ing_7c78c738b2__fp__local
question: 'Explain: Top- k k OPD. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 503
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:30:02-05:00'
sources: []
---

### Top‑k kOPD – a principled on‑policy distillation for LLMs  

**Problem statement**  
Large language models (LLMs) possess an *implicit policy* \(\pi_\theta(a|x)\): the probability of generating token \(a\) given context \(x\). When fine‑tuning or deploying a smaller student, we wish to preserve this policy while reducing computation. Traditional distillation forces the student to match all logits; however, most tokens are low‑probability and noisy, so matching them is wasteful.

**Why “top‑k” matters**  
In a probability distribution, entropy is dominated by the head of the mass. If we only enforce alignment on the *k* highest‑probability actions (the top‑k), we capture almost all the information needed for correct generation. The remaining tail contributes negligibly to expected reward and can be ignored without harming performance.

**On‑policy justification**  
During generation, the model samples from its own policy. Thus the distribution of contexts \(x\) that appear in training is exactly the one encountered at inference time—hence *on‑policy*. If we train only on those contexts (via self‑generated rollouts), we avoid covariate shift and guarantee that the student learns to act under the same circumstances as the teacher.

**Recipe**  
1. Sample a trajectory \((x_t, a_t)\) from the teacher’s policy.  
2. Compute the top‑k actions \(A_k(x_t)\).  
3. Minimise KL\(\bigl(\pi_{\text{teacher}}(·|x_t)\,\Vert\,\pi_{\text{student}}(·|x_t)\bigr)\) only over \(A_k(x_t)\).  
4. Repeat until convergence.

**Non‑obvious insight**  
The *k* that optimises performance is not proportional to model size but to the entropy of the teacher’s policy at each step. In low‑entropy regimes (e.g., deterministic prompts), a very small k suffices; in high‑entropy settings, k must grow logarithmically with vocabulary size to capture sufficient mass. This adaptive behaviour explains why a fixed k often works well across diverse LLMs—because the entropy naturally scales with model capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
