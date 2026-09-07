---
qid: ing_a2d385c984__faang__local
question: 'Explain: Get started ​ — MLflow 3 for GenAI | Databricks on AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 570
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:18-05:00'
sources: []
---

**Clarify**  
The ask is a quick walkthrough of how to bootstrap an AI project using **MLflow 3** (the latest GenAI‑ready release) on **Databricks running on AWS**. I’ll assume the team has a Databricks workspace, IAM permissions for S3/ECR, and a basic understanding of MLflow’s tracking/experiment concepts.

**Approach**  
1. Spin up a new *GenAI* cluster (spark‑ml‑genai) in Databricks.  
2. Install the `mlflow` package via `%pip install mlflow==3.*`.  
3. Configure MLflow to use the Databricks backend store (`--backend-store-uri=databricks`).  
4. Enable the new *Model Registry* UI and the GenAI “Prompt” logging feature.  
5. Create a simple notebook that loads a HuggingFace model, logs prompts/outputs as `mlflow.log_input`/`log_output`, and registers the model.

**Depth**  
- **Cluster setup**: use the pre‑built *Databricks Runtime 14.1 GenAI* image; it bundles Spark 3.5, MLflow 3, and GPU drivers.  
- **MLflow config**: `mlflow.set_tracking_uri("databricks")` auto‑points to the workspace’s DBFS store; experiments default to a new folder under `/Users/<user>/`.  
- **Prompt logging**: `mlflow.log_input(name="prompt", input_data=prompt_text)` captures raw text, while `log_output` stores embeddings or token counts. The UI shows a “Prompt” tab per run.  
- **Model registration**: after inference, call `model = mlflow.pyfunc.load_model("runs:/<run_id>/model")`; then `mlflow.register_model(...)`.  

**Edge Cases**  
- Missing GPU drivers → fallback to CPU cluster; performance drops sharply.  
- IAM policy lacking S3 write access → MLflow registry fails at commit time.  
- Prompt size > 4k tokens → truncated logs, causing downstream evaluation errors.

**Optimize & Communicate**  
To scale, leverage **MLflow Projects** for reproducibility and **Databricks Jobs** for scheduled retraining. I’d narrate that MLflow 3’s GenAI integrations reduce boilerplate: prompt logging is native, the registry auto‑tags embeddings, and the Databricks Runtime ensures low‑latency GPU inference—all wrapped in a single command line (`mlflow run .`). This gives us rapid prototyping, auditability, and production readiness on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
