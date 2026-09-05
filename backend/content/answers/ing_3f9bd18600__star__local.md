---
qid: ing_3f9bd18600__star__local
question: 'Explain: Running more workloads on the same hardware'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 328
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:25-05:00'
sources: []
---

**Situation** – At my last startup we had a single GPU server (NVIDIA RTX 3090) that handled both model training and inference for three separate projects. By the end of Q2 the queue time for training jobs hit 90 minutes, while inference latency slipped above our SLA of 50 ms.

**Task** – I was tasked with squeezing an additional 30% throughput from the same GPU without buying new hardware, all while keeping inference latency under control.

**Action** – First, I profiled each workload with Nsight Systems and discovered that training jobs were over‑committing CUDA streams and leaving idle memory. I restructured the training pipeline to use mixed‑precision (FP16) via Apex, reducing memory usage by 40%. Then I introduced a lightweight inference cache using TensorRT’s engine builder, batching requests in micro‑batches of 8 so that the GPU was always saturated. Finally, I orchestrated the workloads with NVIDIA Multi‑Process Service (MPS), assigning separate CPU affinity slices to avoid contention.

**Result** – After deployment, training queue time dropped from 90 min to 60 min and inference latency stayed at ~45 ms. Overall GPU utilization climbed from 65% to 85%, giving us a 30% throughput boost without any extra spend. I learned that careful profiling + precision tuning can unlock hidden headroom on existing hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
