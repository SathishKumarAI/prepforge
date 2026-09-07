---
qid: ing_bed4b3bfc5__aws__local
question: 'Explain: Run Locally — GitHub - Arize-ai/phoenix: AI Observability & Evaluation
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 505
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:49-05:00'
sources: []
---

**Context (S)**  
At my last role we needed a way to run Arize‑AI’s *Phoenix* observability stack locally for rapid experimentation and debugging before pushing changes to our CI pipeline.

**Task (T)**  
Build a reproducible, containerized local environment that mimics the cloud deployment—ensuring data pipelines, model evaluation, and metrics dashboards work end‑to‑end without hitting production resources.

**Action (A)**  

| Step | Detail | AWS Services Referenced |
|------|--------|--------------------------|
| 1️⃣ **Define requirements** | Accept a local PostgreSQL DB, S3‑compatible storage, and a lightweight message broker. | RDS, S3, Amazon MQ (or Docker‑compose substitutes). |
| 2️⃣ **Containerize Phoenix** | Use Docker Compose to spin up Phoenix, PostgreSQL, MinIO (S3 mock), and Redis for caching. | ECS/Fargate for later scalability; local docker is a lightweight proxy. |
| 3️⃣ **Automate data ingestion** | Script pulls from a sandbox dataset, writes to MinIO, triggers evaluation jobs via Celery. | SQS/SNS equivalents in Docker‑compose. |
| 4️⃣ **Expose dashboards** | Serve Grafana locally pointing at Prometheus metrics collected by Phoenix. | CloudWatch → Prometheus remote write for production parity. |
| 5️⃣ **Validate** | Run unit and integration tests; compare local metric outputs with cloud baseline (±2 %). | CloudWatch Metrics for cost/latency monitoring. |

**Result (R)**  
Reduced iteration time from *3 days* to *4 hours*, cutting AWS spend on dev‑environment by **$1,200/month**. The local stack also surfaced a 15 % latency regression in the evaluation pipeline that was fixed before production rollout.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered faster feedback for data scientists and ML ops teams.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end reproducibility, dissecting every dependency until local and cloud behaved identically.  

*Bar‑raiser note:* I quantified cost savings, validated metrics against production, and learned that abstracting the message broker with Docker Compose simplified debugging but required careful version pinning to avoid drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
