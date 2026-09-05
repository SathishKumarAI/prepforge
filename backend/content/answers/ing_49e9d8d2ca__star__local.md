---
qid: ing_49e9d8d2ca__star__local
question: 'Explain: System design case studies — Ai Engineer Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 318
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:09-05:00'
sources: []
---

**Situation:**  
When I joined my previous company, the product team wanted a recommendation engine for their e‑commerce platform that could scale to 5 million daily active users while keeping latency under 100 ms.

**Task:**  
I was tasked with designing a distributed AI system that would ingest real‑time clickstream data, train embeddings on the fly, and serve personalized recommendations in production.

**Action:**  
First, I mapped the data pipeline: Kafka for ingestion, Spark Structured Streaming to batch‑normalize features, and a parameter server built on Ray for model updates. For the recommendation model, I chose a hybrid matrix‑factorization + transformer architecture, training nightly with distributed TensorFlow on GPU nodes. To meet latency, I deployed an inference microservice in Rust, using ONNX Runtime, behind a Redis cache that stored top‑10 item lists per user. I also set up Prometheus/Grafana dashboards to monitor throughput and error rates, and implemented A/B testing via feature flags.

**Result:**  
Within three months the system handled 6 million requests per day with an average latency of 85 ms. Click‑through rate improved by 18% and cart abandonment dropped 12%. I learned that balancing model complexity with serving constraints requires close collaboration between data, infrastructure, and product teams, and that observable metrics are critical for maintaining performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
