---
qid: ing_e7dc5cbd43__faang__local
question: A whole-body controller trained entirely in simulation has to run on real
  hardware. What transfers, what does not, and how do you close the gap?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 473
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:39:14-05:00'
sources: []
---

**Clarify**  
We’re given a full‑body control policy (e.g., reinforcement‑learned locomotion) that was trained in simulation and must now run on a physical robot. The core questions: *Which aspects of the learned controller will transfer directly?* *What mismatches between sim and reality will break it?* *How do we bridge those gaps?*  
Assumptions to confirm: physics fidelity (joint dynamics, friction), sensor noise characteristics, actuation limits, and safety constraints.

**Approach**  
1. Identify transferable components (policy network weights, high‑level motion primitives).  
2. Isolate non‑transferable elements: dynamics discrepancies, unmodeled disturbances, perception errors.  
3. Devise a multi‑stage adaptation pipeline: domain randomization → system identification → fine‑tuning with real data.

**Depth**  
- *Transferable*: Neural policy parameters (policy shape), reward structure, and any low‑level motor commands that are robust to small parameter changes.  
- *Non‑transferable*: Exact mass/inertia values, contact dynamics, sensor latency/noise, actuator saturation.  
- **Gap closure**:  
  - Use domain randomization during training to expose the policy to a wide range of physical parameters.  
  - Perform system identification on hardware (e.g., excite joints, fit inertial models).  
  - Fine‑tune the policy online with real‑world data using techniques like RL‑in‑the‑loop or supervised imitation from demonstration.  
  - Add safety layers: fallback controllers, saturation handling, and disturbance observers.

**Edge Cases**  
- Extreme payload changes, actuator wear, unexpected contact surfaces.  
- Sudden sensor failures or delays leading to state estimation errors.  
Test with varied terrain, load conditions, and simulated faults.

**Optimize & Communicate**  
Explain that the policy’s *structure* (e.g., network topology) is preserved; only weights are adapted. Highlight computational cost: online fine‑tuning adds negligible overhead if using lightweight gradient updates. Conclude by stressing iterative validation on hardware, continuous monitoring of key metrics (tracking error, torque limits), and a rollback plan to the baseline controller if performance degrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
