---
qid: ing_7ff52a1592__faang__local
question: 'Explain: Importance of disaster recovery — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 532
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:42:41-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why disaster recovery matters for ML workloads on Google Cloud, and what *disaster recovery* actually means in that context. I’ll assume the audience knows basic cloud concepts but may not know specific GCP services.

**Approach**  
1. Define disaster recovery (DR).  
2. Link it to ML pipelines: data, training models, serving predictions.  
3. Highlight key GCP tools (Backups, Cloud Storage, BigQuery, Vertex AI, Multi‑region replication).  
4. Outline typical DR objectives (RPO/RTO) and how they apply to ML.  
5. Summarize best practices.

**Depth**  
Disaster recovery is a set of processes that restore service after an outage—whether accidental or intentional—within agreed *Recovery Point Objective* (how much data loss is tolerable) and *Recovery Time Objective* (how fast services must resume). For ML, this covers:

| Component | DR strategy on GCP |
|-----------|--------------------|
| **Training data** | Cloud Storage near‑line/Coldline + cross‑region replication; BigQuery snapshots. |
| **Model artifacts** | Vertex AI model registry with multi‑regional storage; automated export to Cloud Storage. |
| **Training jobs** | Use managed services (Vertex AI Pipelines) that auto‑restart on failure; store job metadata in Firestore. |
| **Serving endpoints** | Deploy across multiple regions; use Cloud Load Balancing + Cloud CDN; keep endpoint configs in IaC (Terraform). |

Typical RPO for production ML is 1–2 hours, RTO 15–30 minutes, achieved by continuous backups and automated fail‑over scripts.  

**Edge cases**  
- *Data corruption* mid‑train: use BigQuery’s built‑in point‑in‑time recovery.  
- *Model drift* after a DR event: re‑run validation pipelines automatically.  
- *Regional outages*: rely on multi‑region buckets; test fail‑over by simulating region unavailability.

**Optimize & communicate**  
Explain that DR isn’t one‑size‑fits‑all; it’s a trade‑off between cost (extra replicas, storage) and business impact. Present a simple diagram of data flow + fail‑over path, and mention GCP’s “DR as code” via IaC templates. This shows structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
