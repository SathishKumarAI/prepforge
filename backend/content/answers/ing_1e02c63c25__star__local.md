---
qid: ing_1e02c63c25__star__local
question: 'Explain: Right now it''s more like 70 or — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 360
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:50-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team on the new recommendation engine for YouTube Shorts, we hit a wall: our model training pipeline was taking 48 hours to churn out a new version, and the latency of serving the updated model in production was unacceptable for real‑time user experience.  

**Task** – I needed to cut both training time and inference latency so that we could push updates every 6 hours without sacrificing accuracy or reliability.

**Action** – First, I introduced a data‑driven micro‑service architecture: each pipeline stage became an independent container orchestrated by Kubernetes, allowing us to parallelize preprocessing and feature extraction across 200+ nodes. I swapped our monolithic TensorFlow graph for a lightweight ONNX runtime that could run on GPUs and CPUs alike, reducing inference time from 120 ms to 30 ms per request. To keep the models fresh, we set up an automated A/B testing framework with real‑time drift detection; any significant drop in precision triggered an automatic rollback. Finally, I instituted a “canary” deployment strategy that rolled updates to 1% of traffic before full rollout, ensuring system stability.

**Result** – Training time dropped from 48 hours to under 2 hours, and inference latency fell by 75 %. The updated pipeline increased recommendation click‑through rate by 18 %, while maintaining a 99.7 % uptime during rollouts. I learned that micro‑services, container orchestration, and continuous validation are essential for scaling ML at Google’s scale, turning experimentation into a reliable, production‑grade process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
