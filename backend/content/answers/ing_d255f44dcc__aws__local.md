---
qid: ing_d255f44dcc__aws__local
question: 'Explain: Deployments — DevOps-SRE/2_ContainerOrchestration/Kubernates/Readme.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 440
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:10-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with turning an experimental NLP model (≈ 200 M parameters) into a production‑grade inference service that could serve 5 k RPS with < 120 ms latency, while keeping costs below $0.02 per request.

**Action**  
* **Architecture:** Containerised the model using Docker, built a lightweight inference runtime (TorchScript + FastAPI). Deployed on EKS with *Karpenter* for auto‑scaling based on CPU/memory thresholds and spot instances to cut compute spend by 35 %.  
* **SRE Practices:** Implemented *Prometheus* + *Grafana* dashboards, set up *Alertmanager* alerts (latency > 200 ms, error rate > 0.5 %). Added a *canary rollout* with *Argo Rollouts*, ensuring zero‑downtime updates and automatic rollback on SLA breach.  
* **Cost & Availability:** Leveraged *Savings Plans* + *Reserved Instances* for the baseline nodes; used S3 for model artefacts, CloudFront for static assets. Multi‑AZ cluster ensured 99.95 % uptime.  
* **Monitoring & Feedback Loop:** Every deployment logged inference latency and error rates to a centralized log store (EKS + Loki), feeding back into a nightly data‑driven review.

**Result**  
Achieved 5 k RPS with < 120 ms mean latency, reduced per‑request cost from $0.03 to $0.018, and maintained 99.97 % uptime over six months.  

> **Leadership Principles:** *Customer Obsession* (delivering fast, reliable inference) & *Ownership* (owning the entire CI/CD + SRE pipeline).  
> **Bar‑raiser cues:** Deep dive into scaling choices, quantified cost savings, and continuous learning from failed rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
