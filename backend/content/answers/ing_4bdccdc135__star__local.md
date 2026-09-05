---
qid: ing_4bdccdc135__star__local
question: 'Explain: Software Engineer, Agent - Insurance — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 334
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:06-05:00'
sources: []
---

**Situation:**  
I was hired by a fintech startup that had built an AI‑driven insurance quoting engine for independent agents. The product promised instant quotes but the accuracy lagged behind competitors, and customer churn rose to 18 % in Q2.

**Task:**  
My goal was to improve the predictive model’s precision while keeping latency under 300 ms so agents could close deals on the fly. I also needed a retraining pipeline that could ingest new policy data daily without downtime.

**Action:**  
I first profiled the existing XGBoost model and identified feature leakage in claim history. I redesigned the feature set, added engineered variables like “time since last claim” and used CatBoost for categorical handling. For deployment, I containerized the model with Docker and orchestrated it via Kubernetes, exposing a REST endpoint behind an Envoy proxy to enforce 300 ms SLAs. To automate updates, I built a CI/CD pipeline in GitHub Actions that triggered nightly retraining on a Spark cluster; the new models were validated against a hold‑out set before a blue‑green rollout.

**Result:**  
Accuracy improved from 68 % to 84 %, reducing churn by 12 %. The inference latency stayed below 280 ms, meeting SLA. I learned that balancing model complexity with deployment constraints is critical in high‑frequency insurance workflows and that automated retraining pipelines are essential for maintaining relevance in dynamic markets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
