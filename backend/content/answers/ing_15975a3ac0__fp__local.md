---
qid: ing_15975a3ac0__fp__local
question: 'Explain: The Multi-Stage Alignment Pattern: — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 687
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:09-05:00'
sources: []
---

### From “What is wrong?” to “How do we fix it?”

**1. The problem:**  
An unconstrained language model learns from vast text corpora, but its objective—maximising next‑token likelihood—is a *proxy* for human values. The proxy is noisy and often misaligned with what humans actually want.

**2. First stage: Reinforcement Learning from Human Feedback (RLHF).**  
We cast alignment as an RL problem where the policy \(π_\theta\) generates text, and a reward model \(R_{\phi}\) estimates human preference scores on pairs of completions. The loss

\[
L(\theta)= - \mathbb{E}_{x,y}\big[ \log π_\theta(y|x)\big] + λ\, D_{KL}\!\big(π_\theta||π_{\text{base}}\big)
\]

encourages the policy to imitate the base model (to preserve language fluency) while nudging it toward higher‑reward outputs. This is essentially *policy gradient* with a KL penalty, derived from the principle of **maximum entropy RL**: we keep as much stochasticity as possible unless evidence suggests a better action.

**3. Second stage: Direct Preference Optimization (DPO).**  
RLHF relies on a learned reward model that can be miscalibrated. DPO sidesteps this by directly optimizing for the probability ratio of chosen versus rejected samples:

\[
L_{\text{DPO}}(\theta)= - \mathbb{E}_{x,a,b}\Big[\log\frac{π_\theta(a|x)}{π_\theta(b|x)+e^{-\alpha}}\Big]
\]

where \(a\) is the preferred completion and \(b\) the less‑preferred one. This objective is a *convex surrogate* to the pairwise preference loss, derived from the **Bregman divergence** between two policies. It guarantees that if the model prefers \(a\), its likelihood will increase proportionally, without needing an explicit reward function.

---

### Why this pattern works

- **Separation of concerns:** RLHF learns a *reward* that captures nuanced human judgments; DPO then uses that reward to fine‑tune policy probabilities in a stable, direct way.
- **Optimization principle:** Both stages are grounded in *entropy‑regularised variational inference*: we seek the closest distribution (to the base model) that satisfies preference constraints.  
- **Information geometry:** The KL penalty and ratio objective keep the updated policy within a geodesic ball of the base distribution, preserving linguistic coherence while steering toward aligned behavior.

---

### Non‑obvious insight

Most people treat RLHF as “train a reward → fine‑tune”. In reality, **the reward model is merely a *bridge***: it translates raw human preferences into a differentiable signal. DPO shows that we can eliminate the bridge entirely by optimizing over pairwise likelihood ratios, yielding a simpler objective with provably better convergence properties. This reframes alignment from “learning a function” to “directly shaping probability mass”, a subtle but powerful shift in perspective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
