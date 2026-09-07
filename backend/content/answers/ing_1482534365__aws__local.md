---
qid: ing_1482534365__aws__local
question: What is a disaster recovery site? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 506
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:24-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *“A disaster recovery (DR) site is a secondary, geographically separated data center that can take over operations if the primary site fails.”*  

---

### **Situation & Task**
While leading an ML inference pipeline for real‑time ad bidding at my previous company, we were required to meet a 99.999% uptime SLA and comply with GDPR’s *“right to be forgotten”* clause. A single outage could cost us ~$5 M/day in lost impressions.

### **Action (Technical Design)**
I architected an AWS‑centric DR strategy:

| Component | Primary | DR Site |
|-----------|---------|--------|
| Data store | Amazon Aurora Serverless v2 (multi‑AZ, 1 TB) | Aurora Global Database |
| Model hosting | SageMaker Endpoint (CPU+GPU) | Same endpoint replicated via **SageMaker Multi‑Region Deployment** |
| Orchestration | Step Functions + EventBridge | Same, cross‑region with *Failover* rule |
| Networking | Private VPC + Transit Gateway | Identical VPC; peered to primary for data sync |

Key decisions:  
- **Aurora Global Database** gives <1 second latency for read replicas and automatic failback.  
- **SageMaker Multi‑Region Deployment** keeps model weights in S3 Cross‑Region Replication, ensuring zero‑downtime swap.  
- Cost: ~$120/day vs $200/day at peak, a 40% reduction while keeping performance.

### **Result**
After deploying the DR site, we achieved:

* **Uptime:** 99.9999% over 12 months (down from 99.995%).  
* **Recovery Time Objective (RTO):** <30 s for all services.  
* **Cost Savings:** $1.2 M/year in avoided outage penalties.

### **Reflection**
I owned the project end‑to‑end, performed a *dive deep* analysis of failure modes, and iterated on the design after an initial 90 min failover test that revealed stale cache issues—promptly patched via Lambda cleanup. This experience reinforced my bias for action and commitment to delivering results while keeping the customer’s trust at the forefront.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
