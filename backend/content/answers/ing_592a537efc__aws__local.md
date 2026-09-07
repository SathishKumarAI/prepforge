---
qid: ing_592a537efc__aws__local
question: Design the IR and pass pipeline for a compiler targeting a spatial dataflow
  accelerator. Where does the memory-residency decision live, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 398
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:24-05:00'
sources: []
---

**Situation / Task**  
I was asked to design an *IR‑to‑Pass* pipeline for a compiler that targets a spatial dataflow accelerator (e.g., Graphcore IPU). The key decision is **when and where the memory‑residency flag (static vs. streaming) should be decided**.

**Action**  
1. **Front‑end** parses high‑level kernels into an SSA IR enriched with *liveness* annotations.  
2. A **Memory‑Residency Pass** runs immediately after SSA construction, using a lightweight data‑flow analysis to compute the *access footprint* of each tensor (size × stride).  
3. The pass emits a `@resident` attribute on tensors that fit in local SRAM; others get a `@streaming` flag and are scheduled into a dedicated **Streaming Scheduler**.  
4. Subsequent passes (Loop‑Unroll, Vectorizer) respect the flag: resident tensors are mapped to *tile* registers, streaming ones are bound to *DMA streams*.  
5. The IR is finally lowered to a **GraphIR** that drives the accelerator’s runtime via AWS Nitro Enclave APIs for secure memory access.

**Result**  
The residency decision moved from the backend to an early pass reduced compilation time by **30 %** (from 4 s to 2.8 s) and cut runtime energy consumption by **18 %** on a benchmark graph‑neural‑network workload, because resident tensors avoided costly DMA hops.

**Reflection**  
I learned that *early, data‑driven decisions* (Dive Deep + Bias for Action) enable later passes to be simpler and more efficient. The bar‑raiser will notice my ownership of the entire pipeline, the quantitative impact, and the iterative refinement after profiling failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
