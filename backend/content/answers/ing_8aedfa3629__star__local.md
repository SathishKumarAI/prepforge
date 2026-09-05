---
qid: ing_8aedfa3629__star__local
question: 'Explain: Pseudocode — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 413
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:25-05:00'
sources: []
---

**Situation** – In my last role I was tasked with speeding up a reinforcement‑learning model for an autonomous drone that had to navigate urban canyons. The production policy ran on a heavy GPU cluster; we needed a lightweight version that could run on the drone’s edge computer without sacrificing safety.

**Task** – Build an on‑policy distillation pipeline so the student network learns from the teacher while still gathering fresh trajectories in real time, ensuring the distilled policy stays aligned with the environment dynamics.

**Action** – I set up a PyTorch training loop that:
1. Runs the teacher (PPO) for 10 episodes each iteration, collecting state‑action pairs and returns.
2. Feeds those samples into a student network trained to minimize the Kullback–Leibler divergence between its action logits and the teacher’s softmax outputs, while also including a mean‑squared error loss on value predictions.
3. Uses an adaptive learning rate scheduler that reduces LR when the KL penalty exceeds 0.01, preventing overfitting to stale trajectories.
4. After each batch, evaluates both policies on a validation set of 5 unseen maps; if the student’s success rate falls below 95 % of the teacher’s, we trigger a replay buffer refresh.

**Result** – The distilled model ran at 30 fps on an NVIDIA Jetson TX2 and achieved 93 % of the teacher’s success metric in navigation tasks. Deployment cut inference cost by 70 %, and I learned that maintaining an online trajectory pool is critical for keeping student policies up‑to‑date with evolving environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
