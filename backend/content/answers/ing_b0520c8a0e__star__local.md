---
qid: ing_b0520c8a0e__star__local
question: 'Explain: Step3 - Create cluster — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 295
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:36-05:00'
sources: []
---

**Situation:**  
At my previous role, our data‑science team needed a scalable environment to run nightly ML model training jobs. The existing on‑prem cluster was reaching capacity and we were hitting 90 % CPU utilization during peak runs.

**Task:**  
I had to spin up an autoscaling Kubernetes cluster in AWS that could handle variable GPU workloads while keeping costs under $2k/month and ensuring zero downtime for the training pipelines.

**Action:**  
Using Terraform, I provisioned an EKS cluster with node groups configured for both spot and on‑demand instances. I enabled Cluster Autoscaler and set up a custom HPA based on pod CPU/memory thresholds. For GPU support, I added NVIDIA device plugin DaemonSets. The deployment pipeline was automated via GitHub Actions: every push to the `main` branch ran `helm upgrade --install` against the cluster, with secrets managed through SOPS. I also configured Prometheus and Grafana dashboards for real‑time monitoring.

**Result:**  
The new cluster handled a 4× increase in concurrent training jobs without exceeding 70 % CPU utilization, cutting infrastructure cost by 25 %. The team reported a 30 % faster model turnaround time, and I learned how to balance autoscaling policies with cost controls while maintaining high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
