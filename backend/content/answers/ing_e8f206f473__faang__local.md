---
qid: ing_e8f206f473__faang__local
question: 'Explain: Tracing ​ — MLflow 3 for GenAI | Databricks on AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 550
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:41:17-05:00'
sources: []
---

**Clarify**

You’re asking how *Tracing* works in **MLflow 3** when building Generative AI (Gen‑AI) workloads on **Databricks running on AWS**.  
Assumptions to confirm:  
1. You want end‑to‑end observability of model training and inference pipelines.  
2. The environment uses the unified Databricks Runtime with MLflow 3 integrated.  
3. Tracing is meant for distributed, large‑scale Gen‑AI jobs (e.g., fine‑tuning LLMs) rather than single‑node experiments.

**Approach**

1. Enable the new **MLflow Tracing API** in your notebooks or scripts.  
2. Instrument each logical unit: data ingestion, preprocessing, model training, evaluation, and inference.  
3. Deploy a **Databricks Unified Analytics Platform (DAP)** job that runs on AWS EMR clusters; tracing spans are auto‑captured by the MLflow agent.  
4. Visualize traces in the *Experiments* tab or export to OpenTelemetry collectors for deeper analysis.

**Depth**

- **Span creation:** `with mlflow.tracking.MlflowClient().start_span(name="train"):` automatically tags span metadata (cluster ID, job run ID).  
- **Context propagation:** MLflow uses `mlflow.set_tag()` to propagate trace context across Spark executors.  
- **Storage:** Traces are persisted in the Databricks Metastore (Delta Lake) and can be queried via SQL for latency breakdowns.  
- **Integration with OpenTelemetry:** Exporter pushes spans to AWS X-Ray or Grafana Loki for cross‑service correlation.

**Edge Cases**

- **Cold starts** on spot instances may miss initial spans; mitigate by adding retry logic.  
- **Large payloads** (e.g., model weights) should be excluded from span attributes to avoid storage bloat.  
- **Cluster autoscaling** can break context propagation if workers terminate mid‑span; ensure graceful shutdown hooks.

**Optimize & Communicate**

- For performance, batch trace logs and compress them before writing to Delta Lake.  
- Use *sampling* when the job runs many small steps (e.g., token‑level logging) to keep storage costs low.  
- Explain trade‑offs: richer tracing → higher overhead; minimal tracing → less observability.  
- When interviewing, narrate how this design satisfies production requirements—low latency, high reliability, and compliance with AWS security controls—while staying within MLflow 3’s declarative API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
