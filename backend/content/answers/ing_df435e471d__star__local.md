---
qid: ing_df435e471d__star__local
question: 'Explain: Solutions — Cache Miss Attack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 343
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:11-05:00'
sources: []
---

**Situation:**  
In a production recommendation system at my previous company, we noticed that model inference latency spiked during peak traffic hours—up to 30 % slower than the SLA allowed. Profiling showed frequent cache evictions on the GPU memory, causing expensive data transfers from host RAM.

**Task:**  
I was tasked with reducing inference latency by mitigating the impact of cache miss attacks (i.e., patterns that deliberately trigger cache invalidations) while keeping model accuracy unchanged.

**Action:**  
1. I profiled tensor operations using NVIDIA Nsight and identified that dynamic batching caused irregular memory access patterns, leading to cache thrashing.  
2. I rewrote the inference pipeline in TensorRT, enforcing static batch sizes and using `TensorRT::BuilderConfig::setMaxWorkspaceSize()` to pre‑allocate a contiguous workspace.  
3. Implemented a custom CUDA kernel that reordered feature tensors into a cache‑friendly layout (structure of arrays) before feeding them to the model.  
4. Added a lightweight LRU cache for pre‑computed embeddings, reducing repeated memory loads by 70 %.  

**Result:**  
Inference latency dropped from 120 ms to 78 ms during peak load—a 35 % improvement—and the system met its SLA 99.8 % of the time. I learned that careful memory layout and batching can neutralize cache miss attacks in real‑time ML workloads, and that profiling tools are essential for pinpointing such low‑level bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
