---
qid: ing_065927fadf__aws__local
question: 'Explain: High availability — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 773
total_tokens: 1006
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:07-05:00'
sources: []
---

**High Availability & Disaster Recovery on Google Cloud**  
*Leadership Principles: Ownership | Dive Deep*

---

### **Situation (S)**
I led the migration of our customer‑facing recommendation engine from a single‑region GCP deployment to a fully resilient architecture after a multi‑hour outage in 2023 that cost us $2 M in lost revenue and eroded trust.

### **Task (T)**
Design a disaster‑recovery (DR) strategy that guarantees:
- **99.999% availability** for the API layer  
- **RTO ≤ 30 min**, **RPO ≤ 1 GB** of user data  
- Cost below $20k/month

### **Action (A)**
| Component | GCP Service(s) | Design Choices | Scalability & Availability |
|-----------|-----------------|----------------|----------------------------|
| **Compute** | *Cloud Run* + *Cloud Functions* (regional) with *Global Load Balancer* and *Traffic Splitting* | Multi‑region deployment (US‑East1, US‑West1); automatic rollback on health checks | 99.95% SLA per region; combined ~99.999% |
| **Data Store** | *Cloud Spanner* (multi‑region) for transactional data; *BigQuery* + *Cloud Storage* for analytics | Cross‑region synchronous replication; automated backups every 15 min | Low latency, strong consistency, built‑in failover |
| **Stateful Cache** | *Memorystore for Redis* (regional) with *Redis Sentinel* | Replicated nodes in both regions; automatic failover within 30 s | 99.9% uptime, low cache miss penalty |
| **Backup & Restore** | *Cloud Storage* + *gsutil cp -m* for nightly snapshots; *Pipelines* to restore on demand | Incremental snapshots every hour, full backup weekly | Cost‑effective, minimal RPO impact |

- **Automation:** Terraform for infra as code, Cloud Build triggers for DR drills.  
- **Monitoring:** Stackdriver Monitoring + Alerting (RTO/RPO thresholds).  

### **Result (R)**
After deployment:
- 99.999% uptime over 12 months (down from 99.92%)  
- DR drill success rate: RTO < 20 min, RPO < 0.5 GB in all tests  
- Monthly cost: $18k (+15% vs. single‑region) but saved ~$3M in avoided outages

### **Learnings**
I realized that *cross‑region replication* alone is insufficient; automated failover scripts and regular drills are essential. I instituted quarterly “Chaos Engineering” sessions, reducing mean time to recovery from 2 h to <30 min.

> **Bar‑raiser takeaway:** The candidate shows true ownership by owning the entire DR lifecycle, dives deep into GCP services for scalability/availability trade‑offs, quantifies impact with real metrics, and learns proactively from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
