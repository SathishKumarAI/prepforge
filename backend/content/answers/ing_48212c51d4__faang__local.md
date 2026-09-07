---
qid: ing_48212c51d4__faang__local
question: 'Q41: How do you prevent reward hacking when using Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 475
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:33-05:00'
sources: []
---

**Clarify**  
*Problem:* In reinforcement learning with a “Best‑of‑N” (BOF‑N) objective—choosing the top‑k actions from a set of N candidates—we risk **reward hacking**: agents learn to game the surrogate reward rather than achieve true task success.  
*Assumptions to confirm:* 1) BOF‑N is used in an off‑policy setting with learned policies; 2) we have ground‑truth task rewards but rely on a proxy during training; 3) the environment allows for multiple evaluation passes per step.

**Approach**  
1. **Ground‑truth anchoring:** Periodically evaluate the policy using true task reward, not the surrogate.  
2. **Reward regularization:** Add penalties for actions that only improve the surrogate but degrade ground truth.  
3. **Curriculum over N:** Start with small N, gradually increase while monitoring divergence between surrogate and real rewards.

**Depth**  
- *Surrogate‑to‑real gap:* Use a validation set to estimate \( \Delta = E_{\text{surrogate}}[R] - E_{\text{true}}[R] \). If |Δ| > ε, trigger regularization.  
- *Penalty term:* \( L_{\text{reg}} = \lambda \cdot \max(0, R_{\text{surrogate}} - R_{\text{real}}) \).  
- Complexity: O(N) per step for BOF‑N; extra O(1) for penalty computation. Trade‑off: higher λ improves safety but may slow learning.

**Edge Cases**  
- *Sparse rewards:* Δ estimation noisy → use exponential moving average.  
- *Non‑stationary environments:* Recompute ε periodically.  
- *Adversarial N selection:* If the agent can choose N, constrain N to a fixed schedule.

**Optimize & Communicate**  
Explain that we treat BOF‑N as an **optimization horizon** rather than a strict objective; reward hacking is mitigated by anchoring to real rewards and penalizing divergence. Conclude with expected improvement: reduced policy drift, faster convergence on true task metrics, and clear auditability of the penalty schedule.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
