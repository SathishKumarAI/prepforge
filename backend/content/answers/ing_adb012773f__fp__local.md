---
qid: ing_adb012773f__fp__local
question: 'Explain: 2.1 Notation — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 659
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:13:54-05:00'
sources: []
---

### Why the paper re‑writes the notation

A language model (LM) is a stochastic map  
\[
p_\theta(\mathbf{x}) = \prod_{t=1}^{T} p_\theta(x_t|\mathbf{x}_{<t}),
\]
where \(\theta\) denotes parameters and \(\mathbf{x}\) a token sequence.  
On‑policy distillation (OPD) trains a *student* \(q_\phi\) to imitate the *teacher* \(p_\theta\) **while it is actively generating** tokens, i.e., sampling from its own distribution. The fundamental problem OPD solves is: how to keep the student’s trajectory aligned with the teacher’s when the student’s policy changes during training.

The paper introduces a *trajectory‑level notation* that makes this alignment explicit:

| Symbol | Meaning | Why it matters |
|--------|---------|----------------|
| \(\tau = (x_1,\dots,x_T)\) | A full token trajectory | Captures dependencies across time |
| \(P_\theta(\tau)\) | Teacher’s probability of \(\tau\) | Baseline to be matched |
| \(Q_{\phi}^{(k)}(\tau)\) | Student’s distribution at training step \(k\) | Evolves during OPD |
| \(\mathcal{L}_{\text{KL}}^{(k)} = \mathbb{E}_{P_\theta}[\log P_\theta(\tau)-\log Q_{\phi}^{(k)}(\tau)]\) | KL loss over trajectories | Drives alignment |
| \(\lambda_k\) | On‑policy weighting schedule | Controls how aggressively student follows teacher |

These symbols expose the **geometry of policy space**: OPD is a trajectory‑level gradient descent on the KL divergence between two probability measures on the *same manifold* (the set of all token sequences). The key insight most miss is that **sampling from \(Q_{\phi}^{(k)}\) while computing gradients re‑weights the expectation to the student’s own support**, which guarantees that updates are *in‑distribution*. This contrasts with off‑policy distillation, where the student may drift into regions unseen by the teacher, leading to compounding errors.

### The recipe in a nutshell

1. **Sample** trajectories \(\tau^{(k)}\) from \(Q_{\phi}^{(k)}\).  
2. **Compute** the log‑ratio \(\log P_\theta(\tau^{(k)}) - \log Q_{\phi}^{(k)}(\tau^{(k)})\).  
3. **Weight** this by a schedule \(\lambda_k\) that decays as \(Q_{\phi}\) converges to \(P_\theta\).  
4. **Back‑propagate** through the student network using the trajectory‑level loss.

This notation turns OPD from an intuition‑driven trick into a principled optimisation problem on probability measures, revealing why it can succeed even when the teacher and student architectures differ dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
