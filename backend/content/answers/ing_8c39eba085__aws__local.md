---
qid: ing_8c39eba085__aws__local
question: 'Explain: ML / Research Round — Together AI Interview Guide 2026: Open-Model
  Inference, CUDA Kernels, Speculative Decoding, and Enterprise AI \u2013 techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 500
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:59-05:00'
sources: []
---

**Situation / Task**  
In my last role at a cloud‑native startup, we needed to ship an on‑prem LLM service that could serve 5 k concurrent requests with <30 ms latency while keeping GPU usage under 70 %. I was tasked with redesigning the inference pipeline and adding speculative decoding for higher throughput.

**Action**  
I first profiled the model with *nvprof* and identified kernel stalls in the attention layer. I rewrote the CUDA kernels using mixed‑precision (FP16) and fused softmax–dropout to reduce memory traffic, cutting per‑token compute from 4 ms to 1.8 ms.  
Next, I implemented a lightweight speculative decoding scheduler on top of NVIDIA’s TensorRT, which pre‑generates beam candidates during idle cycles. This added ~15 % throughput without extra GPU cost.  
To ensure reliability at scale, I deployed the service on **Amazon SageMaker Edge** containers, using **ECS Fargate Spot** for cost efficiency and **AWS Nitro Enclaves** for data privacy. Autoscaling was driven by a CloudWatch metric (GPU utilization) with a 5 % hysteresis to avoid thrashing.

**Result**  
Latency dropped from 45 ms to 28 ms, and throughput increased from 3.2k to 4.9k requests per second—an **85 % improvement**—while keeping GPU usage below the target threshold. Cost per inference fell by 22 %.  

**Leadership Principles**  
- *Customer Obsession*: Delivered a faster, cheaper model that met SLA demands.  
- *Dive Deep*: Rewrote kernels and profiled at the byte level to uncover bottlenecks.  
- *Ownership*: Took end‑to‑end responsibility for performance, cost, and security.  

**Bar‑raiser Takeaway**  
Showed measurable impact (latency & throughput), deep technical dive (CUDA optimization), and a learning loop: after initial rollout we monitored error rates, adjusted beam width, and documented the trade‑off between speculative decoding gains vs. marginal GPU load spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
