---
qid: ing_b51bb20a93__star__local
question: 'Explain: Data science steps for ML — MLOps: Continuous delivery and automation
  pipelines in machine learning \u00a0|\u00a0 Cloud Architecture Center \u00a0|\u00a0
  Google Cloud Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 320
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:50-05:00'
sources: []
---

**Situation** – At my previous company we were launching a recommendation engine for our e‑commerce platform. The model needed daily retraining on fresh clickstream data, and any lag in production meant stale recommendations and lost revenue.

**Task** – I had to build an end‑to‑end MLOps pipeline that automated data ingestion, training, validation, packaging, and deployment, all while keeping drift alerts and rollback capabilities.

**Action** – First, I set up a Cloud Composer DAG to pull new logs from Pub/Sub into BigQuery nightly. Using Vertex AI Pipelines, I scripted the training job with AutoML tables, adding a custom evaluation step that ran on a separate GPU cluster. The trained model was versioned in Artifact Registry and automatically pushed to a Kubernetes‑managed TensorFlow Serving container via Cloud Build triggers. For continuous delivery, I configured a Spinnaker pipeline that rolled out new containers only after passing A/B test metrics (precision@10 > 0.12). We also added Cloud Monitoring alerts for latency spikes or data drift.

**Result** – Deployment time dropped from weeks to under an hour, allowing us to iterate 4× faster. Accuracy improved by 7%, and we reduced manual ops hours by 60 %. I learned that tight integration of GCP services—Composer, Vertex AI, Artifact Registry, Spinnaker—is key for scalable MLOps at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
