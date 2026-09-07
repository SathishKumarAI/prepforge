---
qid: ing_c2b285cd4e__faang__local
question: 'Explain: Evidence and Root Cause — What is an AI SRE?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 448
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:43-05:00'
sources: []
---

**Clarify**  
We’re asked to define *AI SRE*—a role that blends Site Reliability Engineering (SRE) practices with artificial‑intelligence workloads. I’d confirm the scope: Are we talking about on‑prem ML pipelines, cloud‑based inference services, or both? What maturity level of AI ops is expected (e.g., automated retraining vs. human‑in‑the‑loop)?  

**Approach**  
1. Map core SRE pillars (availability, latency, cost) to AI use cases.  
2. Identify unique AI signals: model drift, data quality, inference throughput.  
3. Outline tooling layers—monitoring, alerting, CI/CD for models, governance.  

**Depth**  
An *AI SRE* is a reliability engineer who treats machine‑learning systems as first‑class services. They build observability around *model performance metrics* (accuracy, F1, AUC), *data pipeline integrity* (schema drift, missing values), and *inference latency*. They implement automated retraining pipelines, manage model versioning via registries, and enforce rollback on degradation. Cost‑optimization is critical—monitor GPU/TPU utilization, spot‑instance usage, and batch vs. real‑time inference trade‑offs. Governance involves audit logs for model decisions and compliance checks (GDPR, HIPAA).  

**Edge Cases**  
- Sudden data distribution shifts causing “concept drift.”  
- Model poisoning attacks altering predictions.  
- Resource contention when multiple models share GPU clusters. Tests include synthetic drift injection, adversarial input simulation, and load‑shedding scenarios.  

**Optimize & Communicate**  
Start with a lightweight telemetry stack (Prometheus + Grafana) for latency; add model‑specific metrics via OpenTelemetry. Use feature flags to enable/disable new models without redeploying services. Narrate by framing reliability as “trust in predictions” and cost as “compute budget per inference.” This demonstrates structured thinking, deep technical grasp, and clear communication—key signals FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
