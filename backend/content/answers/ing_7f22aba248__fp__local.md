---
qid: ing_7f22aba248__fp__local
question: Here's a CUDA kernel that's 10× slower than expected. Without running it,
  what are the usual suspects, and how do you confirm each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 651
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:35:47-05:00'
sources: []
---

**Why a CUDA kernel can lag behind its theoretical speed‑up**

A GPU’s performance is governed by the *roofline model*: the attainable throughput is bounded either by compute (FLOPs) or memory bandwidth, whichever is lower for the given arithmetic intensity. If your kernel runs 10× slower than predicted, it almost certainly violates one of these bounds.  

1. **Bank‑conflicts / shared‑memory layout**  
   *Principle*: Shared memory is a set of banks; simultaneous accesses to the same bank serialize.  
   *Check*: `cuda-memcheck --tool=sharedmem` or inspect the kernel’s shared‑memory indices for stride‑1 patterns. A non‑obvious cue: even if each thread uses a unique address, an unaligned start can misalign all banks.

2. **Global‑memory coalescing**  
   *Principle*: Coalesced loads use fewer memory transactions; otherwise each thread may issue its own transaction.  
   *Check*: Run `nvprof --profile-api-trace` or `cuda-gdb -t=globalMem`. Look for “uncoalesced” flags in the report. A subtle pitfall: pointer arithmetic inside a loop can break alignment after a few iterations.

3. **Occupancy vs. resource limits**  
   *Principle*: High occupancy masks latency, but too many registers or shared memory per block reduces active warps.  
   *Check*: `nvprof --analysis-metrics` to view “active warps” and “registers per thread”. If the register count is near the limit (e.g., 255), consider using `__launch_bounds__`.

4. **Branch divergence**  
   *Principle*: Divergent branches force serialization of the divergent paths.  
   *Check*: Profile for “divergent branch” events. A hidden source: data‑dependent loops where one thread’s condition is rarely true can still stall many others.

5. **Kernel launch overhead / grid size**  
   *Principle*: For very small problems, the launch time dominates.  
   *Check*: Compare `cudaEventElapsedTime` for kernel vs. CPU work. If the problem size is tiny, batch several calls or use streams.

6. **Memory allocation patterns (page‑locked vs. pageable)**  
   *Principle*: Page‑locked memory allows DMA; otherwise a copy to pinned buffer occurs per transfer.  
   *Check*: Verify `cudaMallocHost` usage and measure transfer times with `nvprof`.

**Non‑obvious insight:** Even if every thread follows the same code path, *implicit* divergence can arise from unaligned loads or mispredicted memory accesses. Detecting it requires inspecting the *access patterns*, not just the branch statements.

By systematically validating each of these aspects against the roofline and profiling data, you isolate the bottleneck that forces your kernel to run an order of magnitude slower than expected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
