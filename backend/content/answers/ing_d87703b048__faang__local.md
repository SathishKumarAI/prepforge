---
qid: ing_d87703b048__faang__local
question: 'Explain: Operational Excellence (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 499
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:52-05:00'
sources: []
---

**Operational Excellence – 5‑Minute ML System Design**

---

### Clarify  
*Goal:* Build a production ML system that delivers high‑quality predictions with minimal latency and maximal reliability.  
Assumptions to confirm:  
1. What is the prediction target (classification, regression)?  
2. Expected traffic (requests/sec) and SLA on latency.  
3. Data velocity (batch vs streaming).  
4. Deployment constraints (cloud provider, cost budget).

### Approach  
1. **Data pipeline** – ingest → clean → feature store.  
2. **Model training** – automated MLOps: data versioning, hyper‑search, CI/CD for models.  
3. **Serving layer** – low‑latency inference API with model caching and autoscaling.  
4. **Observability** – metrics (throughput, latency, accuracy drift), alerting, A/B testing.  
5. **Governance & security** – access control, encryption, audit logs.

### Depth  
- Use a **feature store** (e.g., Feast) to decouple training/serving features and avoid “training‑inference mismatch”.  
- Deploy models in containers orchestrated by Kubernetes; use *Knative* or *Istio* for autoscaling based on request queue depth.  
- Cache predictions for frequent keys using Redis; fall back to batch inference if cache miss.  
- Continuous evaluation with a **drift detection** module that triggers retraining pipelines automatically.  
- CI/CD pipeline: GitHub Actions → MLflow for experiment tracking → ArgoCD for deployment.

### Edge Cases  
- Sudden traffic spikes → auto‑scale to extra pods; circuit breaker on model service to fallback to a backup model.  
- Feature drift → alert + staged rollout of updated model.  
- Model failure → rollback to previous stable version via canary releases.

### Optimize & Communicate  
- **Performance:** Profile inference code (NumPy vs JAX), quantize models if latency budget tight.  
- **Cost:** Spot instances for training, pay‑per‑request serving.  
- Narrate trade‑offs: e.g., caching reduces load but adds stale data risk; autoscaling mitigates spikes but increases operational overhead.

*Result:* A robust, self‑healing ML system that meets SLAs while continuously improving accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
