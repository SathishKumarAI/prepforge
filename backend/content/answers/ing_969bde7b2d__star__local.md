---
qid: ing_969bde7b2d__star__local
question: 'Explain: Running the Workflow — Introduction | Developer Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 391
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:13-05:00'
sources: []
---

**Situation**  
I was leading a fraud‑detection team at a fintech startup. Our model had just hit production readiness after a month of experimentation, but the data scientists kept hitting “data not found” errors when we tried to launch the pipeline on the staging cluster.

**Task**  
My goal was to set up a repeatable, end‑to‑end workflow that would pull nightly raw feeds, run feature engineering, train the XGBoost model, evaluate metrics, and push the artifact to S3 for the inference service—all without manual intervention.

**Action**  
I chose Airflow for orchestration because of its DAG visualization and retry logic. I containerized each step with Docker (Python 3.10 + pandas, scikit‑learn, XGBoost) so environment drift was eliminated. The DAG started with a BashOperator that pulled the latest CSVs from an SFTP server into an EFS volume; then a PythonOperator executed a feature‑store script that cached embeddings in Redis for downstream tasks. Training ran inside a Kubernetes pod with GPU access, and I used MLflow to log parameters, metrics (AUC 0.87), and the model signature. Finally, a BashOperator uploaded the serialized model to an S3 bucket and triggered a Lambda to refresh the inference endpoint.

**Result**  
The pipeline now runs automatically every midnight with <5 minutes of runtime overhead. We reduced deployment errors by 95%, cut manual data‑prep time from hours to minutes, and gained real‑time visibility into model drift through Airflow’s SLA alerts. I learned that investing in a lightweight container strategy coupled with an orchestrator like Airflow pays off fast when you need reproducibility at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
