---
qid: ing_1545c000e0__faang__local
question: 'Explain: Technical Stacks for Full-Stack Development'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 544
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:35-05:00'
sources: []
---

**Clarify**

The interviewer asks how a full‑stack engineer can build ML‑enabled applications.  
Assumptions I’d confirm:  
1. The stack must support data ingestion, model training, inference and UI delivery.  
2. Performance, scalability and ease of deployment are priorities.  

**Approach**

1. **Data layer** – ingest & store raw data.  
2. **Model layer** – train & serve models.  
3. **API/Backend** – expose ML predictions to the front end.  
4. **Frontend** – render results interactively.

**Depth**

| Layer | Typical Stack | Rationale |
|-------|---------------|-----------|
| Data | **Kafka / Pub/Sub** → **AWS S3 / GCS** → **Snowflake / BigQuery** | Streaming + durable storage; columnar DB for fast analytics. |
| Training | **Python** (pandas, scikit‑learn) or **PyTorch/TensorFlow** in a **Jupyter** notebook or **MLflow** experiment tracker. | Rich ML ecosystem; MLflow manages reproducibility and packaging. |
| Serving | **TensorFlow Serving / TorchServe** inside a **Kubernetes** cluster (or serverless via Cloud Run). | Low‑latency inference, autoscaling, easy rollout of new versions. |
| Backend API | **FastAPI / Express.js** + **GraphQL** for flexible queries. | Lightweight, async I/O; GraphQL reduces over‑fetching. |
| Frontend | **React** (hooks) + **Next.js** (SSR/SSG). | Declarative UI, server‑side rendering for SEO and faster first paint. |
| DevOps | **Terraform / Pulumi** + **GitHub Actions** → CI/CD pipelines. | IaC ensures reproducible environments; pipelines automate tests & deployments. |

**Edge Cases**

- *Model drift*: add monitoring (Prometheus) and retraining triggers.  
- *Large‑scale inference*: shard requests or use GPU nodes.  
- *Data privacy*: encrypt at rest in S3/GCS, enforce IAM roles.

**Optimize & Communicate**

Explain trade‑offs: serverless reduces ops but may incur cold‑start latency; Kubernetes gives control but adds complexity. Highlight how each component scales horizontally and why the chosen stack aligns with FAANG’s high‑traffic, low‑latency requirements. End by summarizing that this modular architecture lets teams iterate on ML models without touching the UI, accelerating time to market.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
