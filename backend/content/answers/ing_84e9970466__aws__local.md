---
qid: ing_84e9970466__aws__local
question: 'Explain: Disaster recovery (DR) defined — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 567
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:35-05:00'
sources: []
---

**Disaster Recovery (DR)** is the set of policies, procedures, and technologies that ensure critical workloads can be restored after a catastrophic event—whether it’s a data center outage, ransomware attack, or natural disaster.  

---

### Behavioral (STAR)

| **Situation** | I led a 12‑member team at a fintech startup whose core transaction engine ran on AWS RDS & EC2. |
|---------------|----------------------------------------------------------------------------------------------|
| **Task**      | Design a DR plan that met our SLA of < 5 min failover while keeping cost under $1,000/month. |
| **Action**    | 1️⃣ Adopted *multi‑AZ* for RDS and scheduled nightly snapshots to an S3 bucket in a secondary region.  
2️⃣ Implemented **AWS Backup** with cross‑region replication and automated **RDS point‑in‑time restores**.  
3️⃣ Deployed a lightweight **Lambda‑based health monitor** that triggers a Route 53 failover when the primary AZ is unreachable. |
| **Result**    | • 99.99 % availability over two years.  
• Failover time averaged 3 min (well below target).  
• DR cost: $650/month—30 % lower than our previous on‑prem backup strategy. |

---

### Technical/System

- **Requirements:** *Rapid recovery*, *low data loss* (RPO < 1 h), *high availability*.  
- **Design Choices:**  
  - **AWS RDS Multi‑AZ** for synchronous replication → zero RPO.  
  - **Cross‑Region Snapshots** + **S3 Glacier Deep Archive** for long‑term retention.  
  - **Route 53 Latency Routing** + **Health Checks** to shift traffic instantly.  
- **Scalability/Availability:** Uses managed services; no single point of failure.  
- **Cost Trade‑offs:** Multi‑AZ doubles RDS cost, but savings from avoiding downtime outweigh it.  

---

### Amazon Leadership Principles Highlighted

- **Customer Obsession:** Delivered 99.99 % uptime for our users.  
- **Ownership & Dive Deep:** Built a self‑healing DR system and continually tuned thresholds based on metrics.  

**Bar‑raiser cue:** Demonstrated ownership by automating the failover process, quantified impact with SLA metrics, and learned from an initial “cold” backup test that led to a 12 h recovery—prompting the shift to Multi‑AZ.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
