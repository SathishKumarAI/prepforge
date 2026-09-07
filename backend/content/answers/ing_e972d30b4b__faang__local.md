---
qid: ing_e972d30b4b__faang__local
question: 'Explain: Fine-tuning, RLHF & Alignment - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 532
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:42:22-05:00'
sources: []
---

**Fine‑tuning, RLHF & Alignment – Structured FAANG‑style Answer**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking how we adapt a pre‑trained model to a task (fine‑tuning), then steer it with human preferences (RLHF), and finally keep its behavior safe (alignment). Which assumptions are you most interested in—data size, reward signal fidelity, or deployment safety?” |
| **Approach** | 1. *Fine‑tune* on domain data via supervised learning to get a task‑specific policy. <br>2. Collect human preference pairs → train a reward model. <br>3. Use Proximal Policy Optimization (PPO) to optimize the language model against that reward while constraining divergence from the fine‑tuned baseline (KL penalty). <br>4. Post‑process: safety filters, policy distillation, and continuous monitoring. |
| **Depth** | Fine‑tuning is just cross‑entropy on labeled examples; it’s O(N·T) where N=examples, T=sequence length. RLHF replaces the loss with a scalar reward r(τ), requiring Monte Carlo rollouts—O(M·R) per update (M=rollout steps, R=episodes). PPO adds a clipped surrogate objective and KL regularizer to keep updates stable; typical hyper‑parameters: clip ε=0.2, KL target 0.01. Alignment comes from: <br>• Reward model accuracy (AUC > .85)<br>• Safety constraints (e.g., refusal probability ≤5%)<br>• Human‑in‑the‑loop audits. |
| **Edge Cases** | • Sparse or noisy rewards → use inverse RL.<br>• Distribution shift between training and deployment → perform domain randomization.<br>• Reward hacking (model exploits reward loopholes) → add adversarial safety nets and penalize outliers. |
| **Optimize & Communicate** | • Pre‑train a smaller backbone to reduce compute, then distill the RLHF policy for inference. <br>• Use mixed‑precision training to cut GPU memory by 40%.<br>When explaining, I’d iterate: “We first ground the model in data, then teach it what humans want, and finally guard against unsafe behaviors—each layer adds robustness while keeping the core objective clear.” |

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
