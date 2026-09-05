---
qid: ing_f39e0712e8__star__local
question: 'Explain: Frameworks and Drivers. — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 342
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:14-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a fraud‑detection model that had to process millions of transactions per day. The data pipeline was built on Spark, but our inference engine was a custom C++ library that ran inside a Docker container on Kubernetes.

**Task** – I needed to make the whole stack reproducible and scalable while keeping latency under 50 ms for each prediction. That meant selecting the right ML framework for training, choosing the right driver for deployment, and integrating them without breaking our CI/CD pipeline.

**Action** – I chose TensorFlow‑Serving as the inference driver because it natively supports GPU acceleration and has a REST/GRPC API that fits our microservice architecture. For training I used PyTorch Lightning to simplify distributed training on 8 A100 GPUs; its modular hooks let me log metrics directly to MLflow, which we had already adopted for experiment tracking. I wrapped the Torch model in ONNX format so it could be loaded by TensorFlow‑Serving with minimal overhead. Finally, I built a Helm chart that bundled the Docker image, autoscaling rules, and Prometheus metrics.

**Result** – The new pipeline cut inference latency from 120 ms to 35 ms while keeping CPU usage below 20 %. We also reduced training time by 40 % thanks to Lightning’s automatic checkpointing. I learned that choosing a framework is just the first step; aligning it with the right driver and deployment tooling turns a great model into a production‑grade service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
