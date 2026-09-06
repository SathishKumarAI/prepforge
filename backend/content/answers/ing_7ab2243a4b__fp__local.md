---
qid: ing_7ab2243a4b__fp__local
question: 'Explain: High-Level Architecture (10 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 421
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:46-05:00'
sources: []
---

**High‑level architecture for a ML system interview**

1. **Problem & data pipeline** –  
   *Why*: The model exists to transform raw signals into actionable predictions.  
   *What it does*: Collect, clean, and label data; store in an immutable log (e.g., Kafka + S3). This guarantees reproducibility and auditability.

2. **Feature store / feature layer** –  
   *Why*: Features are the “inputs” to every model; they must be consistent between training and serving.  
   *What it does*: Materializes engineered features in a central repository (e.g., Feast) with versioning, caching, and real‑time inference support.

3. **Model training & experimentation** –  
   *Why*: The core ML logic is iterative; we need isolation to compare hypotheses.  
   *What it does*: Uses a pipeline orchestrator (Airflow/Dagster), automated hyper‑parameter search, and model registry (MLflow). It enforces reproducibility via containerization.

4. **Model serving & inference** –  
   *Why*: Predictions must be low‑latency and scalable.  
   *What it does*: Wraps the trained artifact in a stateless microservice behind an API gateway; autoscaling is driven by request rates. For batch jobs, use Spark or Flink.

5. **Monitoring & feedback loop** –  
   *Why*: ML models drift; we must detect and react automatically.  
   *What it does*: Tracks data distribution, prediction quality, latency, and triggers re‑training pipelines when thresholds are breached.

**Non‑obvious insight:** Treat the *feature store* as a *distributed database of hypotheses*. Every feature version is an experiment in itself; by versioning features you can retroactively “undo” a bad feature without touching the model code. This decouples data engineering from ML, dramatically reducing turnaround time for A/B tests and improving system resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
