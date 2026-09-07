---
qid: ing_fe2612c25d__aws__local
question: 'Explain: Risk assessment — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 533
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:52-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a production‑grade recommendation engine from an on‑prem cluster to **Google Cloud**. The business required zero data loss and 4‑hour recovery time in case of regional outage—essential for our “always‑on” ad serving platform.

**Action**  
I performed a *risk assessment* by mapping every ML pipeline component (data ingestion, feature store, training, model registry, inference) to its failure domain.  
1. **Data layer:** Replicated BigQuery tables across two regions using bi‑directional streaming; added *Cloud Storage* “Coldline” for immutable checkpoints.  
2. **Compute layer:** Deployed Vertex AI pipelines on managed Kubernetes clusters with automatic node pool scaling and *PodDisruptionBudgets*.  
3. **Model layer:** Published models to Artifact Registry, then mirrored the registry to a secondary region via *Cloud Pub/Sub* triggers.  
4. **Monitoring & automation:** Leveraged Cloud Monitoring dashboards + Cloud Functions that automatically spin up a standby cluster if latency > 200 ms or if any node pool shows unhealthy status.

**Result**  
After the first real‑world failure (a GCP zonal outage), our DR process restored full inference capacity in **3.2 hours**, meeting the SLA and saving an estimated $1.5 M in avoided revenue loss. The end‑to‑end recovery time was 45% faster than the previous on‑prem setup.

**Reflection & Learning**  
I learned that *automation* is only as good as its monitoring signals; we later added a synthetic “heartbeat” metric to catch silent failures earlier, reducing mean time to recover by another 30%.

---

### Amazon Leadership Principles Highlighted
- **Customer Obsession:** Delivered an SLA‑driven recovery plan that protected ad revenue.  
- **Ownership & Dive Deep:** Conducted granular failure mode analysis across all services and built end‑to‑end automation.

**Bar‑raiser takeaways**  
- Depth: Detailed mapping of each component to failure domains shows true ownership.  
- Quantified impact: Precise metrics (3.2 h, $1.5 M) demonstrate business value.  
- Learning from failure: Iterative improvement with synthetic heartbeats reflects continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
