---
qid: ing_9ff6a4e8a2__faang__local
question: Explain PPO in the RLHF context. Why is there a KL penalty against a reference
  model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 541
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:56:01-05:00'
sources: []
---

**Clarify**  
We’re asked how Proximal Policy Optimization (PPO) works when used for Reinforcement‑Learning‑from‑Human‑Feedback (RLHF), and why a KL penalty against a *reference* policy is added. Assume the reference model is the base language model that we want to keep “safe” while fine‑tuning it with human preferences.

**Approach**  
1. Outline PPO’s clipped surrogate objective.  
2. Show how RLHF replaces rewards with preference‑based signals.  
3. Explain the KL term as a constraint on divergence from the reference policy.

**Depth**  
PPO maximizes  
\[
L^{\text{CLIP}}(\theta)=\mathbb{E}\Big[\min(r_t(\theta)\hat A_t,\;\text{clip}(r_t(\theta),1-\epsilon,1+\epsilon)\hat A_t)\Big]
\]
where \(r_t(\theta)=\frac{\pi_\theta(a|s)}{\pi_{\theta_{\!old}}(a|s)}\) and \(\hat A_t\) is the advantage derived from a learned reward model.  
In RLHF, the reward model is trained on human pairwise comparisons; its output becomes \(\hat r(s,a)\). The KL penalty
\[
L^{\text{KL}}(\theta)=L^{\text{CLIP}}(\theta)-\beta\,\mathbb{E}[D_{\text{KL}}(\pi_\theta||\pi_{\!ref})]
\]
encourages the fine‑tuned policy \(\pi_\theta\) to stay close to the *reference* policy \(\pi_{\!ref}\). This bounds policy drift, preserves general language capabilities, and mitigates catastrophic forgetting or reward hacking.

**Edge Cases**  
- If \(\beta=0\), the model may diverge wildly, losing base knowledge.  
- Too large \(\beta\) stalls learning; too small causes instability.  
- Poorly calibrated reward models can mislead PPO if KL is ignored.

**Optimize & Communicate**  
Tune \(\beta\) via validation on a held‑out preference set; use adaptive KL (increase when loss spikes). Explain that the penalty acts like a soft constraint, keeping updates within a trust region defined by the reference model’s behavior. This balances safety and performance—exactly what FAANG interviewers look for: clear problem framing, solid algorithmic reasoning, and awareness of practical pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
