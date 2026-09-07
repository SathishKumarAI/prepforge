---
qid: ing_467c0e32eb__faang__local
question: Behaviour cloning on teleoperation data has a well-known failure mode. What
  is it, and what do you do about it on a real humanoid?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 546
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:55-05:00'
sources: []
---

**Clarify**  
The question asks: *When we learn a policy by behaviour‑cloning from human teleoperation data, what common failure mode arises, and how would you mitigate it on an actual humanoid robot?* I’ll assume the policy is trained offline, supervised on state‑action pairs, and deployed on a real body with dynamics and sensor noise.

**Approach**  
1. Identify the failure mode.  
2. Explain why it occurs in behaviour cloning.  
3. Propose concrete mitigation steps for a real humanoid.

**Depth**

| Failure Mode | Cause | Mitigation |
|--------------|-------|------------|
| **Distribution Shift / Covariate Drift** | The cloned policy sees states during deployment that were never present (or very rare) in the training set, so it extrapolates poorly. | • **Data‑aggregation (DAgger)**: repeatedly roll out the policy, collect corrective actions from a supervisor, and retrain on the expanded dataset. <br>• **Domain randomization**: vary mass, friction, sensor noise during simulation to expose the learner to a wider state manifold. <br>• **Imitation with confidence thresholds**: only act when the model’s output has high certainty; otherwise fall back to a safe baseline or ask for human input. |
| **Over‑fitting to Teleoperation Bias** | Human operators tend to follow sub‑optimal, biased trajectories (e.g., staying near joints). The policy learns these idiosyncrasies and fails on unseen tasks. | • Add *regularization* or *entropy bonuses* during training. <br>• Use *inverse reinforcement learning* to recover a reward that captures the underlying intent rather than exact actions. |

**Edge Cases**  
- Sudden changes in payload or terrain not seen during data collection.  
- Sensor drop‑outs leading to state mismatch.  
- Human operator mistakes causing “noisy” labels.

Test by:  
1. Holding out random trajectories for validation.  
2. Simulating sensor noise and disturbances.  
3. Performing closed‑loop evaluation on a safety‑shielded real robot (e.g., with velocity limits).

**Optimize & Communicate**  
Start with DAgger to bootstrap the policy, then augment data via domain randomization. Quantify improvement by measuring success rate on unseen tasks and time‑to‑failure metrics. Explain that while behaviour cloning is simple, its failure mode—distribution shift—is mitigated by actively collecting corrective data and broadening the training distribution, ensuring robustness when the humanoid encounters real‑world variability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
