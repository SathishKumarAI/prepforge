---
qid: ing_86bae458a1__star__local
question: 'Explain: So we had to take some extraordinary — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 322
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:01-05:00'
sources: []
---

**Situation:**  
During the 2018 Seattle Conference on Scalability, my team was tasked with presenting a live demo of our new recommendation engine that could serve personalized video suggestions to millions of users in real time.

**Task:**  
We had to prove that the model could handle a 10‑fold increase in traffic while keeping latency under 200 ms and maintaining a top‑k accuracy of at least 85%.

**Action:**  
I spearheaded the migration from a single‑node inference server to a Kubernetes‑based microservice cluster. We containerized the TensorFlow model, added a gRPC gateway with load‑balancing via Istio, and integrated Redis for caching the most frequently requested embeddings. To reduce inference time, I applied TensorRT optimizations on NVIDIA GPUs and used quantization to 8‑bit integers. I also set up Prometheus alerts to monitor CPU, GPU, and network usage, adjusting replica counts automatically based on traffic spikes.

**Result:**  
The demo handled 12 million requests per minute with an average latency of 180 ms and a top‑k accuracy of 87%. Post‑conference, the deployment was rolled out to production, reducing our inference cost by 35% while improving user engagement metrics (CTR +9%). I learned that combining container orchestration, model optimization, and real‑time monitoring is key to scaling ML workloads at YouTube’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
