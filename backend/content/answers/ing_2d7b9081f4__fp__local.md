---
qid: ing_2d7b9081f4__fp__local
question: 'Explain: Modular perception, prediction and planning, or end-to-end learned
  driving? Make the case, then tell me what you would actually build.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 495
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:41:27-05:00'
sources: []
---

**Why the architecture matters**

Autonomous driving is a *structured* control problem: raw pixels → perception (objects, lanes) → high‑level prediction (future states of traffic participants) → low‑level trajectory generation.  
Each stage embodies a distinct mathematical principle:

| Stage | Principle | Why it must hold |
|-------|-----------|------------------|
| Perception | **Statistical estimation** under sensor noise | We need accurate, uncertainty‑aware maps of the world. |
| Prediction | **Dynamic programming / Bayesian filtering** on stochastic traffic models | Future states are inherently probabilistic; we must propagate this uncertainty to planning. |
| Planning | **Constrained optimization (e.g., MPC)** in a continuous state space | Safety and comfort constraints can be expressed as convex or semi‑convex costs that guarantee feasibility. |

An *end‑to‑end* network would have to learn all three principles simultaneously from data alone. While deep nets excel at pattern recognition, they struggle with:

1. **Sample efficiency** – learning a full physics model requires orders of magnitude more data than training a classifier.  
2. **Safety guarantees** – constraints are implicit in the loss and can be violated by small adversarial perturbations.  
3. **Explainability** – debugging a monolithic policy is hard; modularity gives clear failure modes.

**Non‑obvious insight:**  
The *information bottleneck* principle shows that compressing sensory data into a latent representation that preserves only task‑relevant information (e.g., semantic map) drastically reduces the dimensionality of subsequent prediction/planning modules, improving both efficiency and robustness.

---

### What I would build

A **hierarchical hybrid system**:

1. **Perception:** CNN+transformer pipeline producing probabilistic occupancy grids + semantic segmentation.  
2. **Prediction:** Graph‑based Bayesian filter that predicts future trajectories of dynamic agents conditioned on the occupancy grid.  
3. **Planning:** Model‑predictive controller operating in a continuous state space, using the predicted distributions as soft constraints and generating smooth, safe velocity/steering commands.

This modular design preserves principled guarantees while leveraging deep learning where it truly shines—extracting structured representations from raw pixels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
