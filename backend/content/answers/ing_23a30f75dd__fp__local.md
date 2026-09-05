---
qid: ing_23a30f75dd__fp__local
question: 'Explain: The TSP’s Compiler and ISA — The Architecture of Groq''s LPU -
  by Abhinav Upadhyay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 387
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:21:09-05:00'
sources: []
---

**The TSP’s Compiler & ISA – Groq’s Linear Processing Unit (LPU)**  
At its core, the LPU is a *matrix‑centric* accelerator: it treats every tensor operation as a linear transformation \(Y = AX\) or a pointwise map, and maps these onto a 2‑D array of processing elements. The compiler’s job is to prove that this mapping preserves *information flow*—every operand must reach its destination exactly once, and no element is read or written twice unless explicitly needed.  

The compiler first builds a *dataflow graph* from the high‑level ML model, then performs *static scheduling*: it assigns each node to an LPU tile while respecting the **TSP (Tensor Scheduling Problem)**—a variant of the classic NP‑hard scheduling problem but constrained by the LPU’s single‑pass memory hierarchy. The result is a set of *streaming kernels* that exploit *spatial locality*: adjacent tiles process contiguous slices, minimizing off‑chip traffic.

The ISA encodes these kernels as **compact vector instructions** (e.g., `VLOAD`, `VMULADD`) that specify source/destination coordinates and the operation type. Because each instruction is *self‑contained*, the hardware can execute them in lockstep across all tiles without a central scheduler, guaranteeing deterministic latency—a crucial property for real‑time inference.

**Non‑obvious insight:**  
Unlike GPUs, which trade off precision for speed via warp divergence, Groq’s LPU guarantees *exactness* by enforcing that every tile executes the same instruction stream. This determinism eliminates the need for branch prediction and allows the compiler to prove worst‑case execution time analytically—an essential feature for safety‑critical ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
