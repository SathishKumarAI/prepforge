---
qid: ing_bbcd3e8b4a__star__local
question: 'Explain: So the the idea is that because — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 368
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:56-05:00'
sources: []
---

**Situation:**  
At a summer internship with the YouTube data team, I was assigned to help reduce the latency of our recommendation model serving pipeline during peak traffic in Seattle. The current system was bottlenecked by the GPU inference cluster that processed 2 million requests per minute, and any delay pushed the user engagement metric “watch time” down.

**Task:**  
I had to design a more scalable solution that could handle the same load with less latency while keeping cost under $30k/month. The goal was to drop average response time from 350 ms to under 200 ms without compromising recommendation quality (AUC > 0.78).

**Action:**  
I first profiled the pipeline using NVIDIA Nsight and discovered that CPU‑to‑GPU transfer accounted for 45% of latency. I refactored the inference code to use TensorRT with INT8 quantization, which reduced model size by 70% and eliminated most transfers. Then I introduced a request batching layer in Go, aggregating up to 64 requests per GPU call, and leveraged Kubernetes HPA to spin up additional GPU pods during traffic spikes. Finally, I added a lightweight cache for the top‑10% of users’ embeddings using Redis.

**Result:**  
The average latency dropped to 180 ms, meeting our target. The improved throughput allowed us to keep the same recommendation quality while cutting inference costs by 35%, saving about $12k/month. I learned how quantization, batching, and dynamic scaling together can turn a monolithic GPU service into a lean, elastic microservice that meets strict latency SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
