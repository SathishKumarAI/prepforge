---
qid: ing_c2304e1311__faang__local
question: 'Explain: 🏗️ AI System Design — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 739
total_tokens: 973
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:34-05:00'
sources: []
---

## 🏗️ AI System Design Cheat‑Sheet

### 1️⃣ Clarify  
**Problem:** Build a scalable, low‑latency system that ingests raw data → preprocesses → trains models → serves predictions.  
**Assumptions to confirm:**
- Data volume (GBs–PBs per day) and velocity (real‑time vs batch).  
- Prediction latency target (≤ 50 ms for inference, ≤ 10 min for training).  
- SLA for availability (99.9 %).  
- Budget constraints & regulatory compliance (GDPR, HIPAA).

### 2️⃣ Approach  
1. **Data Ingestion** → Kafka/Firestore → schema‑validation layer.  
2. **Feature Store** → Delta Lake / Feast for online/offline serving.  
3. **Training Pipeline** → Kubeflow Pipelines or Airflow; containerized jobs on GKE/AWS SageMaker.  
4. **Model Registry & Versioning** → MLflow, DVC.  
5. **Inference Service** → TensorFlow Serving / TorchServe behind a gRPC load balancer (Envoy).  
6. **Observability** → Prometheus + Grafana for latency/throughput; Sentry for errors.  
7. **Security & Governance** → IAM roles, encryption at rest, audit logs.

### 3️⃣ Depth  
- **Data Layer:** Use a *time‑series* schema in Kafka topics; employ *exactly‑once* semantics to avoid duplicates.  
- **Feature Store:** Partition by entity key; cache hot features in Redis for < 5 ms access.  
- **Training:** Auto‑scaling GPU pods; use mixed precision & model pruning to cut inference time 3×.  
- **Inference:** Model shards behind a *horizontal* LB; implement *canary* rollout with A/B testing.  
- **Observability:** Track “model drift” metrics; trigger retraining when KL‑divergence > 0.1.

**Complexities:**  
- Data consistency across batch & online stores (O(log N)).  
- Model version conflicts → use *semantic versioning* and rollback hooks.  
- Cost: GPU pods vs serverless inference; evaluate spot instances for training.

### 4️⃣ Edge Cases  
| Scenario | Impact | Mitigation |
|----------|--------|------------|
| Sudden spike in traffic | 429 errors | Auto‑scale LB + queue backpressure |
| Feature drift | Wrong predictions | Drift detection + auto‑retrain |
| Model poisoning attack | Security breach | Input validation & adversarial training |
| Regulatory audit | Data residency violation | Geo‑sharded storage, encryption keys per region |

### 5️⃣ Optimize & Communicate  
- **Performance:** Cache feature vectors; batch inference for microservices.  
- **Cost:** Spot GPUs + preemptible VMs; serverless inference for low‑volume endpoints.  
- **Scalability:** Shard data by hash key; use event‑driven architecture to decouple components.  

**Narrative:** “We start with a robust ingestion layer that guarantees exactly‑once semantics, feed into a feature store that balances online latency with offline richness, then orchestrate training pipelines that auto‑scale on demand. For serving, we expose the model via gRPC behind Envoy, ensuring 99.9 % availability and sub‑50 ms latency. Observability hooks catch drift early, while security policies keep data compliant.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
