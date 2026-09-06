---
qid: ing_7f22aba248__think__local
question: Here's a CUDA kernel that's 10× slower than expected. Without running it,
  what are the usual suspects, and how do you confirm each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 659
total_tokens: 866
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:24:30-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- *What is “10× slower than expected”?* Define the baseline: a CPU implementation, an earlier CUDA version, or a theoretical FLOP‑rate estimate?  
- Assume the code compiles and runs without errors; we’re focusing on performance, not correctness.  

**2️⃣ Mental model – classic GPU bottlenecks**  
| Category | Typical symptom | Quick probe |
|----------|-----------------|-------------|
| **Occupancy / resource limits** | Low active warps, high register/SMEM usage | `nvprof --metrics all` or Nsight Compute “Resource Utilization” |
| **Memory bandwidth & coalescing** | High global memory traffic, uncoalesced accesses | Inspect access patterns; use `cuda-memcheck --leak-check full` for stray loads/stores |
| **Instruction mix / stalls** | Many arithmetic‑intensive ops but few thread warps active | Look at “Warp Execution Efficiency” & “ALU efficiency” |
| **Launch configuration** | Too many blocks/threads per SM, or too few threads | Check block size vs. occupancy calculator; adjust to ~256–512 threads/block |
| **Synchronization / atomics** | Frequent `__syncthreads()` or atomic ops causing serialization | Count sync points; profile “warp serialization” events |

**3️⃣ Step‑by‑step reasoning**  
1. Run a profiler (Nsight Compute) on the kernel alone, capture *all* metrics.  
2. Verify occupancy: if < 50 % SMs are active → investigate register/SMEM spills or block size.  
3. Examine memory traffic: if global bytes per cycle is far below theoretical peak and coalescing efficiency is low → refactor data layout or use shared‑memory tiling.  
4. Check instruction throughput: a high “ALU efficiency” with many stalls suggests warp divergence; review branching logic.  
5. Look for atomics or `__syncthreads()` inside tight loops; if present, consider redesign (e.g., using reduction patterns that avoid serialization).  

**4️⃣ Common traps to avoid**  
- Assuming the kernel is “correct”; a bug can manifest as a huge slowdown.  
- Relying solely on CPU timing for comparison—CPU‑GPU differences in memory hierarchy make direct ratios misleading.  
- Ignoring launch configuration; launching too many blocks can oversubscribe resources, causing context switches that hurt performance.  

**5️⃣ Sanity‑check & communicate**  
- Re‑run the profiler after each change to confirm a measurable improvement.  
- If a suspected bottleneck is addressed but speedup is negligible, re‑examine the next category in the table.  
- Document findings in a concise bullet list: “Problem → Evidence → Fix → Result” so that the reasoning process can be reused for future kernels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
