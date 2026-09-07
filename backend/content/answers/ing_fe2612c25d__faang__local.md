---
qid: ing_fe2612c25d__faang__local
question: 'Explain: Risk assessment — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 551
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:31:11-05:00'
sources: []
---

**Clarify**  
The interview asks how *Disaster Recovery* (DR) fits into risk assessment for machine‑learning workloads on Google Cloud. I’ll assume we’re protecting model training pipelines, inference endpoints, and associated data stores from a catastrophic outage (e.g., region failure or cyber‑attack).

**Approach**  
1. Define DR objectives: *Recovery Time Objective* (RTO) & *Recovery Point Objective* (RPO).  
2. Map GCP services to DR capabilities (multi‑region storage, cross‑region replication, Cloud Spanner, Cloud BigQuery).  
3. Outline a two‑tier strategy: *Active‑active* for high‑availability and *backup‑restore* for long‑term resilience.  
4. Highlight monitoring & automated failover with Cloud Functions or Cloud Run.

**Depth**  
- **RTO/RPO:** For real‑time inference, RTO < 5 min; training pipelines may tolerate hours (RPO ≈ 24 h).  
- **Replication:** Use *Cross‑Region Replication* on Cloud Storage and *Multi‑Regional* buckets for raw data. Model artifacts live in Artifact Registry with *regional* replication plus a *backup region*.  
- **Databases:** Cloud Spanner’s multi‑region configuration gives < 1 s latency & automatic failover; BigQuery can be exported nightly to an external GCS bucket.  
- **Automation:** Deploy a Cloud Scheduler job that triggers a Cloud Function to copy the latest training checkpoint to the backup region and update the inference endpoint via Cloud Run or GKE with a *Blue/Green* rollout.  
- **Testing:** Periodic DR drills using Terraform‑managed stacks; simulate region outage and measure RTO/RPO compliance.

**Edge Cases**  
- Data consistency during replication lag → use *strongly consistent* services (Spanner).  
- Sudden spike in inference traffic post‑failover → autoscale policies must be pre‑configured.  
- Cost of double‑region storage vs. acceptable risk; negotiate with stakeholders.

**Optimize & Communicate**  
I’d propose a cost‑benefit matrix: incremental RTO reduction vs. extra regional spend, and present a phased rollout—start with critical models, then expand to the full pipeline. I’ll emphasize that DR is not just backup but an integral part of ML ops, ensuring business continuity while meeting compliance (e.g., GDPR data residency). This structured answer showcases problem framing, technical depth, and pragmatic trade‑offs—all key in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
