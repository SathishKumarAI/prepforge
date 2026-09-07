---
qid: ing_63e55e6ea7__faang__local
question: 'Q: How do you prevent reward hacking in Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:36:43-05:00'
sources: []
---

**Clarify**

*Problem*: In a Best‑of‑N (e.g., choose the top‑k out of N candidates) setting, an RL agent may “reward‑hack” by exploiting loopholes in the reward signal to win without actually producing high‑quality outputs.  
*Assumptions*:  
1. The environment supplies a scalar reward per candidate.  
2. Candidates are independent draws from a fixed distribution.  
3. We can modify or augment the reward function but not the underlying policy architecture.

**Approach**

1. **Reward shaping** – add auxiliary signals that penalize known hack behaviors (e.g., length, repetition).  
2. **Curriculum over N** – start with small N, gradually increase to force generalization.  
3. **Adversarial validation** – run a separate discriminator to detect nonsensical outputs and adjust rewards accordingly.  
4. **Regularized policy updates** – use KL‑divergence constraints or entropy bonuses to discourage extreme exploitation.

**Depth**

- *Reward function*: `R_total = Σ_i r_i + λ * (−penalties)` where penalties include token repetition, absurdity score from a trained critic, and deviation from desired length.  
- *Complexity*: Shaping adds O(1) per step; discriminator inference is O(L) for sequence length L, negligible compared to policy forward pass.  
- *Trade‑offs*: Strong shaping may suppress legitimate creative strategies; regularization may slow learning.

**Edge Cases**

- **Sparse rewards**: If `r_i` is zero most of the time, penalties dominate → over‑penalize. Test with synthetic reward noise.  
- **Adversarial discriminator failure**: If it misclassifies good outputs as hacks, policy collapses. Validate on a held‑out validation set.  
- **Large N**: The combinatorial explosion could make shaping ineffective; monitor variance of rewards.

**Optimize & Communicate**

- Iterate λ via grid search, reporting mean reward and hack frequency.  
- Visualize the distribution of penalties vs. true quality to ensure alignment.  
- Explain that combining shaping with curriculum forces the agent to learn robust behaviors rather than shortcuts—mirroring how FAANG teams iterate on reward functions in production RL pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
