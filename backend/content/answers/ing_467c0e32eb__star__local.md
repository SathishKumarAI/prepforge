---
qid: ing_467c0e32eb__star__local
question: Behaviour cloning on teleoperation data has a well-known failure mode. What
  is it, and what do you do about it on a real humanoid?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 368
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:33-05:00'
sources: []
---

**Situation:** While working on a research‑grade quadruped that could be teleoperated via a VR headset, the team noticed that our behavior‑cloning model started to misbehave after only a few seconds of operation in real hardware.

**Task:** I needed to identify why the cloned policy was failing and redesign the training pipeline so the robot could reliably follow human demonstrations without drifting into unsafe states.

**Action:** First, I confirmed that the failure stemmed from *distribution shift*: the model only saw narrow “expert” trajectories during training, so any small deviation caused it to land in unseen state space. To counter this, I implemented a DAgger‑style data aggregation loop: after each teleoperation session, the robot’s controller logged its own states and asked the human operator to provide corrective actions. I also added domain randomization (varying payloads, friction coefficients) to broaden the training distribution. Finally, I wrapped the policy in an online safety filter that clipped motor commands if joint torques exceeded a threshold.

**Result:** Within three weeks, the robot’s success rate on a 10‑meter obstacle course rose from 45 % to 92 %. The added safety layer reduced peak torque spikes by 35 %, and we logged no falls during live demos. I learned that continuous data collection and real‑time safety constraints are essential when deploying behavior cloning on physical humanoids.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
