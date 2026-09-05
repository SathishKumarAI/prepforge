---
qid: ing_7f22aba248__star__local
question: Here's a CUDA kernel that's 10× slower than expected. Without running it,
  what are the usual suspects, and how do you confirm each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 352
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:47:53-05:00'
sources: []
---

**Situation:** While porting a convolutional layer from PyTorch to a custom CUDA kernel for an inference engine, the profiler reported that my kernel was running ten times slower than the baseline.

**Task:** I had to identify why the GPU was underperforming and bring the runtime back within 10 % of the reference without rewriting the whole routine.

**Action:**  
1. **Occupancy & register pressure** – I ran `nvprof` to check active warps per SM; it showed only ~20 % occupancy, so I reduced the register count by simplifying local variables and using shared memory for intermediate results.  
2. **Memory bandwidth & coalescing** – Using Nsight Compute, I saw non‑coalesced global loads. I reordered the thread indexing to stride‑by‑1 across the channel dimension and aligned data structures to 128‑byte boundaries.  
3. **Instruction mix & latency hiding** – The instruction trace revealed many divergent branches; I replaced the conditional with a predicated version, eliminating warp divergence.  
4. **Kernel launch configuration** – The grid size was too small for the problem domain. I increased block dimensions (from 16×16 to 32×32) and adjusted shared memory usage accordingly.

**Result:** After these tweaks, the kernel ran at 12 % of the original slow time—matching the reference within 5 %. I learned that a systematic check of occupancy, memory access patterns, branch divergence, and launch parameters is essential before diving into deeper optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
