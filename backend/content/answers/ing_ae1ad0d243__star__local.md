---
qid: ing_ae1ad0d243__star__local
question: 'Explain: Distributed Training and Scaling — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:18-05:00'
sources: []
---

**Situation**  
During my second year at a fintech startup, we built a fraud‑detection model that needed to process 2 million new transactions per day. The single GPU setup was training for 48 hours per epoch and the inference latency on our edge devices exceeded acceptable limits.

**Task**  
I had to redesign the pipeline so that training time dropped below 12 hours per epoch while keeping the same accuracy, and reduce inference latency to under 50 ms per transaction.

**Action**  
First, I implemented data‑parallelism with Horovod on a Kubernetes cluster of eight NVIDIA A100 GPUs. Using TensorFlow’s `tf.distribute.Strategy`, we split each batch across GPUs and aggregated gradients via Ring‑AllReduce. To avoid stragglers, I introduced mixed precision training (FP16) and tuned the learning rate schedule with cosine decay. For inference, I exported the model to ONNX and deployed a TensorRT engine on our edge servers, batching 32 requests per forward pass to hit the latency target. Throughout, I monitored GPU utilization with NVIDIA Nsight and used Prometheus alerts for any bottlenecks.

**Result**  
Training time fell from 48 hours to 9 hours per epoch (a 78% reduction). Inference latency dropped to 42 ms on average, meeting our SLA. The model’s AUC remained at 0.97. I learned that careful orchestration of data pipelines, precision trade‑offs, and runtime optimizations are essential for scaling ML workloads effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
