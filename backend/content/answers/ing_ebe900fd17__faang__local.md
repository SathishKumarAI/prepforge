---
qid: ing_ebe900fd17__faang__local
question: 'Explain: Interview Structure — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:49:07-05:00'
sources: []
---

**Clarify**

You’re asking how a mobile system‑design interview is structured for ML‑focused roles at FAANG.  
Assumptions:  
1) The candidate knows core ML concepts (training, inference, pipelines).  
2) Interviewers expect you to discuss scalability, data flow, and trade‑offs.

**Approach**

Break the answer into 3 stages:  
- **Problem framing** – define scope (e.g., real‑time recommendation on Android/iOS).  
- **High‑level architecture** – layers: device → edge cache → backend services.  
- **Component deep dive** – data ingestion, feature store, model serving, monitoring.

**Depth**

1. *Data pipeline*: stream from device via gRPC to Kafka; batch jobs in Spark for offline retraining.  
2. *Feature store*: low‑latency Redis + durable PostgreSQL; TTL for freshness.  
3. *Model serving*: TensorFlow Serving behind a load balancer; autoscale with Kubernetes, 99.9% SLA.  
4. *Edge inference*: quantized models (TensorFlow Lite) to reduce latency and battery usage.  
5. *Monitoring*: Prometheus + Grafana for latency/accuracy drift; alerting on model decay.

Complexities:  
- **Latency vs throughput** – edge caching reduces round‑trips but adds consistency challenges.  
- **Cold start** – pre‑warm models on device during idle periods.  

**Edge Cases**

- Network partitions → fallback to cached predictions.  
- Model poisoning attacks → secure OTA updates, cryptographic signatures.  
- Device heterogeneity → multiple model variants per CPU/GPU capability.

**Optimize & Communicate**

Highlight trade‑offs: edge inference saves bandwidth but limits model size; cloud inference is powerful but adds latency. Conclude with a 3‑point improvement plan: (1) implement adaptive batching, (2) use A/B testing for model rollout, (3) integrate continuous retraining pipelines. This demonstrates holistic thinking and operational awareness expected in FAANG mobile ML system design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
