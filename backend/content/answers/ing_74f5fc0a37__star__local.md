---
qid: ing_74f5fc0a37__star__local
question: 'Explain: Creating your own serving image — TensorFlow Serving with Docker
  \u00a0|\u00a0 TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 337
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:40-05:00'
sources: []
---

**Situation** – At my last startup we had a recommendation model that was producing predictions in real time for over 5 M users per day, but the latency on our production cluster kept spiking after each new training run because we were still using the legacy TensorFlow Serving Docker image.

**Task** – I needed to build a lightweight, reproducible serving container that incorporated our custom model format (SavedModel with an additional preprocessing layer) and could be deployed via Kubernetes without manual registry pushes.

**Action** – First I forked the official `tensorflow/serving` Dockerfile and added a minimal Python script (`serve.py`) that loads the SavedModel from S3, applies the preprocessing TensorFlow graph, and exposes a gRPC endpoint. I used multi‑stage builds: a build stage with `conda` to install exact protobuf and grpcio versions, then copied only the compiled binaries into a slim Debian base image. I also baked in health checks and a `prometheus_client` exporter for latency metrics. Finally, I wrote Helm charts that reference the custom image tag and auto‑roll out when a new model version is pushed.

**Result** – The new serving image cut average inference time from 120 ms to 65 ms (≈ 46 % reduction) and reduced CPU usage by ~30 %. Deployment times dropped from 10 min to under 2 min, enabling us to push weekly model updates without downtime. I learned the importance of container immutability and exposing observability hooks early in the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
