---
qid: ing_29165e2879__fp__local
question: Explain GRPO. Why did DeepSeek drop the value network that PPO uses?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 722
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:32:45-05:00'
sources: []
---

**GRPO (Gradient‑based Replay Policy Optimization)**  
At its core GRPO is a *policy‑gradient* method that reuses off‑policy trajectories in the same way PPO clips importance ratios, but it does so with an explicit **Gated Recurrent** mechanism: each step’s policy update is multiplied by a gate \(g_t \in [0,1]\) that depends on how much the new policy would change the trajectory distribution.  
Mathematically

\[
L_{\text{GRPO}}(\theta)=
\mathbb E_{(s,a)\sim D}\!\left[\, g_t\,\min\!\Big(r_\theta(a|s)\hat A,\;\operatorname{clip}(r_\theta(a|s),1-\epsilon,1+\epsilon)\hat A \Big) \right],
\]

where \(r_\theta=\pi_\theta/\pi_{\text{old}}\).  
The gate is a cheap surrogate for the true KL divergence; it “turns off” updates that would push the policy too far from the data distribution, thereby preventing large variance spikes.

**Why DeepSeek dropped the value network**

PPO normally estimates the advantage \(\hat A = R_t +\gamma V(s_{t+1})-V(s_t)\) with a separate critic \(V_\phi\).  
DeepSeek replaces this by *reward‑to‑go*:

\[
\hat A_t = \sum_{k=0}^{T-t} \gamma^k r_{t+k},
\]

computed directly from the trajectory.  This has two consequences:

1. **Bias–variance trade‑off** – The critic introduces bias if it overfits to a particular policy; using Monte‑Carlo returns keeps the estimate unbiased (except for truncation) and its variance is already controlled by GRPO’s gating.
2. **Simplicity & robustness** – In sparse‑reward environments a learned value function can become noisy or stuck in local minima; the pure return avoids that pitfall.

*Non‑obvious insight:*  
The gating mechanism essentially learns an *implicit baseline*: when the policy would change the distribution dramatically, GRPO down‑weights the gradient, which is mathematically equivalent to subtracting a baseline that depends on the trajectory’s own likelihood. Thus removing the explicit value network does not increase variance; it merely shifts where the baseline lives—from a neural net to the gating function.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
