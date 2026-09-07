---
qid: ing_79bb85879a__faang__local
question: 'Explain: How to prepare — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 503
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:26:38-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question*: “How do you prepare an AI system named *Harvey*?”  
Assumptions:  
- *Harvey* is a production‑grade ML pipeline (data ingestion → feature store → training → inference).  
- We need end‑to‑end readiness: data quality, model reliability, deployment & monitoring.  

**2️⃣ Approach**  
1. **Data hygiene** – schema validation, deduplication, anomaly detection.  
2. **Feature engineering** – scalable feature store with versioning.  
3. **Model training** – reproducible experiments (MLflow), hyper‑parameter search, cross‑validation.  
4. **Testing & validation** – unit tests on pipelines, A/B testing, fairness audits.  
5. **Deployment** – containerized microservice + canary rollout.  
6. **Observability** – metrics (latency, accuracy drift), alerts, dashboards.

**3️⃣ Depth**  
- Use *Kafka* for real‑time ingestion; store raw & curated data in *Delta Lake*.  
- Feature store: *Feast* with caching and TTL.  
- Training on GPU clusters; track experiments via *Weights & Biases*.  
- Validate with ROC/AUC, calibration curves, SHAP explanations.  
- Deploy with *Kubernetes* + Istio for traffic routing; use *Argo Rollouts* for canaries.  
- Monitoring: Prometheus + Grafana; set alerts on accuracy drop >5% or latency >200 ms.  
Complexity: Data pipeline O(n), training O(k·m) (k epochs, m features).  

**4️⃣ Edge Cases**  
- Missing values → imputation strategies.  
- Concept drift → scheduled re‑training triggers.  
- Model bias across demographics → stratified sampling and counterfactual checks.  

**5️⃣ Optimize & Communicate**  
- Auto‑scale training jobs; use spot instances to cut costs.  
- Cache inference results for cold starts.  
- Document every step in a central knowledge base; run bi‑weekly “Harvey health” demos for stakeholders.  

*Result*: A robust, auditable AI system that’s ready for production with clear SLAs and rollback paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
