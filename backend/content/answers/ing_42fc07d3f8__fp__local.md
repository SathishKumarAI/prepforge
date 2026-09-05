---
qid: ing_42fc07d3f8__fp__local
question: What are the key hyperparameters for fine-tuning, and what are sensible
  starting values?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 639
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:27:16-05:00'
sources: []
---

### Why hyper‑parameters matter in fine‑tuning

Fine‑tuning a pre‑trained transformer is an **optimization problem on a manifold of weights** that already lies near a good basin of attraction (the pre‑training objective). The goal is to nudge the parameters toward a new task while preserving useful structure. Two forces compete:

1. **Task‑specific gradient signal** – drives weights toward minimizing the fine‑tune loss.
2. **Regularization / stability** – prevents catastrophic forgetting by keeping the trajectory close to the pre‑trained point.

The hyper‑parameters control the relative strength of these forces and the geometry of the search path (learning rate, batch size, weight decay, layer‑wise scaling). They also determine how many epochs the model will explore before converging.

### Core hyper‑parameters & sensible defaults

| Hyper‑parameter | Role | Typical starting value |
|-----------------|------|------------------------|
| **Learning rate (`lr`)** | Step size on the loss manifold. Too large → divergence; too small → stall. | `1e-5` – `3e-5` for GPT/LLM, `2e-4` for BERT‑style models. |
| **Batch size** | Statistical noise of gradient estimates and implicit regularization (larger batches → smoother updates). | 8–32 examples per GPU; scale linearly with GPU memory. |
| **Weight decay (`wd`)** | L2 penalty to keep weights close to pre‑trained values, combats over‑fitting. | `0.01` – `0.05`; use AdamW for consistency. |
| **Gradient clipping (norm)** | Avoid exploding gradients in very deep models. | 1.0 – 5.0; clip by global norm. |
| **Layer‑wise learning‑rate decay** | Older layers change less than new ones, preserving knowledge. | Decay factor `0.8`–`0.95` per layer from head to root. |
| **Number of epochs / steps** | Trade‑off between convergence and over‑fitting. | 3–5 epochs (≈ 10k–30k steps for typical datasets). |

### Non‑obvious insight

Fine‑tuning is *not* a simple “take the best learning rate, run until loss stops decreasing.” Because pre‑trained weights lie near a flat basin, **the optimal step size depends on the curvature of that basin**. A very small batch (high gradient noise) effectively increases the local learning rate, allowing larger `lr` without overshooting. Conversely, large batches require stricter `lr` or weight decay to avoid drifting too far from the pre‑trained manifold. This interplay explains why practitioners often use *larger* learning rates with *smaller* batch sizes and vice versa—an effect that is invisible if you only look at the loss curve in isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
