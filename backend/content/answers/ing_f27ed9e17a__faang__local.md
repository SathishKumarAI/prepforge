---
qid: ing_f27ed9e17a__faang__local
question: 'Explain: Model Routing and Portfolio Management — Hiring an AI Platform
  Engineering Leader: A 2026 Job Spec | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 561
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:03:02-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how a hiring spec for an “AI Platform Engineering Leader” (focused on model routing and portfolio management) would look in 2026, and why those responsibilities matter for an Augment Code‑style AI platform. Key assumptions: the company runs large‑scale ML workloads, needs automated model selection, and wants robust governance of deployed models.

**Approach**  
1. Outline core domains (routing, portfolio mgmt, infra).  
2. Map each domain to concrete skills & outcomes.  
3. Specify measurable KPIs and interview signals.  
4. Highlight cultural fit for a fast‑moving AI ops org.

**Depth**  

| Domain | Core Responsibilities | Desired Expertise | Typical KPI |
|--------|-----------------------|-------------------|-------------|
| **Model Routing** | Auto‑select the best model per request (latency, accuracy, cost). Build adaptive traffic shapers and A/B testers. | Distributed systems, reinforcement learning, online‑learning pipelines. Proven experience with feature store + inference graph orchestration (e.g., TensorFlow Serving + Envoy). | 99% routing latency < 10 ms; model drift detection within 24 h |
| **Portfolio Management** | Maintain a catalog of models, versioning, lineage, risk scores. Automate roll‑outs, deprecation, and compliance audits. | MLOps tooling (MLflow, DVC), data governance, policy‑as‑code. Familiar with GDPR/CCPA model‑risk frameworks. | 95% model lifecycle coverage; audit turnaround < 48 h |
| **Platform & Ops** | Design scalable inference clusters, cost‑aware autoscaling, and observability stack (metrics + logs). Ensure zero‑downtime upgrades. | Kubernetes, Istio, Prometheus/Grafana, IaC (Terraform). Experience with multi‑tenant SaaS infra. | MTTR < 5 min; cost per request < $0.01 |

**Edge Cases**  
- Sudden model failure → fallback routing logic.  
- Data drift → automated retraining triggers.  
- Regulatory change → rapid policy updates across portfolio.

**Optimize & Communicate**  
Iterate the spec by adding “policy‑as‑code” for compliance, and a “continuous experimentation” loop to surface new routing heuristics. When interviewing, frame questions around past routing failures, how they quantified success, and their approach to balancing latency vs accuracy. Highlight that this role is cross‑functional: it must translate business objectives into platform capabilities while maintaining operational excellence.

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
