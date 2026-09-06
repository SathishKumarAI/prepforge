---
qid: ing_9ff6a4e8a2__fp__local
question: Explain PPO in the RLHF context. Why is there a KL penalty against a reference
  model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 634
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:35-05:00'
sources: []
---

**Why Proximal Policy Optimization (PPO) works in RL‑HF**

The core problem in reinforcement learning with human feedback is: *we have a reward signal that is noisy and sparse, so we must learn a policy that stays close to what humans deem acceptable while still exploring improvements*.  
PPO tackles this by **clipping the likelihood ratio** \( r(\theta)=\frac{\pi_\theta(a|s)}{\pi_{\theta_{\text{old}}}(a|s)} \) in the objective

\[
L^{\text{CLIP}}(\theta)=\mathbb E\!\left[\min\bigl(r(\theta)\hat A,\;\operatorname{clip}(r(\theta),1-\epsilon,1+\epsilon)\hat A\bigr)\right].
\]

The clipping guarantees that the new policy cannot deviate too far from the old one in a single update; this is an *implicit trust‑region* that prevents catastrophic policy collapse caused by high‑variance advantage estimates.

**KL penalty against a reference model**

In RLHF we often maintain a *reference policy* \(\pi_{\text{ref}}\) (e.g., the pretrained language model). The loss becomes

\[
L^{\text{PPO-TR} } = L^{\text{CLIP}} - \beta\, D_{\!KL}\!\bigl[\pi_\theta(\cdot|s)\,\|\,\pi_{\text{ref}}(\cdot|s)\bigr].
\]

*Why this term?*  
1. **Safety & human alignment** – the KL acts as a *soft constraint* that penalizes moving too far from the known, safe behaviour of \(\pi_{\text{ref}}\).  
2. **Regularisation in high‑dimensional action spaces** – language models output millions of logits; without a reference, PPO can drift into degenerate regions where the KL is near zero but the policy outputs nonsensical text. The penalty keeps the search manifold well‑conditioned.  
3. **Information‑theoretic interpretation** – minimizing \(D_{\!KL}\) maximises mutual information between the new and reference policies, ensuring that the updated policy retains *useful structure* (e.g., syntax, factual consistency).

**Non‑obvious insight**

The KL penalty does more than prevent divergence; it **biases exploration toward “human‑like” directions**. Because \(D_{\!KL}\) is asymmetric, penalising \(\pi_\theta\!\|\!\pi_{\text{ref}}\) encourages the agent to *improve* while staying within the manifold of human‑approved behaviours—effectively turning KL into a *policy prior*. This turns RLHF from a blind reward maximisation problem into a *constrained optimisation* that respects the inductive bias baked into the pretrained model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
