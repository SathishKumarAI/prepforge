---
qid: ing_6bfab10dd5__aws__local
question: 'Explain: DR planning — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 473
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* – I owned the end‑to‑end DR strategy; *Dive Deep* – I dissected failure modes and quantified recovery targets.

**Situation & Task**  
While launching a multi‑region recommendation engine, we needed to guarantee 99.9 % uptime during regional outages. My task was to design a Google Cloud Disaster Recovery (DR) plan that met our SLAs without breaking the bank.

**Action**  
1. **Identify critical assets:** Compute Engine VMs, Cloud SQL instances, Pub/Sub topics, and GCS buckets.  
2. **Define RPO/RTO:** Target RPO = 30 s; RTO = 4 min.  
3. **Architecture:**
   - *Multi‑region replication* of Cloud SQL via **Database Migration Service** (continuous sync).  
   - *Stateless application containers* on **Google Kubernetes Engine (GKE)**, deployed to two regions with **Anthos Config Management** for policy enforcement.  
   - *Global load balancing* using **Cloud Load Balancer** with health checks that fail‑over automatically.  
   - *Object storage* mirrored across regions via **Dual‑Region GCS buckets**; versioning protects against accidental deletes.  
4. **Automation & Testing:**  
   - Terraform scripts for infra as code, executed in CI/CD pipelines.  
   - Weekly automated DR drills using **GCP’s Disaster Recovery Test Suite**, recording RTO/RPO metrics.

**Result**  
Post‑implementation, we achieved 99.95 % availability during a simulated region outage (RTO = 2 min, RPO < 10 s). Cost increased by only 12 % due to efficient use of preemptible VMs and autoscaling.  

**Learning**  
The first drill exposed a Pub/Sub lag; we added **Pub/Sub Lite** for cost‑effective high‑throughput messaging, reducing latency by 40 %. This iterative cycle exemplifies true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
