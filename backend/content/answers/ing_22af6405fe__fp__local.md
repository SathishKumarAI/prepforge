---
qid: ing_22af6405fe__fp__local
question: 'Explain: 3.3 Realistic Constraints and Assumptions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 412
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:19:23-05:00'
sources: []
---

### 3.3 Realistic Constraints & Assumptions

When we formalise an AI problem, the *objective* is usually a mathematical optimisation (e.g., maximise expected reward).  
Without constraints this objective can be solved by trivial or degenerate policies—think of “take infinite resources” or “exploit every bit of data.”  
Hence we impose **realistic constraints** that reflect physical, computational, or ethical limits:

| Type | Why it matters | Example |
|------|----------------|---------|
| **Data‑budget** | Models cannot learn from an unbounded stream; they must generalise from finite samples. | Training a neural net on 10 GB of images. |
| **Computation & latency** | Real‑time systems (autonomous cars) require decisions within milliseconds. | Inference time < 5 ms on edge devices. |
| **Energy & cost** | Deployments in satellites or mobile phones must respect power budgets. | GPU utilisation ≤ 30 % of device capacity. |
| **Safety & fairness** | Algorithms that ignore societal constraints can cause harm. | Rejecting policies that violate regulatory thresholds. |

These assumptions are not arbitrary; they stem from the *information‑theoretic* reality that a system’s capability is bounded by the channel capacity (data) and processing power (computational channel).  

**Non‑obvious insight:**  
When constraints are tightened, the optimal solution often **changes qualitatively**, not just quantitatively. For instance, limiting data can force a model to shift from deep learning to Bayesian inference with strong priors—an emergent shift that is invisible if one only tunes hyperparameters. Recognising this qualitative pivot early prevents wasted effort on infeasible architectures and guides the design of *constraint‑aware* learning algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
