---
qid: ing_00dec92513__faang__local
question: 'Explain: Design the safety architecture for a learned whole-body policy
  operating near people.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 548
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:24-05:00'
sources: []
---

**1️⃣ Clarify**

We need an end‑to‑end safety stack that lets a deep whole‑body controller (e.g., humanoid robot) operate close to humans without causing harm.  
Assumptions: the policy is pre‑trained, runs at 200 Hz, has full joint actuation and proprioception; we have access to RGB‑D + force/torque sensors; safety must be provable, not just empirical.

**2️⃣ Approach**

1. **Perception layer** – real‑time human pose & velocity estimation (e.g., OpenPose + Kalman filter).  
2. **Safety envelope** – compute a *safety buffer* around each detected body part (radius + margin).  
3. **Controller shielding** – a *safe‑set* module that projects the raw policy output onto the nearest admissible action respecting joint limits, collision constraints, and the safety envelope.  
4. **Runtime monitoring** – a watchdog that flags any violation of hard bounds (joint torque > max, velocity > limit) and triggers an emergency stop.  
5. **Formal guarantees** – use Control Barrier Functions (CBFs) to prove that once inside the safe set the system remains there with high probability.

**3️⃣ Depth**

- The *shield* solves a quadratic program:  
  \[
  \min_{\Delta u}\|u_{\text{raw}}+\Delta u - u_{\text{raw}}\|^2
  \]
  s.t. \(A(u_{\text{raw}}+\Delta u)\le b\) (joint limits, safety envelope).  
- Complexity: O(n³) per step (n ≈ 30 joints), feasible on an edge GPU.  
- CBFs provide a Lyapunov‑like guarantee that the distance to the human stays above the buffer.  

**4️⃣ Edge Cases**

- Occluded humans → fallback to conservative buffer expansion.  
- Sudden human motion > perception bandwidth → watchdog triggers stop.  
- Sensor drift → periodic recalibration; sanity checks on joint torques.

**5️⃣ Optimize & Communicate**

We can reduce QP size by pre‑computing the *active* constraints (only joints near the buffer). For explainability, log each shield decision and CBF value so operators see why an action was altered. In a presentation I’d walk through a demo where a person steps toward the robot; the perception updates, the shield modifies the policy output, and the watchdog remains silent—showing both safety and responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
