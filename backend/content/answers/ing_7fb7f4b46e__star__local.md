---
qid: ing_7fb7f4b46e__star__local
question: 'Explain: The Three Steps in Detail — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 419
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:04-05:00'
sources: []
---

**Situation** – In early 2025 I was tasked with delivering a real‑time fraud detection service for a fintech client that processed ~2 million transactions per day. Their legacy rule engine lagged behind the growing volume and missed 18% of fraudulent activities.

**Task** – Build an AI‑powered architecture that could ingest streaming data, train a predictive model, and serve predictions with <100 ms latency while ensuring compliance and auditability.

**Action** – I applied three key architecture patterns:  
1. **Data Pipeline Pattern** – Built an Apache Kafka ingestion layer feeding into a Spark Structured Streaming job for feature engineering; used Delta Lake to stage raw data.  
2. **Model Training Pattern** – Employed a containerized TensorFlow training pipeline on GCP Vertex AI, auto‑scaling GPUs and using Optuna for hyper‑parameter tuning.  
3. **Inference & Serving Pattern** – Deployed the trained model in a Kubernetes cluster with TensorFlow Serving behind an Envoy API gateway; added Prometheus monitoring and a custom audit logger to capture input, output, and confidence scores.

**Result** – The new system reduced fraud loss by 35% (from $1.8 M to $1.17 M annually) and achieved 92% precision at 95% recall with <80 ms inference latency. I learned the importance of separating data, training, and serving concerns early so each layer can scale independently and remain auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
