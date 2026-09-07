---
qid: ing_dc1176e5d9__faang__local
question: 'Explain: So you don''t want it to be — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 516
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:07-05:00'
sources: []
---

**Clarify**  
You’re asking me to explain how *“you don’t want it to be”*—i.e., why we avoid making ML systems that are brittle, opaque, or hard to maintain in a production setting like Google’s. I’ll assume the goal is to build reliable, scalable ML pipelines and that we’re targeting a large‑scale distributed environment.

**Approach**  
1. Identify key pitfalls (over‑fitting, data drift, hidden assumptions).  
2. Map each pitfall to concrete engineering practices: versioning, monitoring, modularity.  
3. Show how these practices integrate with Google’s tooling (Borg, Kubernetes, BigTable).

**Depth**  
- **Data quality & lineage** – Every feature must have a traceable source; otherwise model drift becomes invisible. Use Cloud Dataflow pipelines that tag each row with a version hash and store metadata in BigQuery.  
- **Model interpretability** – Even if the algorithm is black‑box (e.g., deep nets), expose SHAP or LIME explanations through TensorBoard dashboards so devs can see why predictions change.  
- **Continuous evaluation** – Deploy A/B tests that compare live vs. baseline scores; trigger retraining only when performance drops below a threshold.  
- **Infrastructure isolation** – Containerize models with gRPC endpoints on Kubernetes, use Istio for traffic splitting, and enforce quotas so one bad model can’t exhaust GPU resources.  
- **Security & privacy** – Mask sensitive fields before training, audit logs of inference requests, and apply differential privacy if needed.

**Edge cases**  
- Sudden spike in input distribution (e.g., new user segment) → fallback to a conservative rule‑based fallback.  
- Model service crash → Kubernetes auto‑restarts; the previous version remains served until health checks pass.  
- Data schema evolution → backward‑compatible feature extraction code or feature store that serves both old and new schemas.

**Optimize & Communicate**  
Explain trade‑offs: adding monitoring increases latency but saves downtime; interpretability adds compute cost yet boosts trust. Emphasize that at Google we “build for failure” – design systems to degrade gracefully, log everything, and iterate quickly. Conclude by highlighting the end‑to‑end workflow: data ingestion → feature store → training pipeline → model registry → serving cluster → monitoring + alerting. This structure keeps ML production robust, auditable, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
