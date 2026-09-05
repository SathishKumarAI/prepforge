---
qid: ing_e2cdc72dc6__star__local
question: 'Explain: Latency — System Design was HARD until I Learned these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 354
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:02:16-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our real‑time fraud detection model had to score every transaction in under 50 ms or risk losing customers. The existing batch pipeline was fine for nightly jobs but couldn’t meet the latency requirement.

**Task:**  
I needed to redesign the inference system so that we could process millions of transactions per day with sub‑50 ms end‑to‑end latency, while keeping cost and maintainability in check.

**Action:**  
1. Benchmarked the current GPU‑based inference on AWS SageMaker—latency was 120 ms due to serialization overhead.  
2. Moved the model to a lightweight TensorRT engine on an EC2 G4 instance; reduced kernel launch time by 40 %.  
3. Introduced a sharded Redis cache for feature vectors, cutting data fetch from 15 ms to 2 ms.  
4. Implemented async HTTP/2 micro‑services with FastAPI, enabling parallel request handling and eliminating thread contention.  
5. Applied model quantization (INT8) after profiling with NVIDIA Nsight, preserving 99.7 % accuracy while halving memory footprint.  
6. Deployed a circuit breaker to fall back to a conservative rule‑based engine during peak spikes, keeping SLA intact.

**Result:**  
Latency dropped from 120 ms to **32 ms average**, throughput increased by 3×, and cost per inference fell by 25 %. I learned that mastering low‑level profiling, caching strategies, and quantization is essential for production ML systems where every millisecond counts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
