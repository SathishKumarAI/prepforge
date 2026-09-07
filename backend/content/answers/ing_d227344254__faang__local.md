---
qid: ing_d227344254__faang__local
question: 'Explain: Hi. Welcome to another system design video'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 727
total_tokens: 960
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:49:10-05:00'
sources: []
---

**Clarify**  
You’re asking for a *system‑design* explanation of how we would build a machine‑learning platform—think training, serving, monitoring, and data pipelines. I’ll assume:  

- **Users** are data scientists & ML engineers who need to train models on large datasets.  
- The system must support **batch + online inference**, **model versioning**, and **continuous evaluation**.  
- Scale: millions of requests per day, hundreds of GBs of training data.

---

### 1️⃣ Approach

| Layer | Responsibility |
|-------|----------------|
| **Data ingestion & preprocessing** | Connect to S3/BigQuery → clean, feature‑store (e.g., Feast) |
| **Training service** | Kubernetes jobs + GPU nodes; orchestrate with Airflow / Kubeflow Pipelines |
| **Model registry** | Store artifacts in a versioned repo (MLflow Registry) |
| **Serving layer** | Containerized models on gRPC/REST via TensorFlow Serving or TorchServe, autoscaled by K8s |
| **Monitoring & feedback loop** | Prometheus + Grafana for latency, accuracy drift detection; retraining trigger |

---

### 2️⃣ Depth (core components)

- **Data Pipeline**:  
  *Extract → Transform → Load* (ETL) with Spark/Databricks. Store processed data in Parquet on a distributed file system for fast read during training.

- **Training Orchestrator**:  
  - Use Kubeflow Pipelines to define DAGs; each step is a container image.  
  - Auto‑scale GPU pods based on queue length.  
  - Persist checkpoints to object storage; resume from failure.

- **Model Registry & Versioning**:  
  - MLflow tracks run metadata, hyperparameters, and artifact locations.  
  - Tag models with “staging” or “production”; promote via API after validation.

- **Serving**:  
  - Deploy each model as a stateless pod behind an Ingress controller.  
  - Use Envoy for request routing and load balancing.  
  - Batch inference on GPU pods for high throughput; single‑request latency <10 ms.

- **Monitoring**:  
  - Metrics: latency, error rate, CPU/GPU utilization.  
  - Drift detection: compare incoming feature distribution to training set; trigger retrain if KL‑divergence > threshold.

---

### 3️⃣ Edge Cases & Testing

| Scenario | Mitigation |
|----------|------------|
| **Cold start** | Keep a warm pool of lightweight inference pods. |
| **Model poisoning** | Validate data quality before training; sandbox training environment. |
| **Data skew** | Stratified sampling in preprocessing; monitor class imbalance during training. |
| **High‑frequency retraining** | Rate‑limit retrain triggers; use incremental learning where possible. |

---

### 4️⃣ Optimize & Communicate

- **Cost**: Spot instances for training, autoscaling for serving, and caching frequently used embeddings to reduce GPU usage.  
- **Latency**: Edge deployment or model quantization (INT8) for mobile inference.  
- **Reliability**: Multi‑region replicas; use Kubernetes’ self‑healing features.

I’d present this as a diagram in the interview, walk through each layer, and highlight trade‑offs between speed, cost, and complexity—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
