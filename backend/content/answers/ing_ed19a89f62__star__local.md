---
qid: ing_ed19a89f62__star__local
question: 'Explain: Ramp System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 362
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:54-05:00'
sources: []
---

**Situation**  
At my last job I was asked to build a new recommendation “ramp” pipeline for the mobile app’s content feed. The existing system served millions of users per day but had a stale model that lagged by over 48 hours, hurting engagement metrics (CTR dropped from 4.8% to 3.9%).

**Task**  
I needed to design an end‑to‑end ramp system that could ingest new user interaction data in real time, retrain the ranking model every 12 hours, and deploy updated weights with zero downtime while keeping latency under 50 ms per request.

**Action**  
- Built a Kafka topic for clickstream events and used Flink to window them into 15‑minute batches.  
- Implemented an Airflow DAG that triggered a PyTorch training job on GKE; the model was trained on GPU nodes, then exported as a TensorFlow Lite bundle.  
- Deployed the bundle to a Kubernetes rollout with a blue/green strategy and used Istio’s traffic splitting to shift 5% of traffic to the new model for A/B testing before full cutover.  
- Added a Prometheus alert that automatically rolled back if latency exceeded threshold or precision dropped <1%.

**Result**  
Within two weeks, the new ramp system reduced model staleness from 48 hours to under 12 hours, lifted CTR by 22% (to 4.7%), and maintained <45 ms latency. I learned how to balance real‑time ingestion with batch training and that gradual traffic shifting is key to safe deployment at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
