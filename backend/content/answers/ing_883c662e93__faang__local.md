---
qid: ing_883c662e93__faang__local
question: 'Explain: Your DPO run improves win rate against the SFT model, but outputs
  are longer, waffly and hedge constantly. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 581
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:01:00-05:00'
sources: []
---

**Clarify**  
You have a *Decision‑Policy Optimizer* (DPO) that now beats your Supervised Fine‑Tuning (SFT) baseline in the win‑rate metric, but its responses are “longer, waffly and hedge constantly.”  Likely issues:  
1. **Reward shaping** – DPO rewards may be too permissive or mis‑aligned with brevity.  
2. **Policy entropy** – high entropy causes over‑exploration → hedging.  
3. **Length bias** – the loss does not penalize verbosity.  

Assumptions to confirm: (a) win‑rate metric is still the same objective; (b) evaluation data hasn’t changed; (c) DPO training hyper‑parameters (learning rate, batch size) are stable.

---

**Approach**  
1. Inspect reward function and its gradients.  
2. Check policy entropy statistics over epochs.  
3. Measure average token length vs. win‑rate.  
4. Add a length penalty or KL‑divergence term to regularize toward the SFT distribution.  

Implement ablations: (i) baseline DPO, (ii) with length penalty, (iii) with controlled entropy.

---

**Depth**  
*Reward*: If the reward is only “win” vs “lose,” the policy may learn to pad with safe wording that still wins but inflates length. Augment the reward with a **brevity bonus**: `R = win_score – λ * log(length)` where λ tunes verbosity.  

*Entropy*: Compute per‑token entropy; if >0.8, clip it or add KL penalty against SFT logits:  
`Loss = -∑ r_i * log p_policy + β * D_KL(p_policy || p_SFT)`.  
Set β to keep policy close to the supervised baseline while still exploring.

*Complexity*: Extra terms are O(V) per token, negligible vs. main loss. Hyper‑parameter search for λ and β is linear in number of trials.

---

**Edge Cases**  
- If λ too high → responses become terse but lose content.  
- Over‑penalizing entropy can freeze exploration, hurting win‑rate.  
- Length penalty may bias against necessary explanations.  
Test on held‑out prompts that require elaboration vs. those needing concise answers.

---

**Optimize & Communicate**  
Iterate λ/β with a grid or Bayesian optimization; monitor both win‑rate and average length. Present findings as “trade‑off curve” to interviewers, highlighting how we balanced performance against output quality without sacrificing the primary metric. This demonstrates clear problem framing, technical depth, and thoughtful evaluation—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
