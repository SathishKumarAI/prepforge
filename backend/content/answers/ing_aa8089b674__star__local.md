---
qid: ing_aa8089b674__star__local
question: 'Explain: So the hybrid solution is essentially horizontal'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 348
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:38-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were launching a fraud‑detection product for mobile payments. The existing rule‑based engine was catching about 70 % of fraudulent transactions, but the new data science team had built an ML model that could lift detection to ~90 %. However, the model required real‑time scoring and couldn’t be deployed in our legacy monolith without breaking latency SLA.

**Task** – I needed to design a hybrid architecture that would let us run the ML inference side‑by‑side with the existing rule engine, keeping end‑to‑end response under 200 ms while allowing gradual rollout of new model features.

**Action** – I chose a horizontal microservice pattern: spun up a stateless Go service exposing a gRPC endpoint for model scoring, containerized it with Docker and deployed via Kubernetes. The service used TensorFlow Serving to load the SavedModel, and we added an async Kafka queue for batch‑learning updates. We implemented feature flags in our front‑end so traffic could be split 70/30 between rule engine and ML service. I wrote Prometheus metrics to monitor latency and accuracy per split, and set up a CI/CD pipeline that automatically retrained the model on new data every night.

**Result** – Within two weeks we saw fraud detection rise from 70 % to 86 %, while keeping average latency at 180 ms. The system also allowed us to A/B test feature importance without downtime. I learned how horizontal scaling, containerization, and observability can make ML models production‑ready in a legacy environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
