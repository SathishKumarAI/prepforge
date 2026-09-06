---
qid: ing_467c0e32eb__fp__local
question: Behaviour cloning on teleoperation data has a well-known failure mode. What
  is it, and what do you do about it on a real humanoid?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 481
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:35:32-05:00'
sources: []
---

**Failure mode:**  
Behaviour‑cloning (BC) learns a mapping from states to actions by mimicking the demonstrator’s trajectory. On a humanoid that is teleoperated, the training distribution consists almost entirely of *expert* poses and motions. When the robot begins to act autonomously, small prediction errors push it into states that never appeared in the dataset—e.g., a slightly higher torso pitch or a mis‑aligned foot placement. Because BC has never seen these out‑of‑distribution states, its policy can produce wildly inappropriate actions (hallucinated torques), leading to instability or falls. This is a classic *covariate shift* problem: the state distribution under the learned policy diverges from that of the demonstrator.

**What to do on a real humanoid**

1. **Iterative data collection (DAgger‑style):** After deploying the BC policy, record its trajectories and ask the human operator to correct the actions. Retrain with the enlarged dataset so the model learns to recover from its own mistakes.
2. **Curriculum & safety constraints:** Start training in a constrained environment (e.g., a treadmill or a compliant floor) and gradually relax constraints as performance improves.
3. **Reward‑shaped fine‑tuning:** Use reinforcement learning to refine the BC policy, providing dense penalties for large joint torques or deviations from the desired gait, which encourages smooth, stable motion.
4. **Domain randomization:** During training, perturb sensor noise, friction coefficients, and payloads so that the learned controller generalizes to a wider state manifold.

**Non‑obvious insight:**  
The key is *data diversity*, not just more data. A single teleoperator’s style can be perfectly executed in the exact same pose set, but the robot must learn how to “self‑correct” when it deviates. By deliberately exposing the policy to its own errors (via DAgger or synthetic perturbations), you turn the failure mode into a learning signal rather than an unaddressed blind spot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
