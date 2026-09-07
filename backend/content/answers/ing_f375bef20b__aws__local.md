---
qid: ing_f375bef20b__aws__local
question: 'Explain: Nodes — What is Kubernetes (k8s)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 439
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:50-05:00'
sources: []
---

**Question:** *Explain: Nodes — What is Kubernetes (k8s)?*  

> **Leadership Principles:** *Customer Obsession*, *Ownership*

---

### Situation  
I was tasked with migrating a production ML inference pipeline from an on‑prem VM farm to the cloud, while guaranteeing < 200 ms latency and 99.9% uptime for our retail recommendation service.

### Task  
Design a highly available, auto‑scaling deployment that could elastically handle daily traffic spikes of up to 3× peak load (≈ 1M requests/day) without manual intervention.

### Action  
I chose **Amazon EKS** as the managed Kubernetes service because it abstracts control plane operations and integrates natively with IAM, CloudWatch, and Fargate.  

* **Nodes:** I provisioned a mix of spot + on‑demand EC2 worker nodes (c5.large) for cost control, and added an autoscaling group that scales from 3 to 15 instances based on CPU/queue depth metrics exposed by Prometheus.
* **Pods & Services:** The inference container runs as a Deployment with 3 replicas; a Service exposes it via an Application Load Balancer (ALB).  
* **Observability:** CloudWatch logs + X-Ray tracing capture request latencies, feeding back into the HPA target.  
* **Cost‑Savings Trade‑off:** Spot nodes reduce compute cost by ~30% but require graceful termination handling; we implemented a preemption‑aware scheduler to drain pods.

### Result  
- **Latency:** 180 ms average (↓ 10% vs legacy).  
- **Uptime:** 99.94% over 6 months.  
- **Cost:** $0.48 per request, a 35% reduction from the previous VM baseline.  

**Bar‑raiser notes:** Demonstrated ownership by automating scaling, deep dive into cost/latency trade‑offs, quantified impact, and learned to add preemption resilience after initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
