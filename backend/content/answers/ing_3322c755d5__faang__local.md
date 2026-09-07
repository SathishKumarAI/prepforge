---
qid: ing_3322c755d5__faang__local
question: 'Explain: Your pilot succeeded. Walk me through what changes when you take
  it to production for 5,000 users.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 517
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:43:25-05:00'
sources: []
---

**Clarify**

> “Your pilot succeeded.” I’ll assume we’ve validated a ML‑driven feature (e.g., a recommendation engine) with a small cohort of ~100–200 users and are now scaling it to 5 k active users.  
> *Assumptions to confirm:* traffic volume, latency SLA, data privacy rules, SLAs for model drift, monitoring budget.

**Approach**

1. **Infrastructure & Scaling** – move from a single‑node dev box to autoscaling compute (K8s or serverless).  
2. **Data Pipeline Robustness** – replace ad‑hoc ingestion with a fault‑tolerant stream (Kafka/Firestore) and batch ETL jobs for training data.  
3. **Model Serving & A/B Testing** – expose the model via an API gateway, enable traffic routing to canary vs production versions.  
4. **Observability** – set up metrics (latency, error rate), logs, and model‑specific drift alerts.  
5. **Governance & Security** – enforce data encryption at rest/transfer, role‑based access, and compliance checks.

**Depth**

- *Compute*: Use GPU instances or TPUs for inference; cache embeddings in Redis to hit <50 ms latency.  
- *Training*: Schedule nightly retraining on the latest 30 days of interactions; use incremental learning if feasible.  
- *Monitoring*: Prometheus + Grafana dashboards; ML‑specific metrics (precision@k, coverage).  
- *Alerting*: PagerDuty for drift >2σ or error rate >1% spike.  
- *Cost*: Roughly 5× increase in compute + storage, but can be mitigated with spot instances and model quantization.

**Edge Cases**

- Sudden traffic surge → autoscaler mis‑config → request throttling.  
- Data drift leading to degraded recommendations → fallback to rule‑based baseline.  
- Model serving failure → circuit breaker redirects to cached static responses.

**Optimize & Communicate**

Explain that the key trade‑off is between *latency* and *model freshness*: batch retraining every 12 h vs online learning. Use a CI/CD pipeline for model rollouts, and document rollback procedures. Narrate that we’ll start with a small canary (5% traffic), monitor KPIs, then progressively shift to full rollout—this keeps risk low while scaling to 5k users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
