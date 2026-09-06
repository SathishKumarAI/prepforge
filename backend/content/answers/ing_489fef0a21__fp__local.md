---
qid: ing_489fef0a21__fp__local
question: 'Explain: 1 Introduction — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 466
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:48-05:00'
sources: []
---

**Why on‑policy distillation matters**

Large language models (LLMs) are trained by *teacher–student* pipelines: a powerful teacher generates synthetic data, and a smaller student learns to imitate it. The traditional recipe freezes the teacher’s policy and feeds its outputs as training targets—this is *off‑policy*. However, the student’s own policy changes during learning; if we keep sampling from an outdated teacher distribution, the student receives mismatched gradients, leading to “distribution shift” and sub‑optimal convergence.

**Fundamental principle: Bayesian consistency**

Treat the teacher’s logits \(t(x)\) as a posterior over next tokens given context \(x\). The student’s policy \(s_\theta(x)\) should approximate this posterior. If we sample from \(t\), we condition on the teacher’s own belief; if we instead sample from \(s_\theta\), we *re‑weight* the data by the student’s current uncertainty, exactly as in importance sampling for Bayesian inference. This yields a **self‑normalizing gradient** that respects both priors (teacher) and likelihoods (student predictions).

**Non‑obvious insight**

The “on‑policy” trick does more than avoid distribution shift; it implicitly regularizes the student’s entropy. By feeding samples from \(s_\theta\), we penalize overconfident predictions that diverge from the teacher, because the KL divergence term in the loss becomes a *mutual information* estimator between student and teacher distributions. Thus on‑policy distillation simultaneously corrects shift **and** encourages calibration.

**Recipe**

1. Initialize student with teacher logits as soft targets.  
2. At each iteration, sample next tokens from current \(s_\theta\).  
3. Compute loss = KL\((t \| s_\theta)\) + λ · KL\((s_\theta \| t)\), where λ tunes entropy regularization.  
4. Update \(\theta\) with Adam; repeat until convergence.

This principled loop guarantees that the student learns a policy coherent with both teacher knowledge and its evolving uncertainty, yielding faster, more stable distillation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
