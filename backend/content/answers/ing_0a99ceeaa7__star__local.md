---
qid: ing_0a99ceeaa7__star__local
question: 'Explain: Running a GPU serving image — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 406
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:04-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with deploying a computer‑vision model that had just hit production on our in‑house GPU cluster. The team used TensorFlow Serving but we were running into latency spikes when scaling up to 8 GPUs per node; the Docker images kept pulling and re‑building, causing downtime.

**Task**  
I needed to create a lightweight, reproducible GPU‑enabled serving image that would start within seconds, stay stable under load, and integrate seamlessly with our TFX pipeline for continuous model updates.

**Action**  
First, I forked the official `tensorflow/serving` Dockerfile and added a multi‑stage build: the base stage used `nvidia/cuda:11.8-cudnn8-runtime-ubuntu20.04`, then I installed TensorFlow 2.13 and `tfx-serving`. I baked in our model’s SavedModel directory into `/models/your_model` using a COPY instruction, ensuring no runtime pulls. For TFX integration, I exposed the `TFX_SERVING_MODEL_PATH` env var so that each new pipeline run could overwrite the model without rebuilding the image. Finally, I added a health‑check script that pinged the `/v1/models/your_model` endpoint and tuned the container’s CPU shares to 2 cores, freeing more resources for GPU work.

**Result**  
The new Docker image booted in under 3 seconds versus the previous 18, cutting deployment time by 83%. Under a load test of 5,000 requests per second, latency dropped from 350 ms to 120 ms, and we saw no more GPU‑idle spikes. I learned that keeping the serving container lean—only the runtime, TensorFlow, and TFX libs—and using multi‑stage builds is key for fast, reliable GPU inference in a CI/CD pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
