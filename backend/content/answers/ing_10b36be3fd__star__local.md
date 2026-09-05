---
qid: ing_10b36be3fd__star__local
question: 'Explain: Interview questions — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 325
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:57-05:00'
sources: []
---

**Situation:** While leading a data‑science team at a fintech startup, we were rolling out a real‑time fraud detection model that had been performing well in our staging environment but was lagging behind the 50 ms latency SLA required for live transaction processing.

**Task:** I needed to move the inference pipeline from a CPU‑bound Jupyter notebook prototype into a production‑ready microservice that could serve predictions under the strict latency constraints, all while ensuring model accuracy and maintainability.

**Action:** First, I refactored the model code into a stateless Flask app and containerized it with Docker. To shave latency, I switched from scikit‑learn to ONNX Runtime on GPU, quantizing the model weights to 8‑bit integers. I introduced a Redis cache for feature pre‑processing results and used Kubernetes Horizontal Pod Autoscaler to scale pods based on queue depth. For observability, I instrumented Prometheus metrics (latency, error rate) and set up Grafana dashboards. Finally, I automated the CI/CD pipeline with GitHub Actions to run unit tests, model drift checks, and deploy new container images.

**Result:** The production inference latency dropped from 320 ms to 42 ms, meeting the SLA. Transaction throughput increased by 35%, reducing false‑positive fraud flags by 12%. I learned that balancing model fidelity with hardware acceleration and robust observability is key to successful AI deployment at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
