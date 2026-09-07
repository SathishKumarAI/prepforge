---
qid: ing_559f844a64__aws__local
question: 'Explain: Daemon Set — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 412
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:48-05:00'
sources: []
---

**Situation & Task**  
I was tasked with ensuring that a critical data‑processing daemon (runs nightly ETL jobs) remained highly available on our Kubernetes cluster while keeping cost predictable. The existing Deployment spun up replicas only during the job window, causing cold starts and occasional timeouts.

**Action**  
- **Architected a DaemonSet** so every node hosts the pod, guaranteeing local execution and eliminating scheduling delays.  
- Leveraged **AWS Fargate for EKS** to run pods server‑less; this removed EC2 cost drift.  
- Added an **init container** that pulls the latest ETL image from **Amazon ECR** and registers a readiness probe (`/health`).  
- Configured **Cluster Autoscaler** with `max_unavailable=0` to keep the DaemonSet stable during node scaling events.  
- Implemented **Prometheus + Grafana** dashboards to capture pod latency, error rates, and CPU/memory usage; set alerts on a 5‑minute rolling window.

**Result**  
- Availability improved from *95%* (deployment) to *99.9%* (DaemonSet).  
- Cold‑start time dropped by **70 %**, cutting overall job duration from 2 h 30 min to 1 h 45 min.  
- Cost savings of ~**$4k/month** due to Fargate’s pay‑as‑you‑go model and reduced node overprovisioning.

**Learnings & Bar‑Raiser Signals**  
I owned the end‑to‑end change, dug deep into pod lifecycle nuances, quantified impact with real metrics, and iterated after an initial failure where the init container timed out (fixed by adding a retry loop). This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
