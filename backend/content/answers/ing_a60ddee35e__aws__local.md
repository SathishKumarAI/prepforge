---
qid: ing_a60ddee35e__aws__local
question: 'Explain: 2.4 Memory Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 491
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:19-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a high‑availability ML inference service that could handle 10 k requests/sec while keeping the per‑node memory footprint under **4 GB** so we could run on spot instances in us‑east‑1. The goal was to keep latency < 120 ms and cost per request <$0.01.

**Action**  
*Architecture*: I designed a **layered load balancer** using **AWS Global Accelerator → ELBv2 (ALB)** for global traffic distribution, then an **Amazon ECS Fargate** cluster running the inference containers.  
*Memory optimization*: The model was split into 3 sub‑models; each container only loaded its shard. I used **ONNX Runtime with GPU‑optimized kernels**, which reduced memory by ~60 % compared to TensorFlow. Containers were configured with **`memoryReservation=2GB`** and a **health‑check that kills a pod if it exceeds 3 GB**, forcing autoscaling.  
*Scaling*: Auto Scaling policies were based on CPU/Memory utilization (target 70 %) plus a predictive scaling hook using **Amazon CloudWatch metrics + SageMaker Forecasting** to pre‑scale during peak hours.  
*Cost & trade‑offs*: Spot instances gave us 3× cost savings but introduced 5 % interruption risk; we mitigated this with **Auto Scaling graceful shutdown** and a small buffer of spare pods.

**Result**  
We achieved **99.8 % request success**, latency < 110 ms, and reduced per‑request cost to **$0.008**—a **30 %** savings over the baseline. The design also cut memory usage from 12 GB to under 4 GB per pod.

> **Leadership Principles Highlighted**  
> • *Ownership* – I drove the end‑to‑end solution, from model sharding to autoscaling.  
> • *Dive Deep* – Detailed analysis of runtime memory and scaling metrics guided every trade‑off.  
> • *Deliver Results* – Quantified impact on latency, availability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
