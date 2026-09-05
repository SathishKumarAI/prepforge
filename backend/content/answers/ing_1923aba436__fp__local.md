---
qid: ing_1923aba436__fp__local
question: 'GLM-4.5 is a Mixture-of-Experts model with 355B total but 32B active parameters.
  Explain the economics: what does that split buy you and what does it cost?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 584
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:42-05:00'
sources: []
---

### Why a 355 B / 32 B split matters

**The problem the model solves:**  
Inference in large language models (LLMs) is dominated by *parameter‑level* operations. A 1‑billion‑parameter transformer needs ~10⁹ multiply–accumulate (MAC) ops per token, which translates directly into energy and latency costs.

**MoE’s core idea**  
A Mixture‑of‑Experts (MoE) layer keeps a vast pool of *expert* weight matrices but activates only a handful for each token. If the MoE has 355 B total parameters yet uses only 32 B per forward pass, we effectively pay “for the space” once and reuse it across many inferences.

**Economics**

| Item | Quantity | Cost driver |
|------|----------|-------------|
| **Total capacity (355 B)** | Storage + pre‑training compute | One‑time: memory footprint, training FLOPs |
| **Active slice (32 B)** | Real‑time MACs per token | Ongoing inference cost |

- *Storage*: 355 B of weights occupy ~1.3 TB on disk; keeping them resident in GPU/TPU VRAM is infeasible for most users. By loading only the 32 B slice needed, we avoid that burden.
- *Training*: The 355 B parameters are trained once via a global optimizer (e.g., Adam). Training cost scales linearly with total params; however, MoE mitigates this by sparsifying gradients—only the chosen experts receive updates per token.
- *Inference*: Per‑token FLOPs scale with the active slice. A 32 B MoE layer might need ~1–2× the FLOPs of a dense 32 B transformer because routing and gating add overhead, but it remains far below a dense 355 B model.

**Non‑obvious insight**  
The *routing network*—a tiny MLP that decides which experts to activate—acts as an **implicit attention mechanism over parameter space**. It learns to cluster inputs into expert “subspaces” where each subspace captures a distinct linguistic pattern (e.g., arithmetic vs. narrative). Thus, the MoE not only economizes compute but also imposes a *latent factorization* of knowledge that dense models cannot easily exploit.

In short: 355 B gives us a global capacity to represent diverse language phenomena; 32 B per token guarantees that we only pay for the part of that capacity actually needed, turning a static “all‑or‑nothing” model into a dynamic, on‑demand engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
