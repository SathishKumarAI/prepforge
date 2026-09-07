---
qid: ing_7ab2243a4b__faang__local
question: 'Explain: High-Level Architecture (10 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 520
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:36-05:00'
sources: []
---

**High‑Level Architecture – System Design for a ML Platform**  
*(160–240 words)*

---

### 1️⃣ Clarify  
> *Goal:* Build an end‑to‑end platform that ingests data, trains models, serves predictions, and monitors drift.  
> *Assumptions to confirm:*  
> • Scale: millions of requests/day, billions of training examples.  
> • Latency budget for inference (≤ 50 ms).  
> • Multi‑tenant usage (different teams/models).  
> • Regulatory compliance (data residency, auditability).

---

### 2️⃣ Approach  
1. **Data Ingestion → Feature Store** – real‑time & batch pipelines into a versioned feature store.  
2. **Model Training Layer** – distributed training on GPU clusters; schedule via a workflow engine (Airflow/Argo).  
3. **Serving Layer** – containerized model replicas behind an autoscaling HTTP/GRPC gateway, using a low‑latency inference runtime (TensorRT/Triton).  
4. **Observability & Governance** – metrics (prometheus), logging, model registry, drift alerts, and RBAC.

---

### 3️⃣ Depth  
*Data Layer:* Kafka → Spark/Beam → Delta Lake (schema evolution).  
*Training:* Use Horovod on Kubernetes; checkpoint to S3 for fault tolerance. Complexity: **O(N log N)** parallelism.  
*Serving:* Each model gets its own sidecar for A/B testing. Autoscaling policy based on CPU & request rate. Latency ~20 ms with 2 replicas.  
*Governance:* MLflow‑like registry storing model metadata, lineage, and test scores. Drift detection via sliding‑window KS tests.

---

### 4️⃣ Edge Cases  
- **Cold start:** pre‑warm containers for popular models.  
- **Model rollback:** version pinning in the gateway.  
- **Feature drift:** fallback to raw data if feature store unavailable.  
- **Security breach:** enforce encryption at rest/traffic and audit logs.

---

### 5️⃣ Optimize & Communicate  
*Improvements:* cache predictions in Redis for read‑heavy workloads; use model pruning to reduce inference time.  
*Communication:* Present the diagram first, then walk through each layer, justifying trade‑offs (e.g., Kubernetes vs. serverless). End with a quick Q&A on cost and SLA metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
