---
qid: ing_1f53473558__faang__local
question: 'Explain: Requirements — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 578
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:38-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “Explain a *Requirements – System Design* cheat‑sheet for a Machine Learning platform.”  
Assumptions:  
- Target audience is senior ML engineers building production pipelines (data ingestion → training → inference).  
- Focus on non‑algorithmic constraints (latency, scalability, observability).  
- Need to cover both batch & real‑time flows.  

**2️⃣ Approach**  
1. List core requirement categories (Data, Model, Runtime, Ops, Security).  
2. For each, enumerate key sub‑requirements (e.g., *Data* → quality, lineage, velocity).  
3. Map each requirement to a design pattern or architectural component.  
4. Present the cheat‑sheet as a concise table/diagram.  

**3️⃣ Depth** – The Cheat Sheet  
| Category | Key Requirements | Typical Architecture |
|----------|------------------|----------------------|
| **Data** | • Freshness (≤ 5 min)<br>• Provenance<br>• Schema evolution | *Kafka + Delta Lake*; *Airflow DAGs* for batch. |
| **Model** | • Versioning<br>• A/B testability<br>• Explainability | *MLflow* registry, *SageMaker Pipelines*. |
| **Runtime** | • Low‑latency inference (≤ 100 ms)<br>• Auto‑scaling<br>• Multi‑region availability | *TensorRT + Kubernetes*, *Istio* for traffic routing. |
| **Ops** | • Monitoring (latency, drift)<br>• Alerting & rollback<br>• Continuous integration | *Prometheus/Grafana*, *Argo CD*. |
| **Security** | • Data encryption at rest/flow<br>• RBAC for model access<br>• Audit logs | *Vault* + *OPA* policies. |

**4️⃣ Edge Cases**  
- Sudden spike in inference traffic → ensure autoscaler hysteresis to avoid thrashing.  
- Model drift after a deployment → rollback logic must be idempotent.  
- Schema mismatch during batch ingestion → fallback to “shadow” pipeline.  

**5️⃣ Optimize & Communicate**  
*Improvements:* Introduce a “Health‑Check” microservice that aggregates all metrics, enabling one‑click dashboards for ops.  
*Narrative:* I’d start by confirming the scope (batch vs real‑time), then walk through each requirement, linking it to a proven pattern. This shows clear thinking, depth in trade‑offs, and readiness to iterate—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
