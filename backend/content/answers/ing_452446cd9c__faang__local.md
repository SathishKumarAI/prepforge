---
qid: ing_452446cd9c__faang__local
question: 'Explain: On-policy distillation — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:57-05:00'
sources: []
---

**On‑policy distillation**  
*A knowledge transfer method where a student policy learns directly from the teacher’s on‑policy trajectory distribution.*

| Step | What to say |
|------|-------------|
| **Clarify** | “We want to train a compact agent that mimics a larger, high‑performance teacher while it interacts with the environment. Unlike off‑policy distillation, we keep the student sampling from the *same* policy as the teacher during training.” |
| **Approach** | 1. Run the teacher policy to collect trajectories (states, actions, rewards). <br>2. For each state, compute the teacher’s action distribution \(π_T(a|s)\). <br>3. Train the student \(π_S\) by minimizing a KL‑divergence loss \(\mathbb{E}_{s∼ρ_{π_T}}\!\left[KL(π_T||π_S)\right]\). <br>4. Optionally, add a value or reward prediction head to align returns. |
| **Depth** | The loss: \(L = \sum_s  π_T(a|s) \log\frac{π_T(a|s)}{π_S(a|s)}\). Gradient flows through the student only. Complexity is linear in trajectory length and action space; memory dominated by storing teacher logits. Since we use on‑policy data, the student’s distribution stays close to the teacher’s visitation frequencies, reducing distribution shift issues common in off‑policy methods. |
| **Edge cases** | • Teacher and student have different action spaces → need a mapping or projection.<br>• High‑variance teacher policies (e.g., stochastic exploration) can hurt convergence; consider temperature scaling.<br>• If the environment changes during distillation, on‑policy data may become stale. |
| **Optimize & communicate** | • Use mini‑batch KL with entropy regularization to keep student diverse.<br>• Parallelize trajectory collection and training for speed.<br>Explain that on‑policy distillation preserves the teacher’s behavior distribution, yielding a student that behaves identically in the same environment while being lighter and faster. This aligns well with production constraints at FAANG companies. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
