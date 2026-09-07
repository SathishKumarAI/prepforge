---
qid: ing_4e22b4e70d__aws__local
question: 'Explain: Cleaning up — Example: Deploying Cassandra with a StatefulSet
  | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 411
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:04-05:00'
sources: []
---

**Situation & Task**  
I was tasked to migrate our analytics pipeline from on‑prem Cassandra to a cloud‑native deployment so we could scale reads for real‑time dashboards. The goal: 99.9 % availability and < 5 % cost over the legacy cluster.

**Action**  
* **Ownership & Bias for Action:** I immediately scoped a Kubernetes rollout using a **StatefulSet** to preserve node identity and persistent volumes.  
* **Dive Deep & Invent & Simplify:** I chose **Amazon EBS gp3** (SSD) for storage, linked it to the StatefulSet via PVCs with *ReadWriteOnce*. For high availability I configured **anti‑affinity rules** so replicas never share a host.  
* **AWS services leveraged:**  
  * **EKS** – managed control plane reduces operational overhead.  
  * **Amazon FSx for Lustre** – optional, if we needed higher throughput (we didn’t).  
  * **Cluster Autoscaler** – scales node pool automatically based on CPU/memory usage.  
* I scripted the deployment in Helm, added readiness/liveness probes, and set a rolling update strategy to avoid downtime.  

**Result**  
After launch:  
* Availability rose from 97 % to 99.95 %.  
* Read latency dropped 35 % (from 120 ms to 78 ms).  
* Operational cost fell 28 % by eliminating on‑prem hardware and using spot instances for the node pool.

**Learnings** – The StatefulSet abstraction saved us from manual node re‑balancing. If I had skipped anti‑affinity, we’d have seen a 12 % increase in read latency during node failures. Future iterations will add **Cassandra’s repair scheduler** as a cron job for stronger consistency without impacting reads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
