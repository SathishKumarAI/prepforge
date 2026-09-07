---
qid: ing_592a537efc__faang__local
question: Design the IR and pass pipeline for a compiler targeting a spatial dataflow
  accelerator. Where does the memory-residency decision live, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 532
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:03-05:00'
sources: []
---

**Clarify**  
We’re asked to design an **IR (Intermediate Representation)** and a **pass pipeline** for a compiler that targets a *spatial dataflow accelerator* (e.g., systolic array). The key decision is: *where should the memory‑residency (register vs. off‑chip) choice be made, and why?*  
Assumptions:  
- The accelerator exposes local on‑chip buffers (tiles) and global DRAM.  
- We have a set of high‑level kernels with loops/strides.  
- Runtime can provide profiling hints.

**Approach**  
1. **IR design** – extend a loop‑aware IR (e.g., MLIR) to include *Memory Residency* attributes on tensors and *Dataflow* blocks that map to accelerator tiles.  
2. **Pass pipeline** –  
   - *Analysis passes*: dependency, reuse, size estimation.  
   - *Residency pass*: decide register vs. DRAM.  
   - *Codegen passes*: generate tile‑level schedules and memory moves.

**Depth**  
The residency decision lives in the **analysis/residency pass**, *before* code generation. It consumes:  
- Loop bounds & strides → reuse factor.  
- Tensor size & access pattern → buffer fit.  
- Profiling hints → actual hotness.  
This early placement allows later passes to schedule data movement optimally, avoiding costly back‑tracking.

Complexity: O(n) over tensors per module; linear in IR nodes. Trade‑off: early decision may miss late‑stage constraints (e.g., register pressure), but we mitigate with a *feedback loop* that re‑runs the residency pass after codegen if stalls are detected.

**Edge Cases**  
- Very large tensors that never fit → spill to DRAM; need on‑the‑fly streaming.  
- Dynamic shapes → defer decision to runtime, use placeholder attributes.  
- Multi‑kernel pipelines → ensure memory consistency across kernels.

**Optimize & Communicate**  
Improve by caching residency decisions in a *Residency Table* and exposing them as metadata for the scheduler. Explain that placing this logic early gives the compiler full visibility of data reuse, enabling tighter pipelining on the spatial accelerator, which is critical for performance. This aligns with FAANG’s emphasis on clear problem framing, systematic passes, and evidence‑based decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
