---
qid: ing_c3ab5cd960__faang__local
question: What is disaster recovery? — What is Disaster Recovery? | Google Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 486
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:16:08-05:00'
sources: []
---

**Clarify**  
You’re asking about *disaster recovery* (DR) in the context of machine‑learning workloads on a cloud platform like Google Cloud. DR is the strategy and set of procedures that ensure ML models, data pipelines, and serving infrastructure can be restored after an outage—whether it’s a data center failure, network partition, or catastrophic event.

**Approach**  
1. Identify critical assets (training data, model checkpoints, inference endpoints).  
2. Define Recovery Point Objective (RPO) – how much data loss is acceptable.  
3. Define Recovery Time Objective (RTO) – how quickly services must be back online.  
4. Build automated backups, multi‑region replication, and failover scripts.  
5. Test the plan regularly.

**Depth**  
- **Data**: Use Cloud Storage or BigQuery with versioning and cross‑region replication; schedule daily incremental snapshots of training datasets.  
- **Model artifacts**: Store checkpoints in Artifact Registry or GCS buckets tagged by commit hash; enable immutable storage to avoid rollback issues.  
- **Training infra**: Spin up managed Vertex AI jobs in a secondary region via IaC (Terraform), so that if the primary region fails, jobs can resume from the last checkpoint.  
- **Serving**: Deploy models behind Cloud Load Balancer with traffic splitting; keep a standby endpoint in another region.  
- **Automation**: Cloud Functions or Cloud Run trigger restore workflows on failure detection (e.g., health‑check alerts).  

**Edge Cases**  
- Partial data corruption during snapshot – use checksums.  
- Model drift if training resumes from stale checkpoints – re‑validate metrics.  
- Network latency spikes in the standby region affecting RTO.

**Optimize & Communicate**  
- Use **multi‑region buckets** to reduce RPO to seconds while keeping costs moderate.  
- Cache inference results (e.g., with Memorystore) to speed up warm‑start of the standby endpoint, cutting RTO.  
- Document DR procedures in a runbook and embed them into CI/CD pipelines for self‑healing.

By balancing cost, complexity, and resilience, you can craft a disaster‑recovery strategy that keeps ML services available even under severe disruptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
