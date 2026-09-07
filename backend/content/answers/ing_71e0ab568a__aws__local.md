---
qid: ing_71e0ab568a__aws__local
question: 'Explain: ⭐ Horizontal Pod Autoscaling (HPA) — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 460
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:45-05:00'
sources: []
---

**Situation (S)**  
I led a migration of our recommendation engine from on‑prem VMs to EKS for a media startup. The service spikes 200 % during prime‑time launches, but remains idle otherwise, so we needed elastic scaling without manual intervention.

**Task (T)**  
Implement a cost‑effective, highly available autoscaling strategy that keeps latency < 150 ms while staying under $3k/month.

**Action (A)**  
I designed **Horizontal Pod Autoscaler (HPA)** to watch CPU/Memory metrics and trigger pod replicas between 1–20.  
* **Metrics**: Custom Prometheus exporter exposed `/metrics`; HPA polls every 15 s via `metrics.k8s.io`.  
* **AWS services**: EKS, CloudWatch for logs, S3 for stateful artifacts, Fargate profiles for burst pods.  
* **Scaling logic**: Target CPU 65%; when average > 80% over 2 min → scale up; if < 40% over 5 min → scale down.  
* **Availability**: Spread replicas across at least two AZs; use pod anti‑affinity to avoid single points of failure.  
* **Cost**: Spot instances (max price $0.10/hr) for burst pods, on‑demand for baseline; total cost 35 % lower than pre‑migration.

**Result (R)**  
During a product launch, HPA scaled from 2 → 18 replicas in 4 min, keeping latency at 120 ms and handling 1.5× traffic surge. Monthly spend dropped to $2.7k, a 28 % savings, while SLA remained 99.9 %.  

**Leadership Principles Reflected**  
* **Customer Obsession** – ensured seamless user experience under load.  
* **Ownership & Dive Deep** – I architected the metric pipeline, tuned thresholds, and validated with real traffic, learning to adjust scaling windows after a brief over‑provisioning incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
