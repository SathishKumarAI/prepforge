---
qid: ing_3b6d340bee__aws__local
question: 'Explain: Passing additional arguments — TensorFlow Serving with Docker
  \u00a0|\u00a0 TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 546
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:40-05:00'
sources: []
---

**Situation**  
I led the migration of our recommendation model from a legacy Flask API to **TensorFlow Serving (TFS) on ECS**, while integrating with **TFX pipelines** for automated retraining. The model required custom inference logic (e.g., dynamic feature scaling) that had to be configurable at runtime.

**Task**  
Expose additional arguments (model‑specific hyper‑parameters, preprocessing flags) without redeploying the container image or changing the TFS code base, and ensure the change scales to 10k concurrent requests with <200 ms latency.

**Action**  
1. **Docker & TFS** – Built a lightweight `tensorflow/serving` image and mounted a read‑only `/config` volume for JSON configs.  
2. **Custom Model Wrapper** – Implemented a `tf_serving_wrapper.py` that reads the config at start‑up, injects arguments into the serving signature via `tf.function(input_signature=…)`, and registers the endpoint with the TFS REST API.  
3. **TFX Integration** – Added a **PipelineComponent** (`ConfigGenerator`) that pulls feature flags from DynamoDB, writes them to `/config/config.json`, and triggers the `ModelTrainer` component. The trainer outputs a new model tarball; ECS task definitions are updated via CodeDeploy, rolling over with zero downtime.  
4. **Scalability & Cost** – Used **Application Load Balancer** + **ECS Service Auto‑Scaling** on CPU/Memory metrics. Spot instances reduced hosting cost by 35 %.  

**Result**  
- Latency stayed <180 ms for 10k QPS; SLA uptime 99.9 %.  
- Deployment time dropped from 30 min to 5 min, enabling 4× more model iterations per week.  
- Config changes now trigger a single pipeline run (≈2 min), eliminating manual redeploys.

**Learnings**  
Ownership: I took full responsibility for the end‑to‑end flow and documented it in Confluence.  
Dive Deep: Profiling showed that reading configs from S3 added 12 ms; switching to local `/config` dropped latency by 8 %.  
Bar‑raiser focus: The solution balances **Customer Obsession** (fast, reliable predictions) with **Ownership** (end‑to‑end automation) and demonstrates measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
