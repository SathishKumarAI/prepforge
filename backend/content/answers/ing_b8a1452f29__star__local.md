---
qid: ing_b8a1452f29__star__local
question: 'Explain: Serving Video Key Points — YouTube\u00a0Architecture - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 347
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:28-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping the “Key Points” feature for our educational videos on a platform that serves over 30 million daily users. The existing monolith delivered captions in real‑time but struggled under peak traffic, causing 8 % latency spikes and throttling during live events.

**Task:**  
Design a horizontally scalable architecture that could handle millions of concurrent requests while keeping response time below 200 ms for the key‑point extraction endpoint.

**Action:**  
I split the workload into three services: an ingest API (Node.js + Fastify) that pushes raw video metadata to Kafka, a streaming worker cluster (Python + Faust) that consumes the stream, runs a lightweight Transformer model on GPU instances, and writes results to Redis Streams; finally a cache‑driven REST gateway (Go + gRPC) that serves precomputed key points from Redis. I introduced rate‑limiting via Envoy, auto‑scaling policies on Kubernetes, and used vectorized inference with ONNX Runtime for speed. Monitoring with Prometheus & Grafana kept latency under 150 ms during load tests of 2 M QPS.

**Result:**  
The new pipeline cut average latency from 350 ms to 120 ms, reduced infrastructure costs by 30 % through efficient GPU usage, and increased feature adoption by 45 %. I learned that decoupling heavy ML inference from the API layer and leveraging streaming queues can dramatically improve scalability without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
