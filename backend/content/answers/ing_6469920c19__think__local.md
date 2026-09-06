---
qid: ing_6469920c19__think__local
question: 'Explain: Bottlenecks: Compute-Bound vs. Memory-Bound'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 619
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:39:31-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - *What is meant by “bottleneck”?* We’re talking about which resource limits performance in an AI workload (e.g., training a neural net).  
   - *Scope*: Assume typical GPU‑accelerated training; “compute‑bound” vs. “memory‑bound” are the two common extremes.  
   - *Goal*: Explain the difference, how to identify each, and why it matters.

**2. Adopt a mental model: resource‑utilization pyramid**  
   - Bottom layer: raw compute units (CUDA cores, tensor cores).  
   - Middle layer: memory hierarchy (registers → L1/L2 cache → global DRAM).  
   - Top layer: data movement (PCIe, inter‑GPU links).  
   Bottleneck arises when one layer cannot keep the others fed.

**3. Step‑by‑step reasoning**  
   1. **Compute‑bound**  
      *Definition*: GPU cores are idle most of the time because they’re waiting for arithmetic instructions to finish or lack enough parallelism.  
      *Indicators*: High occupancy, low achieved FLOPS vs. theoretical peak, kernel launch times dominated by compute cycles.  
      *Typical causes*: Small batch size, shallow networks, operations with low arithmetic intensity (e.g., element‑wise ops).  
   2. **Memory‑bound**  
      *Definition*: GPU cores are ready to execute but stall because they’re waiting for data from memory.  
      *Indicators*: Low achieved memory bandwidth relative to peak, high global‑memory traffic, kernel stalls at loads/stores.  
      *Typical causes*: Large tensors that exceed cache, poor access patterns (non‑coalesced reads), excessive weight/gradient replication.  
   3. **Diagnosing** – use profilers (Nsight Compute, nvprof) to look at occupancy, memory throughput, and instruction mix.  
   4. **Implications for optimization** – If compute‑bound, focus on kernel fusion, increasing parallelism; if memory‑bound, improve data locality, reuse tensors, or increase batch size.

**4. Common traps to avoid**  
   - Confusing “compute‑bound” with “kernel launch overhead.”  
   - Assuming a larger batch always removes the bottleneck (it may just shift it).  
   - Ignoring the impact of memory hierarchy; e.g., L1 cache misses can still be compute‑bound if the core stalls on DRAM.

**5. Sanity‑check & verbalize**  
   - Check that the identified bottleneck explains observed performance metrics.  
   - Explain in plain terms: “If your GPU sits idle while doing math, you’re compute‑bound; if it’s busy waiting for data, you’re memory‑bound.”  
   - Summarize by linking back to how each affects scaling and optimization strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
