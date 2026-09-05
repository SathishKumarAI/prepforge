---
qid: ing_065c8b7003__star__local
question: 'Explain: Performance Under Load — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 324
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:34-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with launching a recommendation engine for an e‑commerce platform that would serve 2 million daily active users. During load testing the model’s inference latency spiked from 120 ms to over 1 second once traffic hit 10,000 requests per second.

**Task**  
I had to redesign the serving architecture so that latency stayed below 200 ms under peak load while keeping costs reasonable and ensuring zero downtime during rollout.

**Action**  
First I profiled the inference pipeline with PyTorch‑Serve, identifying the GPU batch size as the bottleneck. I switched to a micro‑service pattern: a lightweight FastAPI wrapper handled request routing, while a TensorRT‑optimized model served batches of 32 on an NVIDIA A10 GPU. To scale horizontally I deployed the service in Kubernetes with HPA based on CPU + GPU utilisation and added an ingress controller that used weighted round‑robin to spread traffic across replicas. For state persistence I moved from a monolithic Redis cache to a read‑replicated, partitioned Redis cluster, reducing lock contention.

**Result**  
After the rollout, peak latency dropped to 150 ms at 15,000 rps and our cost per inference fell by 18 %. The system now scales linearly up to 30,000 requests per second with no performance degradation. I learned that micro‑service decomposition coupled with GPU batch optimisation can dramatically improve ML serving under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
