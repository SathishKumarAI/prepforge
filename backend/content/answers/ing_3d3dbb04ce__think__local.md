---
qid: ing_3d3dbb04ce__think__local
question: Why is decode latency dominated by memory bandwidth rather than compute,
  and what does that imply for how you optimise a serving system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 455
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:49:24-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - *Clarify* “decode” (inference of a transformer/seq‑to‑seq model).  
   - Assume batch size = 1, beam search or greedy decoding.  
   - Assume typical GPU/TPU with high compute but limited memory bandwidth.

**2. Mental model / framework**  
   - In autoregressive decode each token is produced one at a time.  
   - Compute per step: a few matrix‑multiply kernels (e.g., self‑attention).  
   - Data movement: the hidden states, attention weights and embeddings must be read/written from/to global memory every step.  
   - Bandwidth ≈ (∑ memory accesses) / latency; compute cost is amortized over many steps but memory traffic is linear in sequence length.

**3. Step‑by‑step reasoning**  
   1. Measure GPU FLOPs vs. memory ops for a typical transformer layer.  
   2. Compute per‑token FLOPs (≈ 10⁶–10⁷) and memory traffic (≈ 10⁸ bytes).  
   3. Compare to device peak bandwidth: if memory traffic dominates the time budget, latency is bandwidth‑bound.  
   4. Conclude that increasing compute power won’t reduce latency unless it also improves data locality.

**4. Common traps**  
   - Assuming more FLOPs → faster decode (ignores memory stalls).  
   - Forgetting that decoding uses small batches; kernel launch overhead can mask compute gains.  
   - Overlooking that attention weights are reused across tokens, but still require re‑fetching each step.

**5. Sanity check & communication**  
   - Verify with profiling tools: see memory‑copy counters > GPU cycles.  
   - Explain to stakeholders: “Speed up decoding by reducing data movement—compress embeddings, fuse kernels, or use faster interconnects.”  
   - Suggest optimizations: fused GEMM/softmax, caching attention keys, using lower‑precision memory layouts, or specialized hardware with higher bandwidth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
