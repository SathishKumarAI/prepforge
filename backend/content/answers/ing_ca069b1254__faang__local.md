---
qid: ing_ca069b1254__faang__local
question: What does backup mean? — What is Disaster Recovery? | Google Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 519
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:29:29-05:00'
sources: []
---

**Clarify**  
You’re asking about *backup* versus *disaster recovery (DR)* in a cloud‑ML context.  
Assumptions:  
1. Data and model artifacts are stored on Google Cloud Storage or BigQuery.  
2. The goal is business continuity for ML pipelines, not just data retention.

---

**Approach**  
1. Define each term in the ML lifecycle.  
2. Explain how GCP offers services for both.  
3. Contrast their scopes (frequency, recovery time).  
4. Highlight best‑practice integration with ML workflows.

---

**Depth**

| Concept | What it is | Typical GCP service(s) | Use‑case in ML |
|---------|------------|------------------------|---------------|
| **Backup** | Periodic snapshots of data/model artifacts for point‑in‑time restoration. | Cloud Storage “Object Versioning”, BigQuery snapshots, Cloud Filestore backups. | Restore a model checkpoint or training dataset after accidental deletion. |
| **Disaster Recovery** | Architectural strategy to maintain availability during site‑wide failures (e.g., region outage). | Multi‑region buckets, Cross‑Region Replication, Cloud Spanner global instances, Compute Engine Managed Instance Groups with regional load balancers. | Keep a live ML serving endpoint operational if the primary region fails. |

- **Backup** is *data‑centric*; it protects against accidental or malicious changes.  
- **DR** is *infrastructure‑centric*; it ensures service continuity.

---

**Edge Cases**

- Backup lag: versioning may not capture real‑time streaming data.  
- DR cost: multi‑region replication can double storage costs.  
- Model drift: restoring an old checkpoint might reintroduce outdated behavior.

Test by simulating a region outage and verifying that the serving endpoint fails over to the replica without exceeding SLA.

---

**Optimize & Communicate**

- Use **Object Lifecycle Management** to prune stale backups, balancing cost vs. compliance.  
- Automate DR drills with Terraform scripts; document RTO/RPO metrics in Ops dashboards.  
- Narrate: “We treat backup as our first line of defense against accidental data loss, while disaster recovery is our fail‑over blueprint for when the entire region goes dark.”

This structured answer demonstrates clear problem framing, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
