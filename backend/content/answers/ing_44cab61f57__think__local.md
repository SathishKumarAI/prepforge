---
qid: ing_44cab61f57__think__local
question: 'Explain: When is a workload compute-bound vs memory-bound on a GPU? Do
  the roofline math for transformer prefill vs decode.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 512
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:07:00-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- Define “workload” (e.g., a transformer layer), “compute‑bound” vs “memory‑bound”.  
- Assume a CUDA‑compatible GPU, typical Tensor Core usage, and that we’re comparing *prefill* (batch of sequences) to *decode* (step‑by‑step generation).  
- State any architectural parameters needed: peak FLOPs, memory bandwidth, L2/L1 sizes.

**2️⃣ Adopt the Roofline model as the mental framework**  
- Recall the two axes: *Operational Intensity (OI)* on the x‑axis and *throughput* (GFLOP/s) on the y‑axis.  
- Compute‑bound if OI > roofline intersection; memory‑bound if below.

**3️⃣ Step through the math for each mode**  
1. **Prefill**:  
   - Count FLOPs per token (e.g., QKV matrix multiplies, soft‑max, feed‑forward).  
   - Estimate bytes read/written (weights + activations).  
   - Compute OI = FLOPs / bytes.  
2. **Decode**:  
   - Note the reduced attention width (only past tokens).  
   - Recompute FLOPs and memory traffic; OI will drop.  
3. Plot both on the same roofline to see which lies above/below the GPU’s peak line.

**4️⃣ Beware common pitfalls**  
- Forget that memory traffic includes not just weights but also activation reuse across heads.  
- Assume linear scaling of bandwidth with batch size—often invalid because of cache effects.  
- Misinterpret “compute‑bound” as only FLOPs; latency hiding and instruction mix matter too.

**5️⃣ Sanity‑check & verbalize the conclusion**  
- Verify that the OI for prefill is comfortably above the roofline (compute‑bound) while decode’s OI falls below (memory‑bound).  
- Explain this verbally: “In prefill, we perform many matrix multiplies per byte fetched, so FLOPs dominate; in decode, fewer operations per token mean memory traffic limits performance.”  

By walking through these five steps you can systematically decide whether a GPU workload is compute‑ or memory‑bound and apply the roofline analysis to any transformer scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
