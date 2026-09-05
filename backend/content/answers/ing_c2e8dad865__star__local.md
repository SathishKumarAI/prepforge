---
qid: ing_c2e8dad865__star__local
question: 'Explain: Packages — GitHub - Arize-ai/phoenix: AI Observability & Evaluation
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 381
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:37-05:00'
sources: []
---

**Situation**  
At a fast‑growth fintech, we had just rolled out a fraud‑detection model into production. Within the first week, the model’s precision dropped from 94 % to 82 %, and our alerting system was generating false positives that clogged downstream ops.

**Task**  
I needed to quickly surface where the degradation came from, quantify its impact on user experience, and set up a continuous observability pipeline so we could detect future drifts before customers noticed.

**Action**  
I introduced **Arize‑AI’s Phoenix** from GitHub. First, I cloned the repo and installed it in our staging environment with Docker Compose, connecting it to our existing Kafka data stream and Snowflake warehouse. Using Phoenix’s `model_evaluator` module, I defined a set of evaluation metrics (AUROC, lift charts) and enabled automatic feature‑level drift detection via its built‑in statistical tests. I then wrote a lightweight Python script that pulled live predictions from the model endpoint, stored them in Arize’s schema, and scheduled nightly runs with Airflow. Phoenix automatically generated dashboards in Grafana showing real‑time precision, recall, and drift alerts.

**Result**  
Within 48 hours we identified that a recent change to the feature engineering pipeline had introduced a bias against high‑value customers. We rolled back the update, re‑trained the model, and restored precision to 93 %. The Phoenix dashboards reduced our incident response time by 70 %, and the team now has a single source of truth for model health that scales as we add more models. I learned that open‑source observability tools like Arize’s Phoenix can turn raw data streams into actionable insights without reinventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
