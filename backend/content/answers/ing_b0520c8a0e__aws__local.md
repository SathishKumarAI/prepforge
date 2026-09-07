---
qid: ing_b0520c8a0e__aws__local
question: 'Explain: Step3 - Create cluster — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 380
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:05-05:00'
sources: []
---

**Situation / Task**  
I was tasked with launching a production‑grade AI inference platform for a startup that had just prototyped its model in Docker. The goal: a resilient Kubernetes cluster that could scale to 1 k concurrent requests per second while keeping cost under $5k/month.

**Action**  
* **Design** – Adopted Amazon EKS (managed control plane) + self‑managed worker nodes on EC2 Spot Instances with Auto Scaling Groups (ASGs).  
* **Deployment** – Used Terraform for IaC, Helm charts for the inference service, and Kustomize for environment overlays.  
* **Observability** – Integrated CloudWatch Container Insights, Prometheus + Grafana, and S3‑based model registry.  
* **Scaling & Availability** – Configured Cluster Autoscaler to spin up nodes when CPU > 70 % and down below 30 %. Set node groups across three AZs; applied pod anti‑affinity for high availability.  

**Result**  
The cluster handled peak loads of 1,200 QPS with <0.5 ms tail latency and never exceeded the budget (actual spend: $4,300/month). Post‑deployment, model‑update rollouts took 3× less time compared to the previous manual Docker swarm setup.

**Learning**  
I discovered that spot instances dramatically reduce cost but require graceful degradation logic; adding a “spot‑recovery” DaemonSet mitigated sudden node loss. This reinforced *Ownership* and *Dive Deep*—understanding failure modes, quantifying impact, and iterating on the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
