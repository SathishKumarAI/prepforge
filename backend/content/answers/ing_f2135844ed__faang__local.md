---
qid: ing_f2135844ed__faang__local
question: 'Explain: Implementation — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 534
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:24-05:00'
sources: []
---

**Clarify**  
You’re asking for *Disaster Recovery (DR) on Google Cloud*—the set of processes and services that let you restore ML workloads after a catastrophic failure. I’ll assume you mean “how do we design, deploy, and test DR for production‑grade ML pipelines” rather than generic cloud‑resilience concepts.

**Approach**  
1. Identify critical assets: training data, model weights, inference endpoints, job schedulers.  
2. Map the recovery time objective (RTO) & recovery point objective (RPO).  
3. Choose Google services: Cloud Storage for immutable checkpoints, Vertex AI Pipelines for reproducible jobs, Cloud Run or GKE for serving, and Cloud Spanner/BigQuery for metadata.  
4. Build a *dual‑region* architecture with automated replication.  
5. Automate failover scripts (Terraform + Cloud Functions).  
6. Test via chaos engineering (Simian Army) and run recovery drills.

**Depth**  
- **Data**: Use Cloud Storage “Object Versioning” + cross‑regional buckets; snapshot BigQuery tables nightly.  
- **Models**: Store in Artifact Registry with immutable tags; version every training run via Vertex AI’s experiment tracking.  
- **Inference**: Deploy to Cloud Run with traffic split (canary) and set up a global load balancer that routes to the healthy region.  
- **Automation**: Terraform modules create identical infra in both regions; Cloud Functions trigger a rollback if health checks fail.  
- **Testing**: Periodic “drain” of one region, validate predictions, then switch back. RTO < 30 min, RPO ≤ 1 hour achievable.

**Edge Cases**  
- *Data drift* between regions—ensure same data pipelines.  
- *Latency spikes* when routing to secondary region.  
- *Cost blow‑out* if both regions stay live; use scheduled shutdowns for the standby cluster.

**Optimize & Communicate**  
Iterate by adding incremental backups (e.g., Cloud SQL point‑in‑time recovery) and monitoring alerts (Stackdriver). Explain trade‑offs: higher RTO means cheaper DR (single region + async replication), lower RTO demands synchronous cross‑region writes. In an interview, I’d end with “I’d start with a minimal viable DR—versioned artifacts + dual‑region serving—and progressively add automated failover and testing until the SLAs are met.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
