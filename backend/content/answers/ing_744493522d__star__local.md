---
qid: ing_744493522d__star__local
question: 'Explain: Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 361
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:58-05:00'
sources: []
---

**Situation:**  
When my team launched a real‑time fraud detection service for a fintech client, the initial prototype handled only ~1,000 transactions per second before latency spiked to 2 s and GPU memory filled up.

**Task:**  
I had to redesign the pipeline so it could scale to 50,000 TPS with <200 ms inference latency while keeping cost under the budget.

**Action:**  
First, I moved from a single‑node TensorFlow Serving deployment to a Kubernetes‑based microservice cluster. Using Prometheus alerts, we set up horizontal pod autoscaling that spun up new inference pods when CPU hit 70 % or queue length exceeded 5,000 requests. To reduce model size, I applied TensorRT optimizations and quantized the network from FP32 to INT8, cutting GPU memory usage by 40 %. For data ingestion, we replaced the monolithic batch loader with a Kafka stream that batched events into 10‑ms windows, feeding them directly into the inference pods via gRPC. Finally, I added an A/B routing layer that routed 80 % of traffic to the new cluster and 20 % to the legacy system for sanity checks.

**Result:**  
The system now processes 45,000 TPS with average latency 120 ms; GPU cost dropped by 35 %, and we reduced infrastructure spend from $12k/month to $7.5k/month. I learned that balancing model compression, container orchestration, and real‑time streaming is key to scalable ML at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
