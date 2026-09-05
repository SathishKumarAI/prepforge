---
qid: ing_d4ed5ca613__star__local
question: 'Explain: Distillation for reasoning — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 364
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:47-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we built an automated loan‑approval model that used a complex reinforcement learning agent to reason about applicant risk over time. The production latency was too high for real‑time decision making, and our dev team needed a lightweight surrogate that could still understand the sequential reasoning of the teacher.

**Task** – I had to distill the on‑policy RL policy into an efficient feed‑forward network that maintained the agent’s ability to weigh long‑term risk factors while keeping inference under 5 ms per request, all without retraining from scratch.

**Action** – First, I logged state‑action trajectories from the live agent during a two‑week window and used them as training data. I implemented on‑policy distillation by minimizing a KL divergence loss between the teacher’s soft action distribution and the student’s logits, augmented with a weighted MSE term on intermediate value estimates to preserve reasoning depth. The student was built in PyTorch with 3 hidden layers (256 units each) and trained for 50 epochs on an NVIDIA V100, using mixed‑precision to accelerate convergence.

**Result** – The distilled model achieved a 99 % top‑1 action match to the teacher while cutting inference time from 120 ms to 4.2 ms, enabling real‑time approvals at scale. Post‑deployment A/B testing showed a 12 % reduction in false positives with no loss in risk coverage. I learned that aligning soft targets and intermediate value signals is key to preserving reasoning in distilled policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
