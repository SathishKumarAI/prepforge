---
qid: ing_e294f26dc2__fp__local
question: 'Explain: Online Alignment — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 536
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:01:37-05:00'
sources: []
---

### Online Alignment – From RL‑HF to DPO

At its core the problem is *inference with a human‑derived reward*: we want a policy π that maximises a latent utility function \(U\) that humans implicitly endorse, but we never observe \(U\) directly.  
The first principled approach, **RL‑HF (Reinforcement Learning from Human Feedback)**, casts this as an online bandit problem: after each generated trajectory \(\tau\), a human annotator supplies a scalar preference \(r(\tau)\). We then treat the policy as a stochastic controller and update it by maximizing expected reward under a **soft‑max** surrogate  
\[
L_{\text{RLHF}} = \mathbb{E}_{\pi}\!\left[ r(\tau) - \lambda\,\mathrm{KL}(\pi||\pi_{\text{prior}})\right].
\]
The KL term enforces *conservative updates*, preventing catastrophic policy drift when the reward signal is sparse or noisy. This mirrors the principle of **information‑theoretic regularisation**: we only deviate from prior knowledge as much as the data justify.

**Direct Preference Optimization (DPO)** refines this idea by learning directly from pairwise human comparisons \((\tau_i,\tau_j)\). Instead of sampling trajectories and then estimating rewards, DPO trains a *scoring function* \(s_\theta(\tau)\) to satisfy
\[
P_{\text{human}}(\tau_i \succ \tau_j) = \sigma\!\bigl(s_\theta(\tau_i)-s_\theta(\tau_j)\bigr),
\]
where \(\sigma\) is the logistic sigmoid. The loss
\[
L_{\text{DPO}} = -\log\sigma\!\bigl(s_\theta(\tau_i)-s_\theta(\tau_j)\bigr)
\]
directly optimises the *pairwise likelihood*, sidestepping reward estimation and the attendant variance. DPO’s non‑obvious insight: **by treating preferences as a *ranking* problem, we avoid bootstrapping from an ill‑defined scalar reward and instead learn a consistent ordering that is more stable under human noise**.

Both methods rest on the same deep principle—optimising expected utility under uncertainty—but DPO leverages *relative* judgments to reduce variance, yielding faster convergence and cleaner alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
