---
qid: ing_020fc3e9fa__star__local
question: 'Explain: Advanced Questions (December 2025) — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:32-05:00'
sources: []
---

**Situation** – In early 2025 I was leading the migration of our legacy fraud‑detection pipeline from a rule‑based system into an AI‑driven model. The existing system processed about 1 M transactions per day, but its false‑positive rate had ballooned to 12%, causing customer churn and manual review bottlenecks.

**Task** – My goal was to design and deploy a machine‑learning solution that cut the false positives by at least 50% while keeping latency under 200 ms so we could still flag transactions in real time.

**Action** – I first gathered an end‑to‑end data audit, using Spark to clean over 500 GB of transaction logs and extract engineered features (IP geolocation, device fingerprinting, temporal patterns). I built a LightGBM ensemble tuned via Optuna for hyperparameters, then wrapped it in a TensorFlow Serving model so we could scale horizontally on Kubernetes. To meet the latency requirement, I introduced a two‑stage inference: a lightweight LSTM prefilter that routed only suspicious cases to the full model. I also set up A/B testing with an automated rollback script in Argo Workflows.

**Result** – The new pipeline reduced false positives from 12% to 5%, boosting throughput by 30 M transactions/day and saving the business roughly $1.8 million annually in manual review costs. I learned that balancing model complexity with system constraints often requires creative staging, and that continuous monitoring (Prometheus + Grafana) is essential for sustaining performance after deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
