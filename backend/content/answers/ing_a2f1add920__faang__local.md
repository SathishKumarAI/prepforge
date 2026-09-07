---
qid: ing_a2f1add920__faang__local
question: 'Explain: ML Production Systems — Machine Learning in Production | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 614
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:27-05:00'
sources: []
---

**Clarify**

> *“Explain: ML Production Systems – Machine Learning in Production”*  
>  We need to describe how an end‑to‑end ML pipeline is moved from research into a live, scalable system, covering data ingestion, model training, serving, monitoring, and governance.  
> **Assumptions to confirm:**  
> * Target latency (real‑time vs batch).  
> * Scale of data (GBs/TS).  
> * Deployment platform (cloud, on‑prem).  
> * Regulatory constraints (GDPR, bias).

---

**Approach**

1. **Data Layer** – ingestion → storage → feature store.  
2. **Training Layer** – reproducible pipelines, versioned datasets, hyper‑parameter tuning.  
3. **Model Registry & Packaging** – containerization, artifact storage, CI/CD for models.  
4. **Serving Layer** – low‑latency inference (REST/GRPC or streaming), autoscaling.  
5. **Monitoring & Governance** – drift detection, explainability dashboards, audit trails.  
6. **Feedback Loop** – active learning / retraining scheduler.

---

**Depth**

*Data Ingestion:* Use Kafka/SNS for real‑time streams; Parquet on S3/HDFS for batch.  
*Feature Store:* Cache engineered features (e.g., Feast) to avoid recomputation.  
*Training Pipelines:* Airflow/Prefect orchestrate nightly jobs; MLflow tracks experiments, saves models in a registry.  
*Packaging:* Docker + Kubernetes; use GPU nodes if needed.  
*Serving:* TensorFlow Serving or TorchServe behind an API gateway; use canary releases via Istio.  
*Monitoring:* Prometheus/Grafana for latency & error rates; Evidently/Alibi Detect for concept drift.  
*Governance:* Model cards, bias metrics, audit logs stored in a secure vault.

**Complexity:** Training O(n log n) for data shuffling; inference ~O(1) per request but depends on model size. Autoscaling keeps cost linear with traffic.

---

**Edge Cases**

*Data gaps or schema changes → feature store versioning solves.*  
*Model overload during traffic spikes → pre‑warm containers and load balancers.*  
*Privacy breaches → differential privacy in training data; encryption at rest.*

---

**Optimize & Communicate**

- **Performance:** Quantize models, use ONNX runtime.  
- **Cost:** Spot instances for batch jobs; serverless inference for low‑volume ops.  
- **Reliability:** Blue/green deployments; circuit breakers.  

When presenting: start with the business goal → map to pipeline components → highlight trade‑offs (latency vs accuracy) and compliance safeguards. Conclude by stressing continuous improvement via automated retraining triggers. This narrative demonstrates structured thinking, depth of knowledge, and clear communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
