---
qid: ing_038395ebfe__fp__local
question: Explain DPO to someone who knows PPO-based RLHF. When would you still choose
  an online RL method?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 590
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:12:44-05:00'
sources: []
---

**Direct Preference Optimization (DPO) vs PPO‑based RLHF**

PPO‑RLHF trains a policy \(π_\theta\) by sampling trajectories from the current policy, labeling them with a reward model \(R_{\phi}\), and applying a clipped surrogate objective

\[
L^{\text{PPO}}(\theta)=\mathbb{E}_{a_t\sim π_{\text{old}}}\!\left[\min(r_t\,A_t,\;\operatorname{clip}(r_t,1-ε,1+ε)\,A_t)\right],
\]

where \(r_t=\frac{π_\theta(a_t|s_t)}{π_{\text{old}}(a_t|s_t)}\) and \(A_t=R_{\phi}-V(s_t)\).  
PPO is *online*: every update requires fresh samples, so it incurs high variance and many policy–rollout pairs.

DPO bypasses the reward model entirely. Given a set of preference pairs \((x_i,x_j)\) where humans prefer \(x_i\) over \(x_j\), DPO directly optimizes

\[
L^{\text{DPO}}(\theta)=\mathbb{E}_{(i,j)}\!\left[\log\sigma\bigl(f_\theta(x_i)-f_\theta(x_j)\bigr)\right],
\]

with \(f_\theta(x) = \log π_\theta(a|s)\) summed over tokens.  
This objective is **log‑likelihood of the softmax preference**; it arises from treating preferences as noisy observations of a latent utility function and applying maximum likelihood under a Bradley–Terry model. Thus DPO turns the *ranking* problem into a convex‑like log‑loss that can be optimized with standard gradient descent on cached trajectories—no extra rollouts, no reward estimator, and no clipping tricks.

**When to still use online RL?**

1. **Dynamic environments or continual learning:** If the true distribution of prompts changes over time (e.g., new user intents), an online policy can adapt by collecting fresh data.
2. **Sparse or highly contextual rewards:** When human preferences are only available on‑the‑fly for novel situations, you need a policy that can learn from each interaction immediately.
3. **Non‑stationary reward models:** If the reward model itself is being updated (e.g., a new fine‑tuned RLHF head), online RL lets you keep the policy aligned with the evolving signal.

In many static deployment scenarios—especially when the preference dataset is large and representative—DPO’s offline, sample‑efficient training yields comparable or better alignment with less computational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
