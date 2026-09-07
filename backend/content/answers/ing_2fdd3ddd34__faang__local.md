---
qid: ing_2fdd3ddd34__faang__local
question: 'Explain: Databricks — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:34:40-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* A candidate for a ML role at a FAANG company is asked: “Explain how you’d use Databricks for a production‑grade ML pipeline.”  
Assumptions to confirm:  
- The data resides in a cloud warehouse (S3/ADLS).  
- We need end‑to‑end ETL, feature store, training, and model serving.  
- Team size is small; we want rapid experimentation with reproducibility.

**2️⃣ Approach**  
1. Ingest raw data into Delta Lake tables via Structured Streaming or batch jobs.  
2. Use **Databricks Feature Store** to version & serve features.  
3. Train models in MLflow‑managed notebooks, log metrics/params, and store artifacts.  
4. Package the best model as a Docker image using **MLflow Projects** and deploy it on **Databricks Jobs** or an external Kubernetes cluster.  

**3️⃣ Depth**  
- *Delta Lake* guarantees ACID transactions, schema evolution, and time‑travel for reproducible experiments.  
- *Feature Store* centralizes feature lineage; you can query features with Spark SQL or via REST APIs in real time.  
- *MLflow* tracks runs (Python, Scala, R), auto‑logs hyperparameters, and integrates with Hyperopt/Optuna for tuning.  
- Deployment: use **Databricks Jobs** to schedule inference pipelines; alternatively, expose the model through a **REST endpoint** on an Azure/AWS Lambda container.  

Complexity:  
- Ingestion O(n) per batch; training cost depends on cluster size; serving latency <10 ms if cached.  
Trade‑offs: larger clusters speed up training but increase cost; feature store adds overhead but saves engineering time.

**4️⃣ Edge Cases**  
- Schema drift → Delta Lake schema enforcement.  
- Cold start for inference → pre‑warm containers.  
- Data skew in Spark joins → salting or repartitioning.

**5️⃣ Optimize & Communicate**  
Explain how to monitor with Databricks dashboards, set up alerts on MLflow metrics, and use CI/CD pipelines (GitHub Actions) to push new models automatically. Highlight that this stack scales from 10 k rows to petabytes while keeping reproducibility and observability intact—exactly what FAANG teams demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
