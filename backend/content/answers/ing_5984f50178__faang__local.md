---
qid: ing_5984f50178__faang__local
question: 'Explain: Sample System design using microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 487
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:01-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking for a *sample* ML system built with micro‑services.  
Assumptions to confirm:  
- The workload is batch + online inference (e.g., recommendation).  
- Data volume > 10 M rows, latency < 200 ms for predictions.  
- Team owns the stack (Python, Kafka, gRPC).

**2️⃣ Approach**  
1. **Data ingestion → Feature store**  
2. **Model training service**  
3. **Model registry & versioning**  
4. **Inference API** (scalable).  
5. **Monitoring & logging**.

**3️⃣ Depth**  

| Service | Tech | Key responsibilities | Complexity |
|---------|------|-----------------------|------------|
| *FeatureStore* | Redis + Parquet on S3 | Store raw & engineered features; cache hot keys | O(1) read, O(N) write |
| *TrainingService* | Airflow DAG → PyTorch/TensorFlow | Data pipeline, hyper‑param search (Optuna), training job | \(O(D \cdot E)\) where D=epochs, E=params |
| *ModelRegistry* | MLflow + Postgres | Store artifacts, metadata, tags | CRUD ops |
| *InferenceAPI* | FastAPI + gRPC | Load model from registry; serve predictions | Latency ≈ 10 ms (CPU) |
| *Monitoring* | Prometheus + Grafana | Track prediction latency, error rates, drift metrics | Continuous |

**4️⃣ Edge Cases**  
- Feature missing → fallback to default.  
- Model drift → retrain trigger after MAPE > 5%.  
- Service outage → circuit breaker in API.

**5️⃣ Optimize & Communicate**  
- **Scale inference** with Kubernetes HPA + GPU pods for heavy models.  
- **Cache predictions** per user ID to reduce compute.  
- **Explainability**: expose SHAP values via a separate service.  

Narrate the design by walking through data flow, latency budgets, and how each micro‑service isolates concerns while enabling CI/CD of ML artifacts. This showcases structured reasoning, technical depth, and real‑world trade‑offs—key for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
