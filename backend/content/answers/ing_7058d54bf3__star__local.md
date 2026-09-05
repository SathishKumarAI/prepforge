---
qid: ing_7058d54bf3__star__local
question: 'Explain: System design interview — OpenAI Forward Deployed Engineer (FDE)
  Interview Guide | Sample Questions (2026) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 323
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:40-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we had to redesign our fraud‑detection pipeline that was processing 5 M transactions per day. The existing batch model lagged by 30 minutes, causing real‑time alerts to be stale and customer satisfaction to drop.

**Task:**  
I was tasked with architecting an end‑to‑end system that could ingest streams in real time, run a deep learning classifier (≈20 M parameters) with sub‑second latency, and scale horizontally while keeping costs under $50k/month.

**Action:**  
I chose a microservices stack: Kafka for ingestion, a TensorFlow Serving cluster behind an NGINX load balancer, and autoscaling on GKE. I implemented model sharding (model partitioning by transaction type) to reduce inference time, and used ONNX Runtime with GPU acceleration to hit 120 ms latency. For fault tolerance, I added Kafka’s exactly‑once semantics and a Redis cache for recent predictions. I also set up Prometheus/Grafana dashboards to monitor CPU, memory, and prediction accuracy in real time.

**Result:**  
The new pipeline lowered average inference latency from 30 s to 115 ms, increased detection accuracy by 4%, and cut infrastructure costs to $42k/month. I learned that balancing model complexity with operational constraints is key in production AI systems, and that a clear observability strategy turns a good design into a reliable one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
