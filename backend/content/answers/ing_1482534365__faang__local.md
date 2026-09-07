---
qid: ing_1482534365__faang__local
question: What is a disaster recovery site? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:47-05:00'
sources: []
---

**Clarify**

A *disaster‑recovery (DR) site* is an alternate data center or cloud region that can take over operations when the primary site fails due to a catastrophic event (natural disaster, outage, cyber‑attack).  
Assumptions: we’re discussing on‑premises + cloud hybrid environments; recovery objectives are RTO (Recovery Time Objective) and RPO (Recovery Point Objective).

**Approach**

1. Identify critical workloads and their SLAs.  
2. Choose a geographically isolated location (same continent for latency, different for risk).  
3. Replicate data/VMs using synchronous or asynchronous mechanisms.  
4. Automate failover with health‑checks and DNS failover.  
5. Test recovery regularly.

**Depth**

- **Data replication:** *Google Cloud* offers **Cloud Storage Nearline / Coldline** with cross‑region replication, and **Spanner** for globally consistent databases.  
- **Compute:** Use **Managed Instance Groups** in a secondary region; autoscaling + load balancer.  
- **Networking:** Global External Load Balancer with health checks routes traffic to healthy region.  
- **Automation:** Cloud Functions/Deployment Manager scripts trigger failover; Terraform manages infrastructure as code.  
- **Metrics:** Monitor RTO/RPO via Stackdriver; alert on replication lag > threshold.

**Edge Cases**

- *Partial outages* – ensure graceful degradation, not full failover.  
- *Data consistency* – asynchronous replication may lose last‑minute changes (RPO).  
- *Cost spikes* – running duplicate resources 24/7 can be expensive; use “pay‑as‑you‑go” or on‑demand scaling.

**Optimize & Communicate**

- **Hybrid DR:** Keep critical services live locally, only failover non‑critical workloads.  
- **Automation first:** CI/CD pipelines for DR scripts reduce human error.  
- **Narrative:** Explain trade‑offs (latency vs cost), quantify RTO/RPO, and show how automated health checks keep the system resilient.

This structured plan balances reliability, performance, and cost—key metrics any FAANG interviewer will value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
