---
qid: ing_aeaa49a1a4__faang__local
question: 'Explain: Throughput'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 463
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:29:41-05:00'
sources: []
---

**Clarify**  
We’re asked to define *throughput* in a machine‑learning context—e.g., how many predictions or training samples an ML system can process per unit time. I’ll assume we mean both inference and training, and that the interviewer wants insight into metrics, bottlenecks, and practical trade‑offs.

**Approach**  
1. Define throughput mathematically.  
2. Explain what drives it (compute, memory bandwidth, IO).  
3. Contrast batch vs streaming scenarios.  
4. Mention common measurements (samples/sec, FLOPs/s) and how to capture them.  
5. Discuss tuning knobs (batch size, model parallelism, quantization).

**Depth**  

> **Throughput** = *number of samples processed per second* (or *FLOPs per second*).  
> For inference: `samples_sec = batch_size / latency`.  
> For training: `steps_per_sec` × `batch_size`.  
> Bottlenecks often lie in GPU memory bandwidth, PCIe transfer, or CPU‑GPU sync. Batch size is a key lever—larger batches amortize kernel launch overhead but may hit memory limits. Techniques such as model pruning, mixed‑precision (FP16), and tensor‑core utilization can boost FLOPs/s without changing batch size.

**Edge Cases**  
- *Latency‑sensitive* workloads: increasing throughput by batching can hurt real‑time constraints.  
- *Model heterogeneity*: different layers have varying compute/memory profiles; naive batching may underutilize GPU cores.  
- *Distributed training*: network contention can dominate, making per‑GPU throughput misleading.

**Optimize & Communicate**  
Explain that profiling (e.g., NVIDIA Nsight) reveals where the time is spent, then iterate: adjust batch size, apply mixed precision, or shard the model. Emphasize that throughput must be balanced against latency and accuracy constraints—what we gain in samples/sec may come at a cost to inference speed per request. Conclude by noting that real‑world systems expose a *throughput–latency* trade‑off curve, guiding deployment decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
