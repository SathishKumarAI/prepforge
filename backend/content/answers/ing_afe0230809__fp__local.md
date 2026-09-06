---
qid: ing_afe0230809__fp__local
question: 'Explain: RLHF and DPO (Alignment)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 617
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:27-05:00'
sources: []
---

**Why we need a *learning signal* that is human‑centric**

A language model (LM) learns by minimizing a loss over tokens, but its raw objective—predicting the next word—does not encode what humans actually value. The fundamental problem is: **how do we shape an agent’s policy so that it behaves in ways we approve of?**  
The solution comes from *inverse reinforcement learning* (IRL): we observe demonstrations and infer a reward function \(R\) such that the demonstrated behavior maximizes expected return \(\mathbb{E}_\pi[R]\). In practice, humans can’t give perfect rewards; they provide preference judgments between short model outputs. These preferences act as *partial observations* of an underlying utility function.

**RLHF (Reinforcement Learning from Human Feedback)**  
1. **Collect pairwise human comparisons** \((x_i,y_{i}^{(1)}),\;(x_i,y_{i}^{(2)})\).  
2. Train a *reward model* \(r_\phi(x, y)\) to predict the probability that \(y^{(1)}\succ y^{(2)}\).  
3. Use policy gradient (e.g., PPO) to optimize the LM’s parameters \(\theta\) for higher expected reward: \(\nabla_\theta J = \mathbb{E}_{x,y}\bigl[\nabla_\theta \log p_\theta(y|x)\,r_\phi(x,y)\bigr]\).  
The key insight: **the reward model is a learned surrogate of human utility; RL then aligns the LM’s distribution with that utility.**

**DPO (Direct Preference Optimization)**  
Instead of an intermediate reward network, DPO derives a *closed‑form* policy update from the same pairwise data:
\[
p_\theta(y|x) \propto \exp\!\bigl(\alpha\,r_{\text{human}}(y|x)\bigr),
\]
where \(r_{\text{human}}\) is the logit difference of human scores. The objective becomes a *Bregman divergence* minimization between the model’s distribution and the implicit preference‑induced distribution, yielding an exact gradient:
\[
\nabla_\theta J = \mathbb{E}_{x,y}\bigl[\nabla_\theta \log p_\theta(y|x)\,(1 - p_{\text{human}}(y^{(1)}\succ y^{(2)}))\bigr].
\]
**Non‑obvious insight:** DPO eliminates the need for a separate reward network, reducing variance and bias introduced by reward approximation. It shows that *alignment can be achieved directly through probability reweighting derived from human pairwise preferences*, unifying RLHF’s empirical success with a principled statistical foundation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
