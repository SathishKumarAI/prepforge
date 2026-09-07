---
qid: ing_15d295a88c__faang__local
question: 'Explain: Architecture in brief'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 414
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:50-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *brief* explanation of “architecture” in machine‑learning systems—i.e., how data flows from ingestion to inference and how components are organized.

**Approach**  
1. **Data layer** – raw collection, storage (S3/BigQuery).  
2. **Feature engineering** – transformation pipelines (Spark/Databricks).  
3. **Model training** – distributed frameworks (TensorFlow‑On‑K8s, PyTorch‑Lightning).  
4. **Serving** – model registry → inference API (TF‑Serving or custom microservice).  
5. **Monitoring & governance** – drift detection, logging, audit.

**Depth**  
- *Data ingestion*: streaming (Kafka) vs batch (Flink).  
- *Feature store*: real‑time and offline tables, versioning via Delta Lake.  
- *Training*: use GPU clusters; auto‑scaling with Ray or Kubeflow Pipelines; MLOps CI/CD.  
- *Serving*: containerized model + request routing; latency <10 ms for high‑traffic services.  
- *Observability*: A/B testing, metrics (precision@k), explainability dashboards.

**Edge Cases**  
- Non‑tabular data (images/text) → dedicated feature extraction stages.  
- Regulatory constraints → on‑prem or private cloud deployments.  
- Model drift in production → continuous evaluation and automated retraining triggers.

**Optimize & Communicate**  
I’d emphasize modularity: decouple ingestion, training, serving so teams can iterate independently. For high‑scale systems, discuss using model compression (quantization) to reduce latency. I would narrate this as a layered pipeline, highlighting data flow and failure isolation, which demonstrates clear, structured thinking—a key FAANG signal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
