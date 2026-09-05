---
qid: ing_f375bef20b__star__local
question: 'Explain: Nodes — What is Kubernetes (k8s)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 383
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:46-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time fraud detection model for a fintech client. The team had to move from a monolithic Docker deployment to a scalable Kubernetes cluster on AWS EKS so that we could serve predictions at 10,000 TPS without downtime.

**Task** – My goal was to design the node architecture: decide how many worker nodes, which instance types, and how to allocate GPU resources for the TensorFlow inference container. I also had to ensure high availability and cost control while meeting SLA targets.

**Action** – I started by profiling the model’s CPU and memory usage with `kubectl top pod` and a custom Prometheus scrape of the inference container. Based on that, I chose m5.large nodes for general traffic and p3.2xlarge GPU nodes for bursty high‑volume windows. I defined two node pools in EKS and used taints/tolerations so the GPU pool only ran the inference pod. Then I wrote a Helm chart that set resource requests/limits, enabled HPA on CPU utilization, and added an init container to pre‑warm the model weights into shared memory. Finally, I automated scaling with Cluster Autoscaler and set up a blue‑green deployment strategy for zero‑downtime upgrades.

**Result** – After rollout, we achieved 99.9% uptime and maintained < 200 ms latency at peak load. The cluster cost dropped by 18% compared to the monolith because of targeted GPU usage. I learned that careful node sizing combined with Kubernetes primitives like taints, HPA, and Helm can turn a heavy ML inference workload into a robust, cost‑effective service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
