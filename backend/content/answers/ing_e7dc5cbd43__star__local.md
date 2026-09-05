---
qid: ing_e7dc5cbd43__star__local
question: A whole-body controller trained entirely in simulation has to run on real
  hardware. What transfers, what does not, and how do you close the gap?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 344
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:21-05:00'
sources: []
---

**Situation:**  
During my final year project I built a whole‑body controller for a humanoid robot in Gazebo. The controller was trained end‑to‑end with reinforcement learning using PyTorch and the MuJoCo physics engine, achieving 95 % success on simulated push recovery tasks.

**Task:**  
The challenge was to deploy this policy on the real robot (iRobot Valkyrie) without catastrophic failure—specifically ensuring safety, maintaining performance under sensor noise, and handling unmodelled dynamics.

**Action:**  
I first transferred the learned neural network weights directly into ROS‑2 nodes written in C++. To bridge the simulation–real gap I added a domain randomization layer: during deployment I perturbed mass, friction, and joint damping within ±10 % to expose the policy to realistic variations. Next, I implemented a lightweight state estimator that fused IMU and joint encoder data using an EKF, replacing the perfect state assumption in simulation. Finally, I ran a staged rollout: a small‑step safety filter (a finite‑state machine) capped torques to 30 % of limits until confidence metrics—root‑mean‑square error <0.02 rad on all joints—were met.

**Result:**  
Within three weeks the robot recovered from pushes in 88 % of trials, a 7 pp drop from simulation but still above our target. I learned that only the neural policy’s internal representation transfers; kinematics, sensor noise, and unmodelled dynamics must be addressed with careful state estimation, domain randomization, and safety layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
