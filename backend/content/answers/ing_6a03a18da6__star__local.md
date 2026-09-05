---
qid: ing_6a03a18da6__star__local
question: 'Explain: GPU Serving example — TensorFlow Serving with Docker \u00a0|\u00a0
  TFX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 360
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:29-05:00'
sources: []
---

**Situation** – In my last role, we had a production recommendation engine that was lagging behind our latency SLA by ~30 ms during peak traffic on the “Summer Sale” campaign. The model was a TensorFlow graph trained with TFX pipelines and served via TensorFlow Serving in Kubernetes.

**Task** – I needed to cut inference latency below 10 ms per request while keeping CPU usage under 70% so that we could scale horizontally without incurring extra cost.

**Action** – First, I containerized the model using Docker, pinning a CUDA‑enabled base image (nvidia/cuda:11.8) and installing TensorFlow Serving with GPU support. I built a lightweight entrypoint that loads the SavedModel into GPU memory at startup, leveraging `--gpu_memory_fraction=0.5` to balance memory usage across multiple pods. Then, I modified the TFX pipeline’s model‑export step to generate an optimized `SavedModelBundle` using TensorRT conversion (`tf.experimental.tensorrt`) to accelerate kernels. In Kubernetes, I deployed a StatefulSet with the NVIDIA device plugin and set pod affinity to ensure each pod got its own GPU. Finally, I added Prometheus metrics and Grafana dashboards to monitor per‑request latency and GPU utilization in real time.

**Result** – Latency dropped from 30 ms to 8 ms on average during traffic spikes, CPU usage fell to 45%, and we reduced the number of required replicas by 40%. The exercise taught me how Docker, TensorFlow Serving, and TFX work together for GPU‑accelerated inference, and reinforced the importance of monitoring to validate performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
