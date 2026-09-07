---
qid: ing_8c587d9922__faang__local
question: 'Explain: Databricks System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 551
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:30-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of how one would design a production‑grade ML system on Databricks, especially the kind of questions that surface in recent FAANG interviews.  
Key assumptions: we have large, structured/semistructured data, need end‑to‑end pipelines (ingest → transform → train → serve), and must satisfy latency, scalability, governance, and monitoring requirements.

**Approach**  
1. **Data ingestion & storage** – use Delta Lake on S3/Azure‑Blob for ACID guarantees and schema evolution.  
2. **Feature engineering** – build a feature store (Delta Live Tables) that supports incremental updates, caching, and versioning.  
3. **Model training** – leverage MLflow tracking, Spark ML pipelines, or AutoML for hyper‑parameter search; schedule via Delta Live Tables or Airflow.  
4. **Serving** – expose models through Databricks Runtime REST endpoints or integrate with Feast + a low‑latency inference cluster (e.g., Kubernetes).  
5. **Governance & monitoring** – enforce lineage, data quality checks, and A/B testing; use Databricks Jobs UI + Grafana for metrics.

**Depth**  
- *Delta Lake* gives ACID ops + time travel → crucial for reproducibility.  
- *MLflow* tracks experiments (parameters, artifacts) and enables model registry for promotion to prod.  
- *Feature store* decouples feature engineering from training/serving, reducing drift.  
- *Serving*: a small Spark cluster can handle 10‑k RPS; for >100‑k RPS use Triton or TensorRT on GPU nodes.  
- Complexity: ingestion O(n), training O(n log n) with distributed MLlib; serving latency ~O(1).

**Edge Cases**  
- Sudden data schema changes → Delta Lake’s evolution handles it but may break downstream models.  
- Model drift after deployment → continuous evaluation pipelines needed.  
- Security gaps in feature store access → enforce role‑based access controls.

**Optimize & Communicate**  
Iterate on the feature store to cache frequently used features, use caching layers (Delta Cache) for inference speed. Explain trade‑offs: more compute for lower latency vs. cost; stricter schema enforcement reduces drift but adds operational overhead. Summarize that a well‑structured Databricks architecture balances scalability, reproducibility, and low‑latency serving—exactly what FAANG teams look for in modern ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
