---
qid: ing_058ff1991c__fp__local
question: Walk me through training a reasoning model with RLVR. Why GRPO instead of
  PPO, and what breaks in practice?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 657
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:17:18-05:00'
sources: []
---

**Why we train a reasoning model with RLVR**

A reasoning model must *choose* the next inference step so that a final answer satisfies a reward signal (e.g., correctness). The policy \(π_\theta(a|s)\) maps a partial derivation \(s\) to an action \(a\) (next token, sub‑step). We want to maximize expected cumulative reward  
\(J(θ)=E_{τ∼π_θ}[R(τ)]\), where \(τ=(s_0,a_0,…,s_T)\).  
Because the environment is deterministic but high‑dimensional and rewards are sparse (only at the end), we use **RL with Value‑based Rewards (RLVR)**: a value function \(V(s)\) estimates future reward from each state, enabling *self‑critical* policy gradients that reduce variance.

**Why GRPO beats PPO**

PPO enforces a clipped surrogate objective  
\(\min_\theta E[ \min(r(θ)L, clip(r(θ),1-ε,1+ε)L)]\).  
It assumes the policy can be updated locally; however, in reasoning tasks the action space is *structured* (long sequences of tokens) and the reward landscape has sharp cliffs. PPO’s clipping often under‑updates when \(r(θ)\) moves far from 1, causing **policy collapse**: the model sticks to a few “good” prefixes but never explores alternative proofs.

GRPO (Gradient‑based Policy Optimisation for Reasoning) replaces the surrogate with an *exact* policy gradient that incorporates the learned value function as a baseline:
\[
∇_θ J(θ)=E_{τ}[∑_t ∇_θ \log π_\theta(a_t|s_t)\, (R_t - V(s_t))].
\]
Because \(V(s_t)\) is continually updated, GRPO can take larger, direction‑aware steps even when the likelihood ratio deviates from 1. This aligns with **policy improvement** theory: the gradient points toward higher‑value actions regardless of clipping.

**What breaks in practice**

- **Non‑stationary value estimates**: As \(π_\theta\) changes, \(V(s)\) lags, leading to biased gradients and oscillations.
- **Exploration–exploitation imbalance**: Reasoning models tend to repeat successful sub‑proofs; without an explicit exploration bonus (e.g., entropy regularisation), the policy can overfit to a narrow set of derivations.

**Non‑obvious insight**

The key is that *value estimates act as a dynamic trust region* for the policy. When \(V(s)\) predicts high reward, GRPO naturally allows larger updates; when it predicts low reward, it dampens them—exactly what PPO’s clipping attempts to emulate statically. Thus, GRPO inherits PPO’s stability while exploiting the richer information provided by the value function, which is essential for sparse‑reward reasoning tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
