---
qid: ing_b6a893c3e8__faang__local
question: 'Explain: Stronger business continuity — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 520
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:46-05:00'
sources: []
---

**Clarify**  
You’re asking how “stronger business continuity” ties into *Disaster Recovery (DR)* on Google Cloud. I’ll assume you want a concise, interview‑ready explanation: what DR is, why it matters for uptime, and the key GCP services that support it.

---

**Approach**  
1. Define DR in the context of cloud resilience.  
2. Outline its purpose: data protection & rapid recovery after an outage or breach.  
3. Highlight Google Cloud tools (Backup/DR, multi‑region storage, Cloud Spanner, Cloud CDN).  
4. Summarize typical recovery objectives—Recovery Point Objective (RPO) and Recovery Time Objective (RTO).

---

**Depth**  

| Aspect | GCP Solution | How it helps |
|--------|--------------|--------------|
| **Replication** | Cloud Storage multi‑regional buckets | Near‑real‑time geo‑replication ensures data is still available after a region failure. |
| **Backup & Restore** | Google Cloud Backup for GKE / Cloud Filestore backup | Scheduled snapshots with point‑in‑time restore. |
| **Database resilience** | Cloud Spanner, Bigtable, Cloud SQL read replicas | Automatic failover and synchronous replication across regions. |
| **Application layer** | Cloud Run + Cloud Load Balancing | Traffic can be redirected to healthy instances in another region instantly. |
| **Automation** | Cloud Functions / Cloud Scheduler + IaC (Terraform) | Orchestrate DR drills, test restores, and rollback plans. |

RPO targets the last consistent backup you’re willing to lose; RTO is how fast services must come back online—often minutes for SaaS products.

---

**Edge Cases**  
- *Data consistency*: multi‑region writes can lag; use synchronous replication for critical tables.  
- *Cost*: continuous geo‑replication and standby instances raise billable resources.  
- *Compliance*: some regulations require on‑prem or specific jurisdictional storage—check Cloud Storage’s location options.

---

**Optimize & Communicate**  
To improve, integrate automated DR drills (e.g., “dr‑test” pipelines) that validate failover without manual intervention. When presenting this to stakeholders, frame it as a *risk mitigation strategy* that turns downtime into a predictable, low‑cost event—exactly what a FAANG product team expects: resilience built in, not added on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
