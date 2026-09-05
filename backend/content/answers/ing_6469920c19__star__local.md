---
qid: ing_6469920c19__star__local
question: 'Explain: Bottlenecks: Compute-Bound vs. Memory-Bound'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 288
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:29-05:00'
sources: []
---

**Situation:**  
While leading a deep‑learning inference service for a mobile health app, our latency target was 50 ms per request, but we kept hitting 120 ms on the latest Snapdragon GPU.

**Task:**  
Identify the root bottleneck and redesign the pipeline so that inference stayed under 50 ms without sacrificing accuracy.

**Action:**  
I profiled the model with Nsight Systems. The GPU stalls were split: 35 % of time was spent waiting for memory bandwidth (copying tensors between CPU, shared RAM, and GPU), while only 20 % was actual compute. I refactored the data pipeline to fuse tensor operations into a single kernel launch, eliminating intermediate buffers. Then I switched from float32 to mixed‑precision FP16 on the GPU, reducing memory traffic by ~60 %. Finally, I reordered layers so that large convolutional outputs were processed immediately before reduction, keeping them resident in cache.

**Result:**  
Latency dropped from 120 ms to 42 ms—meeting the target. Memory usage fell by 45 %, and power consumption on the device decreased by 30 %. The exercise reinforced that profiling early distinguishes compute‑bound from memory‑bound constraints, guiding targeted optimizations that yield real performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
