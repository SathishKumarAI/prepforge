---
qid: ing_e489571097__fp__local
question: 'Explain: Off-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 694
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:04:49-05:00'
sources: []
---

**Off‑policy vs. On‑policy Distillation in Reinforcement Learning**

*Fundamental problem:* A learner often has a **teacher policy** \(\pi_T\) that is accurate but expensive (e.g., a large neural network or ensemble). We want to train a lightweight student policy \(\pi_S\) that mimics \(\pi_T\) while still improving on its own data. Distillation is the act of transferring knowledge from \(\pi_T\) to \(\pi_S\).

---

### 1. Off‑policy distillation  
- **What it does**: Collect trajectories using *any* behavior policy (e.g., a replay buffer, random actions, or a previously trained agent).  
- **Why it works**: The loss is typically a KL divergence \( \mathcal{L}_{\text{KL}} = \mathbb{E}_{s,a\sim D}\!\left[\log \frac{\pi_S(a|s)}{\pi_T(a|s)}\right] \). Because the expectation is over *stored* samples, we can decouple data collection from training.  
- **Deep principle**: This mirrors importance‑weighted supervised learning; we approximate the teacher’s action distribution under a different sampling distribution. The student learns to match the teacher’s policy *in regions of state space that are already visited*, regardless of whether those states will be visited by \(\pi_S\) later.  
- **Non‑obvious insight**: Off‑policy distillation can actually *improve* performance beyond the teacher if the student generalizes better to unseen states, especially when the replay buffer contains diverse exploratory data.

### 2. On‑policy distillation  
- **What it does**: The student collects trajectories using its *own* current policy \(\pi_S\) and then learns from the teacher’s actions at those exact states.  
- **Why it works**: Here we directly minimize \( \mathbb{E}_{s\sim d_{\pi_S}}\!\left[ D_{\text{KL}}(\pi_T(\cdot|s)\,\|\,\pi_S(\cdot|s)) \right] \). Since the student’s state distribution \(d_{\pi_S}\) is changing, this is a *self‑imitation* or “behavior cloning from an oracle” process.  
- **Deep principle**: The objective is a form of policy gradient with a fixed target; it can be seen as a *proximal regularizer* that keeps the student close to the teacher while still allowing exploration guided by its own value estimates.  
- **Non‑obvious insight**: On‑policy distillation naturally enforces *causal consistency*: the student only imitates the teacher where it actually reaches, preventing “hallucinated” knowledge in unreachable states—a problem that off‑policy methods can suffer when replay buffers contain out‑of‑distribution samples.

---

Both methods reduce variance compared to vanilla policy gradient and provide a principled way to inject expert knowledge. The key trade‑off is between data efficiency (off‑policy) and fidelity to the student’s own experience (on‑policy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
