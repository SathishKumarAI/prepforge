---
qid: ing_e7dc5cbd43__fp__local
question: A whole-body controller trained entirely in simulation has to run on real
  hardware. What transfers, what does not, and how do you close the gap?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 490
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:12:22-05:00'
sources: []
---

A simulator solves a **differential game**: given a physics model \(\dot x=f(x,u)\) and an objective \(J(u)=\int \ell(x,u)\,dt\), it computes a policy \(u=\pi_\theta(x)\).  
When the same controller is deployed on hardware the **system dynamics change** to \(\dot x=g(x,u)+w(t)\) where \(g\neq f\) and \(w\) captures unmodeled actuation delays, sensor noise, and ground‑contact uncertainty.  

**What transfers:**  
1. **Structure of the policy network** – its capacity, activation functions, and training algorithm remain valid because they encode a mapping from observations to actions that is independent of the exact dynamics.  
2. **High‑level task objectives** – reward terms that capture desired behaviours (e.g., balance, speed) still apply; only their weighting may shift.

**What does not transfer:**  
1. **Exact parameter values** – gains tuned to a particular friction coefficient or motor torque profile will be off on hardware.  
2. **Temporal discretisation** – simulation time‑steps are usually smaller than real‑time control loops, so phase‑lag introduced by the controller is different.

**Closing the gap:**  
1. **Domain randomisation**: sample a distribution over physical parameters (mass, friction, delay) during training; the learned policy becomes robust to variations.  
2. **Residual learning / fine‑tuning on hardware**: after deploying the simulation‑trained network, collect real data and train a small residual model \(\Delta\pi_\theta(x)\) that corrects systematic errors while keeping the core policy fixed.  
3. **Model‑based adaptation**: use online system identification to update \(g\) in closed loop; then re‑solve the optimisation locally (e.g., via MPC) while keeping the learned baseline policy as a reference.

*Non‑obvious insight:* The policy’s *gradient flow* through time is more sensitive to dynamics mismatch than its final mapping. By enforcing **policy smoothness** (e.g., penalising high‑frequency changes in \(\pi_\theta\)) during simulation training, you reduce the amplification of small model errors when transferred to hardware, yielding a more stable controller without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
