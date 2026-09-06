---
qid: ing_b289f26252__fp__local
question: What do RLHF, DPO, and Constitutional AI/RLAIF actually do for safety, and
  why can't a system prompt replace them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 512
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:23:26-05:00'
sources: []
---

**Why RLHF / DPO / Constitutional AI actually improve safety**

The core problem is *alignment*: we want a policy \( \pi_\theta(a|s) \) that maximises user‑desired utility while never harming. A vanilla supervised learner can mimic data but has no incentive to avoid unsafe outputs; it only optimises likelihood \(p_{\text{data}}\).  

1. **RLHF** introduces an external reward model \(R(s,a)\) trained on human preferences (e.g., “prefer answer A over B”). The policy is then updated via policy‑gradient or PPO so that
\[
\mathbb{E}_{s}\big[ R(s,\pi_\theta(\cdot|s)) \big] \uparrow ,
\]
which explicitly biases the learner toward behaviours humans rate safe.  
2. **DPO** replaces the costly RL loop with a *direct* objective:
\[
L_{\text{DPO}} = -\log \frac{\exp(r(s,a)/\tau)}{\exp(r(s,a)/\tau)+\exp(r(s,\tilde a)/\tau)},
\]
where \(\tilde a\) is a baseline action. This gradient is analytically tractable and converges to the same fixed point as RLHF but with far fewer samples.  
3. **Constitutional AI/RLAIF** encode safety rules as a *policy‑level constraint* \(C(s,a)\). The reward model is augmented:
\[
R'(s,a)= R_{\text{human}}(s,a) + \lambda\, C(s,a),
\]
so the policy learns to satisfy logical desiderata (e.g., “never reveal personal data”) while still maximizing human‑valued utility.

**Why a prompt can’t replace them**

A system prompt only shapes *prior* behaviour via static logits. It lacks a learning signal that adapts to new contexts or counter‑examples. The above methods provide an *online*, *data‑driven* objective that continually corrects drift, whereas a prompt is fixed and cannot backpropagate through future interactions. Moreover, prompts can be overridden by higher‑level rewards; the reinforcement framework guarantees convergence to policies that satisfy both human preferences and constitutional constraints, something static prompting cannot ensure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
