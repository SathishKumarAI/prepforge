---
qid: ing_806d1eb0ff__fp__local
question: 'Explain: Training an internal assistant — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 617
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:35-05:00'
sources: []
---

**On‑policy distillation for training an internal assistant**

*Fundamental problem.*  
An internal assistant must act in a real‑time environment (e.g., customer support) while preserving user privacy and avoiding data leakage. The expert policy (human operator or high‑fidelity simulator) knows how to respond, but we cannot expose it to every new query. We therefore want a *student* network that mimics the expert’s decisions **without** direct access to sensitive inputs.

*Why on‑policy?*  
In standard imitation learning the student learns from a static dataset of state–action pairs. If the environment changes (new products, slang), the distribution shifts and the policy degrades. On‑policy distillation solves this by letting the student interact with the *same* environment that generated the expert’s behavior. Each step the student receives the current observation and is rewarded for matching the expert’s action. Because the student’s trajectory influences future states, its loss surface aligns with the true distribution of states it will encounter.

*Derivation.*  
Let \( \pi_E(a|s) \) be the expert policy and \( \pi_\theta(a|s) \) the student. The on‑policy objective is  

\[
J(\theta)=\mathbb{E}_{s_t\sim d_{\pi_\theta}}\Big[ -\log \pi_\theta(a^*_t|s_t)\Big],
\]

where \(a^*_t=\arg\max_a \pi_E(a|s_t)\) and \(d_{\pi_\theta}\) is the state distribution induced by \(\pi_\theta\). The gradient becomes  

\[
\nabla_\theta J = -\mathbb{E}_{s_t,a_t}\Big[ \nabla_\theta \log \pi_\theta(a_t|s_t)\big( r(s_t,a_t)-b(s_t) \big) \Big],
\]

with reward \(r=1\) if \(a_t=a^*_t\), else 0, and baseline \(b\) to reduce variance. This is identical to REINFORCE with a *matching* reward signal—an elegant bridge between supervised learning (cross‑entropy) and reinforcement learning (policy gradient).

*Non‑obvious insight.*  
Because the student’s loss depends on its own state distribution, **the policy implicitly regularizes itself against overfitting**. If it strays into unfamiliar states, the expert will rarely match its actions there, producing a high penalty that pushes the student back toward regions where it has reliable supervision—an automatic exploration‑exploitation trade‑off embedded in the loss.

*Bottom line.*  
On‑policy distillation trains an assistant by letting it learn directly from the environment it will serve, ensuring robustness to distribution shift while protecting sensitive data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
