---
qid: ing_467c0e32eb__think__local
question: Behaviour cloning on teleoperation data has a well-known failure mode. What
  is it, and what do you do about it on a real humanoid?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 426
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:10:31-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
- *Clarification*: The “failure mode” refers to the common pitfall when training a policy purely by imitation of teleoperation data (behaviour cloning).  
- *Assumptions*: We’re dealing with a real humanoid robot, not simulation; the data comes from a human operator controlling the robot’s joints or end‑effectors.

**2. Mental model / framework**  
Use the *distribution shift* perspective: behaviour cloning learns to map states → actions seen in the dataset. It struggles when the robot deviates slightly from those states (e.g., due to noise, actuator limits, or new disturbances) and therefore produces out‑of‑distribution actions that lead to compounding errors.

**3. Step‑by‑step reasoning**  
1. Recognize that teleoperation data is limited to a narrow manifold of states the human explored.  
2. When the robot starts deviating, it encounters unseen states → policy outputs garbage.  
3. This causes catastrophic failure (falls, collisions).  
4. Remedy: augment training with corrective feedback or exploration (e.g., DAgger), add safety constraints, or use a hybrid controller that falls back to model‑based or PID control when uncertainty is high.

**4. Common traps**  
- Assuming more data solves everything; the problem is *distribution mismatch*, not quantity.  
- Forgetting to include noise/actuator limits in simulation before transfer.  
- Overlooking safety: a blind imitation policy can cause physical harm on hardware.

**5. Sanity‑check & communicate**  
Explain that behaviour cloning alone cannot guarantee robust real‑world performance because the robot will inevitably leave the “expert” trajectory. Emphasize that on a humanoid you must add mechanisms for state‑space coverage, safety monitoring, or iterative data collection (e.g., DAgger) to mitigate this failure mode. This keeps the answer focused, accurate, and actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
