---
qid: ing_3b3d01cde5__star__local
question: 'Explain: Reducing Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 347
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:01-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with deploying a real‑time fraud detection model on a payment gateway that processed ~10 k transactions per second. The SLA required predictions to be returned within 150 ms; however, our initial end‑to‑end latency averaged 350 ms due to heavy batch inference and a monolithic service.

**Task:**  
Reduce the overall response time below the SLA while maintaining throughput (≥10 k TPS) and staying within the existing network bandwidth limits (~1 Gbps).

**Action:**  
I re‑architected the pipeline into three lightweight microservices: 1) an event collector that pushes requests to a Kafka topic, 2) a stateless inference worker using ONNX Runtime on GPU‑accelerated containers (batch size 8 instead of 128), and 3) a result aggregator that streams predictions back via gRPC with HTTP/2 multiplexing. I also implemented a “predict‑on‑write” cache for repeated card numbers, reducing redundant model calls by ~35 %. To keep bandwidth in check, I compressed payloads with Snappy and capped Kafka message size at 64 KB.

**Result:**  
Latency dropped from 350 ms to 90 ms, comfortably under the SLA. Throughput remained steady at 12 k TPS, and overall network usage fell by 20 %. The exercise taught me that aggressive batching can hurt latency, whereas micro‑service decomposition combined with smart caching yields a balanced trade‑off between speed, capacity, and bandwidth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
