---
qid: ing_b6a893c3e8__fp__local
question: 'Explain: Stronger business continuity — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 457
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:32:19-05:00'
sources: []
---

**Why disaster recovery matters for machine‑learning workloads**

Every ML pipeline consumes data, transforms it, trains a model and serves predictions.  
From an *information‑theoretic* view, the system’s **entropy budget** is split between three parts:

1. **Data integrity** – raw inputs must remain uncorrupted.
2. **Model fidelity** – trained parameters must be reproducible.
3. **Operational state** – orchestration (jobs, checkpoints) must resume.

If any part collapses, the entropy of the system jumps; the pipeline stalls and revenue drops.  
Thus a *disaster recovery* (DR) plan is not an optional luxury but a necessary constraint that guarantees the system’s entropy stays below a threshold.

---

### What DR does

| Goal | Mechanism on Google Cloud |
|------|---------------------------|
| **Data resiliency** | Multi‑region Cloud Storage buckets + Object Versioning. |
| **Model rollback** | Artifact Registry with immutable tags; checkpoints stored in Cloud Filestore or GCS. |
| **Job failover** | Vertex AI Pipelines with `retry` policies and cross‑zone cluster replication. |
| **State persistence** | Spanner/Firebase for metadata; Pub/Sub snapshots for event streams. |

These layers are *redundant* by design: a failure in one region can be bypassed by another, keeping the pipeline’s entropy low.

---

### Non‑obvious insight

Most teams treat DR as “copy everything to a backup.”  
In ML, **checkpoint granularity** is key: storing only every *n*-th training step (e.g., after a hyper‑parameter sweep) balances recovery time against storage cost.  The optimal *n* depends on the model’s convergence rate—an often overlooked optimization that can cut DR costs by up to 70 % without sacrificing uptime.

In short, disaster recovery for ML on GCP is an engineered entropy‑budget policy: keep data, models and orchestration reproducible across zones so the system never exceeds its failure threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
