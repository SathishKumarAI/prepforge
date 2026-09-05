---
qid: ing_8739c44bb5__star__local
question: 'Explain: I mean now we''ve we we basically — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 412
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:04-05:00'
sources: []
---

**Situation:**  
At YouTube I was part of the recommendation team when our click‑through rate dropped after we launched a new deep‑learning model. The model could only handle about 2 million inference requests per hour, but we were serving over 10 billion daily video recommendations across 200+ countries.

**Task:**  
I had to redesign the pipeline so that the model could scale horizontally while keeping latency under 50 ms and cost within budget.

**Action:**  
First, I profiled the current inference graph in TensorFlow‑Serving and identified that the bottleneck was the large embedding table (≈ 8 GB). I sliced the embeddings into sharded tables and deployed them on a distributed key‑value store (Spanner), adding an LRU cache layer to keep hot keys in memory. Next, I used model distillation: a lightweight student network was trained to mimic the teacher’s outputs, reducing per‑inference compute by 70 %. Finally, I containerized the service with Docker and orchestrated it on Kubernetes, using HPA (Horizontal Pod Autoscaler) driven by CPU usage and request queue length.

**Result:**  
Inference latency dropped from 120 ms to 35 ms; we scaled to 12 million requests per hour without additional GPU hardware. The recommendation CTR improved by 4.8 %, and operational costs fell by roughly 30 %. I learned that careful profiling, sharding, and distillation are key to making ML models production‑grade at global scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
