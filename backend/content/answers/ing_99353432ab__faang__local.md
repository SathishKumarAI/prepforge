---
qid: ing_99353432ab__faang__local
question: 'Explain: Part 1: The Software: What Each GPU Holds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 652
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:40:59-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of how a modern GPU stores and manages data during inference, specifically the “software” layers that live in device memory.  
Assumptions I’d confirm: *Is the focus on inference only?* (training is different.) *Which architecture?* (NVIDIA Ampere/Grace, AMD RDNA‑3, etc.) *Do we need to touch driver APIs or just high‑level concepts?*

**Approach**  
1. Map out the memory hierarchy: registers → L1/L2 cache → shared/local memory → global VRAM.  
2. Identify the key data structures per layer: weights, activations, bias, and auxiliary tensors (e.g., batch norm statistics).  
3. Explain how these are packed into GPU “tiles” or warp‑sized blocks for SIMD execution.  
4. Highlight orchestration via CUDA/ROCm kernels, stream multiplexing, and memory‑coalescing.

**Depth**  
- **Weights & Biases**: Stored in global VRAM as 16‑bit FP or INT8 tensors (mixed‑precision). They’re partitioned into *tiles* that fit in L1 cache; each warp loads a tile once per layer.  
- **Activations**: After the kernel, activations live in shared memory for intra‑block reuse, then spilled to global memory if needed by subsequent layers.  
- **Batch‑Norm & Layer‑Norm Params**: Small scalars kept in registers or constant memory for fast access.  
- **Scratchpad / Workspace**: For ops like convolution or attention, a temporary buffer (often 4–8 MB) is preallocated per stream to avoid reallocations.  
- **Kernel Launch Configuration**: Each layer maps to one or more kernels; thread blocks are sized to match tile dimensions, ensuring full occupancy.  
Complexity: memory traffic dominates latency (~1–2 ns per word). Cache hit ratios >90% for well‑tiled models.

**Edge Cases**  
- *Model size > VRAM*: paging or model parallelism is required; otherwise inference stalls.  
- *Sparse weights*: need compressed formats (CSR) that break the tile assumption.  
- *Dynamic shapes*: variable batch sizes can underutilize warps if not padded.

**Optimize & Communicate**  
To improve, I’d:  
1. **Quantize aggressively** to INT4 where accuracy permits, halving memory bandwidth.  
2. **Fuse layers** (e.g., conv + BN + ReLU) into a single kernel to eliminate intermediate spills.  
3. **Use TensorRT/ONNX‑Runtime optimizations** that auto‑tune tile sizes per GPU.

I’d narrate: “We first lay out the weight tensors in VRAM, then stream them warp‑by‑warp into L1 cache. Each thread block processes a spatial tile, reusing activations from shared memory before spilling to global memory for downstream layers.” This shows clear structure, depth, and an eye toward performance—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
