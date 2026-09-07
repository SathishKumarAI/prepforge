---
qid: ing_a4440116a5__faang__local
question: 'Explain: System design interview questions with solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 436
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:07:13-05:00'
sources: []
---

**Clarify**  
We’re asked to *explain how to tackle system‑design interview questions that involve machine‑learning components*.  
Assumptions:  
* The interviewer wants a high‑level architecture, not code.  
* We can choose any ML use‑case (recommendation, anomaly detection, NLP).  
* Scalability, latency, and data freshness are critical.

**Approach**  
1. Pick a concrete ML feature (e.g., real‑time recommendation engine).  
2. Break the problem into *data ingestion → feature store → model serving → monitoring*.  
3. Highlight trade‑offs: batch vs streaming, online vs offline learning, latency vs accuracy.  

**Depth**  
- **Data pipeline**: Kafka → Spark/Beam for batch feature engineering; Flink for low‑latency updates.  
- **Feature store**: RedisCache + PostgreSQL; TTLs keep features fresh while keeping read speed.  
- **Model training**: Use MLflow to version models; schedule nightly retraining on GPU clusters (e.g., AWS SageMaker).  
- **Serving layer**: TensorFlow Serving behind a gRPC API, autoscaled via Kubernetes; add an in‑memory cache for hot users.  
- **Observability**: Prometheus metrics (latency, request count), Grafana dashboards, A/B test pipelines to evaluate drift.

**Edge cases**  
* Cold start*: fallback to popularity or user profile heuristics.  
* Data skew: partition by user ID to avoid hotspots.  
* Model drift: set up alerts when MSE exceeds threshold; trigger retrain.  

**Optimize & communicate**  
Explain that each layer is decoupled, enabling independent scaling and A/B testing. Highlight that using a feature store reduces duplication of feature engineering code, cutting model iteration time by ~30 %. Conclude by emphasizing how this architecture satisfies typical FAANG constraints: low latency (<50 ms), high availability (99.9 %), and continuous delivery of ML insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
