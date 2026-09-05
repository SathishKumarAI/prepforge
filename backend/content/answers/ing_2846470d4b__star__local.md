---
qid: ing_2846470d4b__star__local
question: 'Explain: 3 Phenomenology of On-Policy Distillation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 389
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:01-05:00'
sources: []
---

**Situation** – In a recent autonomous‑driving project we had an expert reinforcement‑learning policy that ran on a high‑performance GPU cluster but was too slow for real‑time deployment on the vehicle’s edge CPU. The production team needed a lightweight model that could match the expert’s performance while staying within strict latency limits.

**Task** – My goal was to distill the on‑policy expert into a small neural network without sacrificing safety or accuracy, and then validate that the distilled policy behaved similarly under the same state distribution during training.

**Action** – I first ran the expert policy in its native environment to collect a dataset of state–action pairs while actively exploring the state space (hence “on‑policy”). I trained a student network using a weighted cross‑entropy loss, but added a KL‑divergence penalty that kept the student’s action distribution close to the expert’s. To preserve on‑policy behavior, I performed iterative fine‑tuning: after each training epoch I replayed the student through the simulator, gathered new states, and updated the dataset—mirroring the expert’s exploration pattern. I also monitored the entropy of the policy to ensure it didn’t collapse into deterministic outputs.

**Result** – The distilled model ran at 30 fps on a single NVIDIA Jetson Nano while achieving 97 % of the expert’s cumulative reward over 1,000 test episodes. Deployment tests showed no increase in collision rate compared with the baseline, and the engineering team was able to ship the new policy within two weeks. I learned that maintaining the same state distribution during distillation is key for on‑policy transfer, and that a small KL penalty can prevent catastrophic forgetting of exploration dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
