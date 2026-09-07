---
qid: ing_86db314625__aws__local
question: 'Explain: Kubernetes — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 421
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑platform team that needed to expose an Apache Solr search cluster to hundreds of microservices while keeping costs under $10K/month and ensuring >99.9 % uptime.

**Action (Technical Design)**  
I chose **Amazon EKS** for Kubernetes orchestration because it gives us managed control plane, automatic version upgrades, and native IAM integration—critical for security compliance. Inside the cluster I deployed Solr using a Helm chart that provisions:

- **StatefulSet** with 3 replicas + one *headless* service for ZooKeeper quorum  
- Persistent volumes on **EBS gp3** (10 GB each) to hit the *10 % write‑throughput* SLA  
- Horizontal Pod Autoscaler based on CPU and Solr query latency metrics from **Prometheus/Grafana**

For scaling, I added a **Cluster Autoscaler** that spins up spot instances for bursty traffic, reducing compute spend by 35 %. The cluster’s *Service Mesh* (AWS AppMesh) routes requests with fine‑grained circuit breaking to avoid cascading failures.

**Result**  
Within two months we achieved:

- **99.97 % availability** (downtime <2 min/month)  
- **30 % reduction in query latency** (from 350 ms to 240 ms)  
- **$3,200/month cost savings** versus our on‑prem Solr cluster

**Reflection & Learning**  
I took full ownership of the rollout, iterated quickly after a production outage caused by an incorrectly tuned pod resource request—this taught me to incorporate *real‑time telemetry* before scaling. I also documented the entire deployment pipeline in Terraform, enabling repeatable infra for future teams.

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
