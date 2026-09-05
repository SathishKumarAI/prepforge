---
qid: ing_7f47cbb92e__star__local
question: 'Explain: What you''re actually expected to know — Backend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 294
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:07-05:00'
sources: []
---

**Situation:** While working at a fintech startup, we launched a real‑time fraud detection service that had to analyze millions of transaction events per day and make decisions within 50 ms.

**Task:** I was tasked with designing the backend pipeline so it could ingest streaming data, run an ML inference model, and return alerts without exceeding latency or cost targets.

**Action:** First, I set up a Kafka cluster for event ingestion and used Apache Flink to window the streams. For inference, I containerized a TensorFlow Lite model and deployed it on a Kubernetes cluster with autoscaling based on CPU usage. To keep costs low, I integrated an async queue that batches 1 000 requests before sending them to a GPU‑enabled node only when traffic spikes. I also added Prometheus metrics for latency, throughput, and error rates, and set up Grafana dashboards to trigger alerts if the 95th percentile latency exceeded 45 ms.

**Result:** The system processed over 2 million transactions daily with an average inference latency of 38 ms, keeping our SLA below 50 ms. Costs were reduced by 30% compared to a monolithic GPU server approach. I learned how to balance model accuracy, latency, and cloud spend while ensuring observability and scalability in a production AI‑driven backend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
