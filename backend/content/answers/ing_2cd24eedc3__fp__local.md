---
qid: ing_2cd24eedc3__fp__local
question: What goes wrong when training MoE models, and what's the inference memory
  caveat?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 454
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:53-05:00'
sources: []
---

**Why MoE Training Can Collapse**

Mixture‑of‑Experts (MoE) is a *conditional* model: for each input the router selects one or few experts, which are then weighted by their softmax scores.  
The training objective is to maximize likelihood while encouraging sparsity. This introduces two interlocking problems:

| Problem | Root Cause | Consequence |
|---------|------------|-------------|
| **Router collapse** | The router’s cross‑entropy loss is dominated by the few most frequently selected experts. | Most experts receive almost no gradients → “dead” experts, hurting capacity and generalisation. |
| **Expert imbalance** | A small set of experts receives all tokens due to over‑confident routing or data bias. | Over‑parameterised experts are wasted; others under‑utilise the shared parameters. |
| **Gradient noise** | Sparse routing makes each token depend on a tiny subset of parameters, amplifying stochasticity. | Training becomes unstable, requiring careful learning‑rate schedules and regularisers (e.g., load‑balancing loss). |

The deeper principle is that MoE implements *conditional computation* as an optimisation problem over a discrete allocation graph. When the allocation (router) is poorly regularised, the optimiser prefers a degenerate solution that minimises loss but forfeits expressivity.

**Inference‑time Memory Caveat**

At inference each token activates only one expert, yet all experts must reside in memory because:

1. **Weight locality:** GPU/TPU kernels expect contiguous weight tensors; splitting weights per expert breaks this.
2. **Activation broadcast:** The sparse routing mask is still applied to the full parameter set, so the *memory footprint* scales with the total number of expert parameters, not the active subset.

Hence, MoE inference requires loading all experts into device memory—often exceeding GPU limits—unless a custom kernel that streams only the selected expert’s weights is engineered. This subtle mismatch between *sparsity at compute time* and *density at memory layout* is what most practitioners overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
