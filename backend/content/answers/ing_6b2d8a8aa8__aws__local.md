---
qid: ing_6b2d8a8aa8__aws__local
question: 'Explain: Objectives — Example: Deploying Cassandra with a StatefulSet |
  Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 521
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:29-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: Our data‑science team needed a low‑latency, highly available key‑value store for feature flag caching across all ML pipelines. *Task*: Lead the rollout of Cassandra in production using Kubernetes so that engineers could spin up replicas on demand without manual configuration. *Action*: I owned the project from requirement gathering to post‑deployment monitoring, mapping each step to **Customer Obsession** (ensuring latency < 5 ms for downstream models) and **Ownership** (designing self‑healing stateful workloads). I wrote a Terraform module that provisioned an EKS cluster with node groups tuned for high I/O, created a `StatefulSet` with persistent volumes on EBS gp3, and set up Prometheus alerts for disk usage and read/write latency. *Result*: Deployed 5 replicas in under 30 minutes; achieved <4 ms average query time, 99.999% uptime, and reduced ops tickets by 70%. The team now scales Cassandra clusters automatically during model training spikes.

**Technical Design**  
- **StatefulSet**: Guarantees stable network IDs, ordered scaling, and persistent storage per pod.  
- **AWS Services**: EKS (managed Kubernetes), EBS gp3 for SSD-backed PVs, CloudWatch & Prometheus for observability, IAM roles for service accounts to grant minimal permissions.  
- **Scalability**: Horizontal Pod Autoscaler on CPU/latency metrics; storage auto‑scales via `VolumeClaimTemplates`.  
- **Availability**: Multi‑AZ node groups with anti‑affinity rules ensure replicas spread across AZs; enable `cassandra.yaml` config for automatic repair.  
- **Cost**: Spot instance usage for non‑critical nodes, EBS gp3’s lower price per GB/s, and autoscaling reduce idle capacity.

**Bar‑raiser Signals**  
- Demonstrated deep dive into Cassandra tuning (e.g., compaction strategy, read repair).  
- Quantified impact with real latency/uptime metrics.  
- Learned from a failed rollout where I omitted anti‑affinity; fixed it by adding node selectors and revising the Helm chart.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
