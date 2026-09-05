---
qid: ing_5c4239392b__star__local
question: 'Explain: Scalability at YouTube'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 406
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:56-05:00'
sources: []
---

**Situation**  
At my previous role on the YouTube recommendation team we were hitting a plateau: user engagement metrics dipped because our recommendation engine couldn't keep up with the 1.5 billion daily active users during peak traffic. The latency for serving predictions was creeping past 200 ms, and our batch training pipeline stalled at 8 hours per epoch.

**Task**  
I needed to redesign both the model training workflow and the real‑time inference stack so that we could deliver sub‑50 ms predictions at scale while reducing training time by at least 40%.

**Action**  
First, I moved the training pipeline from a single‑node TensorFlow cluster to a distributed TPU pod on GCP, leveraging XLA for graph fusion and mixed‑precision training. This cut epoch times from 8 h to 4 h. For inference, I containerized the model with TensorRT‑optimized kernels and deployed it via Kubernetes with autoscaling based on CPU/GPU utilization. To reduce cold starts, we pre‑warm a pool of GPU instances using GKE’s “Preemptible VMs.” We also introduced a feature‑store layer (via Feast) to cache user embeddings, cutting the feature lookup latency from 30 ms to 5 ms.

**Result**  
Prediction latency dropped to an average of 38 ms, and the end‑to‑end recommendation throughput increased by 3×, allowing us to serve a 25% larger catalog without additional hardware. User watch time rose 12%, and we saved roughly $1.2M annually in compute costs. I learned that marrying distributed training with edge‑optimized inference is key to scaling ML at YouTube’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
