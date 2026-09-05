---
qid: ing_0bcfc39c24__star__local
question: 'Explain: Cons — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 306
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:14-05:00'
sources: []
---

**Situation**  
At my previous company we launched a recommendation engine for an e‑commerce platform that had just hit 1 M daily active users. The model was a simple matrix factorization pipeline running on a single Spark cluster.

**Task**  
I needed to scale the inference service so it could handle peak traffic (≈200k requests per second) while keeping latency under 50 ms and maintaining a cost‑effective architecture.

**Action**  
First, I profiled the Spark jobs and discovered that data shuffling was the bottleneck. I refactored the pipeline into micro‑services using TensorFlow Serving, deployed them behind an autoscaling Kubernetes cluster, and introduced Redis caching for the top 10k item vectors per user. To reduce model size, I applied quantization and pruned less‑important weights, cutting inference time by 35 %. For load balancing, I implemented a request routing layer that used consistent hashing to keep users on the same pod, reducing cold starts.

**Result**  
Latency dropped from 120 ms to 32 ms during peak periods, and throughput increased to 250k requests per second. Operational costs fell by 28 % due to better resource utilization. I learned that while ML models can deliver great value, designing for scalability often requires re‑thinking data pipelines, model size, and infrastructure as code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
