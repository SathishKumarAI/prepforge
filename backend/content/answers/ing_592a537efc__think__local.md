---
qid: ing_592a537efc__think__local
question: Design the IR and pass pipeline for a compiler targeting a spatial dataflow
  accelerator. Where does the memory-residency decision live, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 558
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:53:41-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
- *Goal:* Sketch an IR + pass pipeline that compiles code for a **spatial dataflow accelerator** (e.g., systolic array).  
- *Key decision:* Where to decide which arrays stay resident in on‑chip memory vs. off‑chip DRAM?  
- Assume we have: high‑level program → intermediate representation → target‑specific transformations → code generation.  
- The decision must be made early enough for later passes (e.g., tiling, scheduling) but after enough semantic info is available.

**2. Mental model / framework**  
Use a **multi‑stage pipeline** inspired by modern compilers:  
1. *Front‑end* → language IR (SSA).  
2. *Analysis* → build dependence graph, capture data sizes, lifetimes.  
3. *Optimization* → tiling, loop fusion, vectorization.  
4. *Target‑specific* → spatial mapping, memory allocation.  

The **memory‑residency decision** belongs in the *target‑specific* phase, but its input comes from earlier analyses.

**3. Step‑by‑step reasoning**  
- After SSA construction, run a *lifetime analysis* to know when each variable is defined and last used.  
- Compute *access patterns* (row/col stride) via dependence graph traversal.  
- Perform *tiling* so that each tile’s data fits in on‑chip memory; this yields candidate sub‑arrays.  
- In the target phase, use a *resource allocator* that takes these tiles + lifetimes to decide residency: if tile’s lifetime < buffer capacity → keep resident; else stream from DRAM.  
- Generate mapping directives (e.g., `@mem_resident`) in the IR for downstream codegen.

**4. Common traps to avoid**  
- *Premature allocation:* Deciding residency before tiling leads to suboptimal placement.  
- *Ignoring lifetimes:* Forcing everything resident wastes on‑chip space and increases contention.  
- *Over‑simplifying patterns:* Treat all arrays as uniform; spatial accelerators often need per‑array stride handling.

**5. Sanity‑check & communicate**  
Run a small test (e.g., matrix multiply) through the pipeline, verify that tiles that fit in local buffer are marked resident and that generated code actually uses on‑chip memory. Explain to teammates: “We first expose lifetimes and access patterns, then tile accordingly, and finally make residency decisions based on a capacity‑constrained allocator.” This shows clear causality and keeps the design modular.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
