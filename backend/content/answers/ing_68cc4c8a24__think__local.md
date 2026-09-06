---
qid: ing_68cc4c8a24__think__local
question: 'Explain: Why is LLM decode memory-bandwidth-bound rather than compute-bound?
  Walk me through the numbers on an H100.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 576
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:56:44-05:00'
sources: []
---

**Metacognitive Walk‑through**

1. **Clarify the question & state assumptions**  
   - *What is being asked?* We need to compare memory‑bandwidth vs compute for a single token decode in an LLM on an NVIDIA H100.  
   - *Assumptions:* model size (e.g., 175 B parameters), batch size = 1, inference mode (FP16 or TF32), all layers fully loaded into GPU memory, ignoring data‑center traffic.

2. **Select a mental model**  
   - Treat each token decode as a series of matrix–vector multiplications per transformer layer. Compute the *operations* (FLOPs) and the *data movement* (bytes read/written). Use the H100’s peak TFLOP/s and memory bandwidth figures to compute theoretical limits.

3. **Reason step‑by‑step**  
   - **Compute side:** For a 12‑layer GPT‑style model, each layer ≈ 2×(hidden\_dim²) FLOPs per token. Plug in hidden_dim = 12288 → ~5 GFlops/token.  
   - **Memory side:** Each weight matrix is read once (and result written). That’s 2×(hidden_dim²) bytes per layer for FP16, ≈ 1 GB/token total.  
   - Compare to H100 specs: 312 TFLOP/s compute vs 1555 GB/s memory bandwidth. Scale the per‑token numbers to see which ceiling is hit first.

4. **Avoid common traps**  
   - Don’t conflate *peak* spec with *effective* throughput; actual usage is lower due to kernel launch overhead, memory contention, and instruction mix.  
   - Forget that some operations (e.g., layer norm) are compute‑heavy but tiny in size.  
   - Misinterpret “memory‑bound” as meaning the GPU stalls waiting for RAM—here it’s about bandwidth capacity relative to data traffic.

5. **Sanity‑check & communicate**  
   - Verify by plugging numbers into a simple Python script or using NVIDIA Nsight metrics: if memory usage per token approaches 1 GB and bandwidth usage nears 1555 GB/s, the bottleneck is memory.  
   - Explain aloud: “Given these calculations, the H100’s compute capacity far exceeds what a single‑token decode needs; the limiting factor is how fast we can shuttle data through the on‑board memory.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
