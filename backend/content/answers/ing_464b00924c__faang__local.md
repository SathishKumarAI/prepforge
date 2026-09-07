---
qid: ing_464b00924c__faang__local
question: 'Explain: Step 2: Plan Before You Code — AI Coding Workflow - by Neo Kim
  and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 448
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:26-05:00'
sources: []
---

**Step 2: Plan Before You Code – AI Coding Workflow (Neo Kim & Louis‑François Bouchard)**  

| **Signal Score Element** | **What I’d Say** |
|---------------------------|------------------|
| **Clarify** | “We’re building an end‑to‑end ML pipeline that ingests raw data, trains a model, and deploys it for inference. Assumptions: production latency < 200 ms, data volume ~10k rows/day, we have GPU resources on cloud.” |
| **Approach** | 1️⃣ *Data prep*: define schemas, ETL scripts, validation rules.<br>2️⃣ *Feature engineering*: automated feature store + manual selection.<br>3️⃣ *Model training*: experiment tracking (MLflow), hyper‑parameter search.<br>4️⃣ *Evaluation*: holdout test, A/B metrics, drift detection.<br>5️⃣ *Deployment*: containerize with Docker, CI/CD via GitHub Actions, serve with TensorFlow Serving or TorchServe.<br>6️⃣ *Monitoring*: log predictions, monitor latency & accuracy. |
| **Depth** | Use lazy‑loaded tensors to avoid OOM, batch inference to amortize GPU cost, and versioned model artifacts in S3. Complexity: training ≈ O(n·m) where n = data points, m = features; inference ≈ O(m). Trade‑offs: eager vs lazy loading; single‑GPU vs multi‑GPU. |
| **Edge Cases** |  • Missing or corrupted rows → fallback defaults.<br>• Concept drift → retrain schedule.<br>• Scaling spike → auto‑scale GPU pods. Testing: unit tests for ETL, integration tests for end‑to‑end pipeline, load tests for inference latency. |
| **Optimize & Communicate** | “We’ll start with a minimal reproducible example, then iterate on feature importance and hyper‑parameters. I’ll document each step in the repo README so stakeholders can see provenance.” |

*Word count: ~180 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
