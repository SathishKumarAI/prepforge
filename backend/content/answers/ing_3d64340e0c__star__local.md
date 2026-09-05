---
qid: ing_3d64340e0c__star__local
question: How do you autoscale a vLLM deployment? Why doesn't standard CPU-based HPA
  work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 314
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:54-05:00'
sources: []
---

**Situation:**  
I was tasked with deploying a large language model on Kubernetes for an internal chatbot service that suddenly saw traffic spike from 50 to over 5,000 concurrent requests during a product launch.

**Task:**  
Scale the vLLM inference engine automatically while keeping latency under 200 ms and cost per request below $0.02.

**Action:**  
I discovered that CPU‑based HPA was ineffective because vLLM’s inference workload is GPU‑bound: the CPU can queue requests, but the GPU memory becomes the bottleneck. I implemented a custom metric exporter that exposed *GPU utilization* and *batch size throughput* to Prometheus. Using Kubernetes Event-Driven Autoscaling (KEDA), I set up an HPA that scaled replicas based on GPU usage thresholds (80 % peak) and a minimum batch latency target. To avoid memory thrashing, I added a pre‑warm policy that kept one pod idle during low traffic windows. Finally, I integrated a lightweight admission controller to reject requests when all GPUs were saturated, redirecting them to a fallback model.

**Result:**  
After launch, the system automatically scaled from 2 to 12 replicas within minutes of the spike, keeping GPU utilization around 75 % and latency at ~180 ms. Cost per inference dropped by 30 %. I learned that for GPU‑heavy workloads, scaling must be driven by hardware‑specific metrics rather than CPU load alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
