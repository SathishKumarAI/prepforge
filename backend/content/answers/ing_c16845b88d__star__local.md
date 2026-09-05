---
qid: ing_c16845b88d__star__local
question: 'Explain: Queue vs Pub/Sub — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 324
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:36-05:00'
sources: []
---

**Situation:**  
In a recent fraud‑detection project, our team had to process millions of transaction events per day and trigger real‑time alerts for high‑risk activities. The existing pipeline used a simple message queue (RabbitMQ) but we were hitting latency spikes during peak hours.

**Task:**  
I needed to redesign the event ingestion layer so that alert generation stayed under 200 ms while scaling horizontally to handle 5× the traffic without bottlenecks or data loss.

**Action:**  
I evaluated a Pub/Sub architecture with Google Cloud Pub/Sub. I set up multiple topics: “transactions” for raw events, “alerts” for enriched signals. Subscribers were micro‑services in Kubernetes that performed feature extraction and scored models using TensorFlow Serving. By configuring flow control (max outstanding messages) and using back‑pressure, we prevented overloading the inference workers. We also implemented dead‑letter queues for malformed data and used topic partitioning to maintain ordering where needed.

**Result:**  
The new system cut average alert latency from 350 ms to 140 ms, handled a 6× traffic surge with zero failures, and reduced operational overhead by 30% (no manual queue scaling). I learned that queues excel at point‑to‑point, low‑volume tasks, whereas Pub/Sub shines for fan‑out, high‑throughput, decoupled pipelines—critical for ML workloads where multiple services consume the same event stream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
