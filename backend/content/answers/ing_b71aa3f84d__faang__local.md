---
qid: ing_b71aa3f84d__faang__local
question: 'Explain: Planning a disaster recovery strategy — What is Disaster Recovery?
  | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 630
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:48:45-05:00'
sources: []
---

**Clarify**  
You’re asking for the definition of *Disaster Recovery* (DR) and how it fits into a cloud‑centric strategy—specifically on Google Cloud. I’ll assume you want: (1) what DR means, (2) why it matters in GCP, and (3) key components that form a robust plan.

**Approach**  
1. Define the core concept of DR.  
2. Map the definition to cloud‑specific constructs (regions, zones, multi‑region).  
3. Outline essential elements: recovery objectives, data protection, automation, testing, cost & compliance.  

**Depth**  
*Disaster Recovery* is a set of policies and procedures that enable an organization to restore critical services and data after a catastrophic event—natural disaster, cyber‑attack, or major outage—within acceptable time (Recovery Time Objective, RTO) and data loss limits (Recovery Point Objective, RPO).  

In Google Cloud, DR leverages:  
- **Multi‑region & multi‑zone** deployments for geographic redundancy.  
- **Cloud Storage Nearline/Coldline** + **Persistent Disk snapshots** for point‑in‑time restores.  
- **Cloud Spanner/BigQuery** with automatic cross‑region replication.  
- **Deployment Manager / Terraform** to version infrastructure, enabling rapid re‑provisioning.  
- **Cloud Run / GKE** with *regional* clusters and *PodDisruptionBudgets* for high availability.  

Key components:  
| Component | Purpose | GCP Tool |
|-----------|---------|----------|
| RTO/RPO definition | Sets limits on downtime & data loss | SLAs, documentation |
| Data protection | Continuous backups & immutable storage | Cloud Storage, Persistent Disk snapshots |
| Infrastructure automation | Re‑create resources fast | Deployment Manager / Terraform |
| Orchestration & failover | Automated traffic shift | Cloud Load Balancing, Traffic Director |
| Testing & validation | Verify recovery works | Chaos Monkey, Cloud Scheduler + scripts |

**Edge cases**  
- **Data consistency** across services (e.g., transactional vs. analytical). Test cross‑region sync lag.  
- **Third‑party integrations** that may not support multi‑region. Ensure graceful degradation or backup endpoints.  
- **Cost spikes** during recovery (large VM spin‑up). Implement budget alerts.  

**Optimize & Communicate**  
1. Adopt a *“Recovery as Code”* mindset: store DR scripts in Git, CI‑deploy to a “DR‑only” project.  
2. Use *Infrastructure Observability* (Stackdriver Monitoring) to detect outages early and trigger auto‑failover.  
3. Document runbooks with clear RTO/RPO targets; review quarterly.  

By framing DR as an orchestrated, code‑driven process that aligns with GCP’s native resilience features, you satisfy both operational reliability and cost efficiency—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
