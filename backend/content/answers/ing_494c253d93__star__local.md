---
qid: ing_494c253d93__star__local
question: 'Explain: How streaming actually works: — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 359
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:11-05:00'
sources: []
---

**Situation:**  
At my last company we had a live payment platform that processed ~2 million transactions per day. The fraud‑score model, originally batch‑trained nightly, lagged behind by hours and missed emerging patterns, causing a 12% increase in false negatives.

**Task:**  
I was tasked with building an end‑to‑end streaming pipeline so the ML model could ingest events in real time, update its state, and serve predictions within milliseconds while keeping latency < 200 ms and throughput > 10k TPS.

**Action:**  
I chose Kafka as the ingestion layer, partitioning by merchant ID to guarantee order. For feature enrichment I used Kinesis Data Analytics (or Flink) to join streams with a slowly changing reference table stored in DynamoDB; this allowed us to compute rolling statistics without batch jobs. The core model was wrapped in TensorFlow Serving behind Envoy for zero‑downtime A/B testing. I added an online learning component that fed back misclassified alerts into a replay topic, retraining the model every 30 min using Spark Structured Streaming. Metrics were pushed to Prometheus; Grafana dashboards surfaced latency and error rates, triggering auto‑scaling on Kubernetes.

**Result:**  
Latency dropped from ~1 s to < 200 ms, false negatives fell by 35%, and we handled a peak of 15k TPS during flash sales without outages. I learned that the key to streaming ML is treating feature tables as streams too, and that continuous evaluation + incremental retraining can keep models relevant in dynamic environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
