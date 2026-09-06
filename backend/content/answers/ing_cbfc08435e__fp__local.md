---
qid: ing_cbfc08435e__fp__local
question: 'Explain: Implementation — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 423
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:07-05:00'
sources: []
---

**On‑policy distillation** is a learning paradigm that turns the *feedback loop* of an agent into a supervisory signal for a student network.  
The core problem it solves: an agent trained with reinforcement learning (RL) often explores sub‑optimal trajectories, wasting samples and amplifying variance. By letting the agent act in its own environment (*on‑policy*) we obtain state–action pairs \((s,a)\) that are *relevant* to the current policy. The teacher (the RL agent) supplies a soft target distribution over actions \(p_{\theta}(a|s)\). A second network, the student, is trained with cross‑entropy loss against these targets while simultaneously receiving its own environment rewards.

Why must it work this way?  
1. **Statistical efficiency** – On‑policy samples are guaranteed to be drawn from the policy’s support; off‑policy data can mislead a distillation objective because the student may never visit those states.  
2. **Regularization by entropy** – The soft targets encode uncertainty, preventing overconfident actions that would otherwise propagate errors during exploration.  
3. **Gradient alignment** – The cross‑entropy loss is exactly the negative log‑likelihood of the teacher’s policy; optimizing it aligns the student’s logits with the teacher’s action preferences.

The deeper principle is *information bottleneck*: distillation compresses the high‑dimensional trajectory distribution into a concise parametric representation, preserving only those bits that maximize mutual information between states and optimal actions.  

**Non‑obvious insight:** When the teacher’s policy is near‑optimal, its entropy becomes low; yet a tiny amount of remaining stochasticity can be *leveraged* by the student to escape local minima during fine‑tuning. Thus, preserving some teacher uncertainty (rather than hard‑argmaxing) often yields better generalization on unseen states.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
