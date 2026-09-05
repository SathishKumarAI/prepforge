---
qid: ing_b3ff069192__star__local
question: 'Explain: :star: Stateless Protocol — Statefulvsstateless'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 374
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:53-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time recommendation engine that served personalized content to millions of users each day. The front‑end was a microservice exposed over HTTP, and the back‑end model server was written in Python with TensorFlow Serving.

**Task:**  
We needed to reduce latency and improve scalability while keeping the system reliable under traffic spikes. My goal was to decide whether to keep the inference service stateful (caching user embeddings in memory) or switch to a stateless design that could be scaled horizontally.

**Action:**  
I first profiled the request pipeline: each request involved loading a 128‑dimensional embedding, performing matrix multiplication with the model weights, and returning a ranked list. Caching was causing a “memory bloat” issue—each node held state for millions of users, leading to GC pauses. I refactored the service into a stateless HTTP endpoint: embeddings were fetched from Redis per request, and the TensorFlow Serving process had no session data. To preserve performance, I added a small LRU cache in each worker for the most frequent 10 % of users (≈200 k entries). I also implemented graceful rolling updates using Kubernetes readiness probes so that new pods could start before old ones shut down.

**Result:**  
The stateless design allowed us to scale from 4 to 20 pods during peak traffic without any service interruptions. Average inference latency dropped from 210 ms to 95 ms, and the system handled a 3× increase in concurrent users while keeping memory usage below 2 GB per pod. I learned that careful caching of only hot data can combine the benefits of statelessness (easy scaling) with acceptable performance trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
