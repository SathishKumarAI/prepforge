---
qid: ing_7f22aba248__faang__local
question: Here's a CUDA kernel that's 10× slower than expected. Without running it,
  what are the usual suspects, and how do you confirm each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 554
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:40:40-05:00'
sources: []
---

**Clarify**

You’re asked to diagnose why a CUDA kernel runs an order of magnitude slower than expected *without executing it*.  
Assumptions: the source code is available, you can inspect device and host memory usage, and you have access to profiling tools (nvprof, Nsight) or compiler output.  

**Approach**

1. List common performance culprits.  
2. For each, describe a static‑analysis technique or minimal run that confirms it.  

**Depth**

| Suspect | What to check | Confirmation |
|---------|---------------|--------------|
| **Kernel launch configuration** | Thread/block counts vs. occupancy calculator | Compute occupancy via `cudaOccupancyMaxActiveBlocksPerMultiprocessor` and compare to theoretical max. |
| **Bank‑conflict / shared‑memory layout** | Shared array stride, access patterns | Inspect `.cu` code for 32‑byte bank accesses; run Nsight Compute to spot “shared memory bank conflicts”. |
| **Memory bandwidth/latency** | Coalesced global loads/stores | Verify pointer alignment and stride; use `nvprof --metrics gld_efficiency,gst_efficiency`. |
| **Unnecessary synchronization** | `__syncthreads()` placement, atomic ops | Scan for atomics in hot loops; check compiler warnings about barrier misuse. |
| **Data transfer overhead** | Host‑to‑device copies per launch | Look at host code: any copy inside loop? Use profiling to count H2D transfers. |
| **Instruction mix / register pressure** | Too many registers per thread | Compile with `-Xptxas -dlcm=ca` and check `registers per thread` from PTXAS output. |
| **Kernel launch overhead** | Many tiny kernels launched | Count launches; if >1k, consider kernel fusion. |
| **Implicit conversions / type mismatches** | Using float vs double where unnecessary | Search for casts; compile with `-Wconversion`. |

**Edge Cases**

- If occupancy is fine but bandwidth low → misaligned accesses.  
- High register usage may spill to local memory causing latency.  
- Atomic ops in inner loops can serialize execution.

**Optimize & Communicate**

Summarize findings: “Kernel X has 64‑byte bank conflicts and 8 × more registers than needed, leading to 2× occupancy drop.”  
Suggest fixes: adjust shared‑memory layout, reduce register usage via `--maxrregcount`, fuse kernels.  
Convey confidence by referencing profiling metrics and static checks, showing a systematic elimination of suspects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
