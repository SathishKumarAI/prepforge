---
qid: ing_2d4f7151ab__faang__local
question: 'Explain: Problem Exploration (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 537
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:28:35-05:00'
sources: []
---

**Problem Exploration – ML System Design (5‑min)**  

| Step | What to Cover | Why It Matters |
|------|---------------|----------------|
| **Clarify** | *Restate the goal:* “Design a production‑grade machine‑learning pipeline that ingests data, trains models, and serves predictions at scale.”  Ask clarifying questions: input volume (batch vs. streaming), latency targets for inference, retraining frequency, SLAs, data privacy constraints, and any domain‑specific requirements (e.g., fraud detection). | Ensures you’re solving the right problem and surface constraints that shape architecture choices. |
| **Approach** | 1️⃣ Define data ingestion & storage (Kafka → S3/Delta Lake). 2️⃣ Feature store (feature registry + real‑time cache). 3️⃣ Training workflow (Airflow + Spark / MLFlow). 4️⃣ Model serving (TensorRT/TF‑Serving in Kubernetes). 5️⃣ Monitoring (metrics, drift detection) and CI/CD for models. | Gives interviewers a roadmap; shows you think end‑to‑end. |
| **Depth** | *Data layer:* use schema registry, lineage, and versioned tables. <br>*Feature store:* cache with low‑latency (Redis), batch feature recompute daily. <br>*Training:* distributed training on GPUs, hyperparameter tuning with Optuna. <br>*Serving:* autoscaling pods, canary releases via Istio. <br>*Monitoring:* Prometheus for latency, AUC drift alerts; retrain triggers when drift > threshold. | Demonstrates knowledge of modern ML ops tooling and trade‑offs (batch vs. online features). |
| **Edge Cases** | • Data spikes → autoscale ingestion workers.<br>• Feature drift → fallback to last‑known good model.<br>• Model poisoning attacks → data validation, secure key management.<br>• GDPR: request‑to‑delete feature records. | Shows you anticipate failures and have mitigation plans. |
| **Optimize & Communicate** | • Batch‑first training reduces compute cost; online inference only for high‑traffic entities. <br>• Cache popular predictions to cut latency. <br>Explain trade‑offs (e.g., batch vs. real‑time features) and justify choices with SLAs/Cost. | Closing loop: you’ve balanced performance, reliability, and maintainability while clearly articulating reasoning. |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
