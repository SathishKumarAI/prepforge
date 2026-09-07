---
qid: ing_065927fadf__faang__local
question: 'Explain: High availability — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 529
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:59:02-05:00'
sources: []
---

**High Availability – Disaster Recovery in Google Cloud**

| Step | What to do |
|------|------------|
| **1️⃣ Clarify** | *Restate:* “In a highly‑available system, disaster recovery (DR) is the strategy that ensures business continuity after a catastrophic failure.”  Confirm assumptions: what defines “catastrophic” for you?  Are we talking about site‑wide outage, data corruption, or regulatory compliance?  What SLA targets (RPO/RTO) do you need? |
| **2️⃣ Approach** | 1. **Architect multi‑region redundancy** – replicate workloads & data across geographically separate regions. <br>2. **Data protection** – use GCP services like Cloud Spanner, BigQuery, or Cloud SQL with cross‑region replication and point‑in‑time recovery. <br>3. **Automated failover** – Cloud Load Balancing + Global Traffic Director to shift traffic instantly. <br>4. **Backup & restore pipelines** – Cloud Storage for immutable backups; use Cloud Functions or Cloud Run to orchestrate restores. |
| **3️⃣ Depth** | • *RPO (Recovery Point Objective)*: choose consistent snapshots (e.g., 5‑minute intervals). <br>• *RTO (Recovery Time Objective)*: design for under 30 min by pre‑warming standby instances in each region. <br>• Use **Cloud Monitoring & Logging** to trigger failover scripts automatically. <br>• Leverage **IAM roles** and **VPC Service Controls** to secure DR data. Complexity is O(n) for replication steps, but operationally the cost scales with storage and compute in standby regions. |
| **4️⃣ Edge Cases** | • Network partition between regions – use *Global Load Balancer* health checks to detect split‑brain. <br>• Data consistency drift – employ *two‑phase commit* or *transactional APIs* for critical data. <br>• Budget constraints – evaluate *regional vs multi‑region* pricing trade‑offs. |
| **5️⃣ Optimize & Communicate** | • Adopt **Infrastructure as Code (IaC)** with Terraform to version DR templates, enabling quick roll‑outs. <br>• Implement **Chaos Engineering** (e.g., Cloud Test Lab) to validate failover paths before production. <br>Explain that DR is not a one‑time setup; it requires continuous testing, cost monitoring, and alignment with business priorities. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
