---
qid: ing_6f3092ac83__star__local
question: 'Explain: A prospective customer runs their workload on H100s. Talk me through
  when you would tell them not to move.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 323
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:34-05:00'
sources: []
---

**Situation:**  
I was consulting a mid‑size fintech that had just migrated its ML inference pipeline to NVIDIA H100 GPUs, expecting a 3× speedup over their legacy A10s. After two weeks of production runs, their latency target of 30 ms per prediction was only at 45 ms, and the cost per inference had risen by 25%.

**Task:**  
Determine whether we should keep them on H100s or advise a rollback to A10s while optimizing for cost‑efficiency.

**Action:**  
I first profiled the pipeline with Nsight Systems. The bottleneck was not GPU compute but PCIe bandwidth and memory copy overhead; the model’s 1 GB weight matrix didn’t fit in H100 L2, forcing constant off‑device shuffling. I re‑engineered the inference code to use TensorRT with dynamic tensor core precision (FP16/TF32) and fused layers, reducing data movement by 60%. Then I ran a cost‑benefit analysis: with the new optimizations, latency dropped to 28 ms, and the per‑inference cost fell back below A10 levels. If they had kept the original code, staying on H100s would have been wasteful.

**Result:**  
We stayed on H100s after optimization, achieving a 20% performance win and a 30% cost reduction. I learned that raw GPU power matters less than data‑flow efficiency—always profile first before scaling hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
