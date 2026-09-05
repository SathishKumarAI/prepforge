---
qid: ing_e7ccfeaa6f__star__local
question: 'Explain: Reinforcement learning — On-Policy Distillation - Thinking Machines
  Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 304
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:14-05:00'
sources: []
---

**Situation:**  
At my last company we were building an autonomous drone navigation system for indoor inspections. The pilot model was a deep Q‑network that learned from scratch in simulation, but its inference latency was too high for real‑time flight on the onboard CPU.

**Task:**  
I had to compress the policy into a lightweight student network without sacrificing the agent’s ability to avoid obstacles and complete inspection routes within the 5‑minute mission window.

**Action:**  
I applied *on‑policy distillation*: first, I collected trajectories by letting the teacher run in the simulator while logging state‑action pairs. Then I trained a smaller convolutional policy with a cross‑entropy loss against the teacher’s action distribution, adding a KL regularizer to keep the student close to the teacher’s behavior. I tuned the temperature hyperparameter and used gradient clipping to prevent exploding gradients. Finally, I validated the distilled model on a hardware‑in‑the‑loop test rig, iterating until the average reward dropped less than 2 % compared to the teacher.

**Result:**  
The student ran at 30 fps on the drone’s ARM processor versus 8 fps for the teacher, and mission success rate stayed at 96 %. I learned that careful temperature tuning and KL weighting are critical to preserve exploration behavior while achieving real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
