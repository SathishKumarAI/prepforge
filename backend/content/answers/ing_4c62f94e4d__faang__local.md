---
qid: ing_4c62f94e4d__faang__local
question: 'Explain: 👋 Stay Connected — Ai System Design Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 554
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:41:55-05:00'
sources: []
---

## 1️⃣ Clarify  
The interviewer asks for a high‑level **AI system design** that keeps users “stay connected” (e.g., real‑time messaging, notifications, or social feed).  
*Assumptions to confirm:*  
- Scale: millions of active users, >10k concurrent messages per second.  
- Latency requirement < 200 ms for user‑visible actions.  
- Data privacy and compliance (GDPR/CCPA).  
- Mixed workloads: streaming, batch analytics, recommendation.

## 2️⃣ Approach  
1. **Data ingestion** – Kafka/Flink stream for real‑time events.  
2. **Feature store** – Redis for hot features, PostgreSQL for durable state.  
3. **Model serving** – TensorFlow Serving + model versioning with A/B test routing.  
4. **Message delivery** – Pub/Sub (AWS SNS/SQS) + WebSocket gateway.  
5. **Observability** – Prometheus/Grafana + distributed tracing.

## 3️⃣ Depth  
- **Latency budget:** 50 ms for feature lookup, 100 ms for inference, 30 ms for network hop.  
- **Throughput:** Kafka cluster with 10 k partitions; each consumer group processes ~5 k msgs/s.  
- **Model latency:** DistilBERT fine‑tuned on user context, < 20 ms per inference on CPU + GPU pool.  
- **Consistency:** Eventual consistency for feed ordering; use vector clocks to resolve conflicts.  
- **Scalability:** Auto‑scaling of consumer pods based on queue depth.

## 4️⃣ Edge Cases  
- **Burst traffic** (e.g., viral post): spike detection, throttling & back‑pressure.  
- **Cold start** for new users: fallback rule‑based recommendations.  
- **Data drift**: continuous monitoring of model accuracy; retraining pipeline.  
- **Privacy violations**: enforce user opt‑outs at ingestion layer.

## 5️⃣ Optimize & Communicate  
- *Batch inference* during low traffic to reduce GPU costs.  
- *Feature caching* with LRU eviction for high‑cardinality users.  
- Present trade‑offs clearly: “We sacrifice strict ordering for < 200 ms latency; we can add a second phase to reconcile later.”  

This structured plan demonstrates clear problem framing, a robust architecture, and thoughtful handling of edge conditions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
