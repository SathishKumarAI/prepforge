---
qid: ing_06fe082896__faang__local
question: 'Explain: 🏗️ AI System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 530
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:43-05:00'
sources: []
---

**🏗️ AI System Design – Structured FAANG‑style Answer**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem:* Build a production‑grade system that ingests raw data → trains an ML model → serves predictions with low latency. <br>*Assumptions to confirm:* 1) Scale (users per second, data volume). 2) Latency target (<10 ms inference). 3) Model complexity (linear vs deep). 4) Data freshness requirement (batch vs streaming). |
| **Approach** | 1️⃣ **Data Layer** – Kafka + S3 for ingestion; Spark/Beam for batch ETL. <br>2️⃣ **Feature Store** – Redis/Cassandra cache + a feature store like Feast for real‑time lookup. <br>3️⃣ **Model Training** – Dockerized pipelines on Kubeflow, automated hyper‑parameter search (Optuna). <br>4️⃣ **Serving Layer** – TensorFlow Serving or TorchServe behind an Envoy gRPC gateway; autoscale via K8s HPA. <br>5️⃣ **Observability** – Prometheus + Grafana for latency/throughput; MLflow for experiment tracking. |
| **Depth** | • Use **online‑offline split learning** to keep fresh features in memory, batch features on disk. <br>• For inference, batch requests into a 10 ms window to amortize GPU load (GPU‑accelerated serving). <br>• Complexity: Ingestion O(1) per event; training O(n log n); inference O(1) with batching. <br>• Trade‑off: Cache hit rate vs memory cost; batch size vs latency. |
| **Edge Cases** | • Data drift → retrain trigger via A/B testing and drift alerts.<br>• Feature outage → fallback to last known good feature set.<br>• Model poisoning → input validation & secure model signing. |
| **Optimize & Communicate** | *Improvements:* 1) Use model compression (quantization, distillation) for edge devices. 2) Adopt serverless inference (AWS Lambda + SageMaker endpoints) to cut idle costs. <br>*Narrative:* I’d start with a minimal viable pipeline, instrument every layer, then iterate on latency budgets and cost‑efficiency, always keeping the data‑to‑prediction path transparent for stakeholders.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
