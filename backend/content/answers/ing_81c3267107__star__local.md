---
qid: ing_81c3267107__star__local
question: 'Explain: Summary — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 353
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:45-05:00'
sources: []
---

**Situation:**  
I was leading the design of a real‑time recommendation engine for a streaming platform that had to deliver personalized video suggestions within 50 ms while handling 10 k requests per second.

**Task:**  
Balance latency, throughput, and bandwidth so the service stayed responsive under peak load without exceeding network limits or overprovisioning compute.

**Action:**  
I started by profiling the pipeline: data ingestion (Kafka), feature lookup (Redis cache), model inference (TensorFlow Serving) and response assembly. I measured each component’s latency and bandwidth usage.  
- For latency, I added a lightweight in‑memory queue to batch requests into 32‑item groups, reducing per‑request overhead from 35 ms to 22 ms.  
- To improve throughput, I horizontally scaled the inference servers using Kubernetes autoscaling based on CPU >70% and request rate >8 k/s, achieving 12 k req/s peak.  
- Bandwidth was controlled by compressing feature vectors with Snappy before sending them over gRPC; this cut payload size from 1.2 MB to 300 KB per batch, keeping network usage under the 1 Gbps link budget.

**Result:**  
We achieved an average end‑to‑end latency of 18 ms, sustained throughput of 12 k req/s, and kept bandwidth below 800 Mbps. The experiment taught me that tuning each metric requires profiling, batching, and dynamic scaling—there’s no single knob for all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
