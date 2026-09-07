---
qid: ing_cfbd8b466d__faang__local
question: 'Explain: Create High-Level Design — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 495
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:43:32-05:00'
sources: []
---

## Clarify  
You’re asked to sketch a high‑level design for a machine‑learning system (e.g., recommendation engine). Confirm:  
* **Scale** – how many users, requests/sec?  
* **Latency goal** – real‑time or batch?  
* **Model life‑cycle** – training frequency, versioning.  
* **Data sources** – streaming logs, static catalogs.  

## Approach  
1. **Define functional blocks**: data ingestion → feature store → model inference → post‑processing → metrics.  
2. **Select technology stacks** per block (Kafka + Spark for ingest; Redis/Memcached for feature cache; TensorFlow Serving or TorchServe).  
3. **Sketch data flow & APIs** between services, including retry/back‑off patterns.  
4. **Add observability**: logs, metrics, alerting on latency or error rates.

## Depth  
* **Feature Store**: partitioned by user ID, cache warm‑up via batch jobs; uses delta‑updates to stay fresh.  
* **Inference Service**: stateless microservice behind a load balancer; horizontal scaling with autoscaling rules tied to request rate.  
* **Model Management**: CI/CD pipeline that pushes new checkpoints to a model registry (MLflow) and triggers blue/green rollout.  
* **Latency & Throughput**: target < 50 ms per request; use async queues for batch predictions.  

Complexity: O(log n) cache lookups, O(1) inference latency; training is O(m log m) where *m* is data size.

## Edge Cases  
* **Cold starts** – fallback to a lightweight model until feature cache warms.  
* **Data drift** – monitor prediction‑to‑ground‑truth gaps; retrain triggers.  
* **Failover** – replica inference nodes, circuit breaker patterns.

## Optimize & Communicate  
Explain trade‑offs: e.g., Redis vs. Cassandra for latency vs. durability; batch vs. stream training for freshness. End with a diagram sketch and key metrics you’d track. This shows end‑to‑end understanding, scalability awareness, and the ability to justify design choices—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
