---
qid: ing_65243b5fc2__star__local
question: 'Explain: Uh we also run something I''m not — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 324
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:50-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team on the new Ads Recommendation engine, we had to shift from a monolithic training pipeline to a distributed microservice architecture that could scale to 10 M daily ad requests.

**Task** – My goal was to design an end‑to‑end system that reduced model retraining latency by 70% and ensured zero data drift over continuous deployment cycles, all while keeping cost under $200k/month.

**Action** – I first mapped the legacy pipeline into a DAG using Kubeflow Pipelines, then refactored each stage into stateless services on GKE. We introduced TensorFlow Serving for model inference, added a Pub/Sub queue for feature ingestion, and implemented Canary releases with Istio’s traffic mirroring to test new models against live traffic. To guard against drift, we built an automated monitoring stack (Prometheus + Grafana) that triggers alerts when feature distributions shift beyond 2σ, feeding back into the retraining loop.

**Result** – The new system cut inference latency from 1.2 s to 0.4 s and lowered monthly compute spend by 35%. We achieved a 99.8% success rate for live A/B tests with no downtime. This experience taught me that scaling ML workloads at Google hinges on treating models as first‑class services, automating observability, and rigorously validating drift before production rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
