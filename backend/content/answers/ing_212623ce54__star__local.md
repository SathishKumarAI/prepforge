---
qid: ing_212623ce54__star__local
question: 'Explain: Hi everyone. Kango''s come up from uh — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 384
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:55-05:00'
sources: []
---

**Situation** – At a recent Seattle Conference on Scalability, I was asked to explain how YouTube handles the sheer volume of video uploads and personalized recommendations in real time. The audience included engineers from big cloud providers who wanted concrete numbers.

**Task** – My goal was to describe the end‑to‑end ML pipeline that powers recommendation at scale: ingesting 300 TB of new content daily, training models on billions of click events, and serving predictions with <100 ms latency to over 2 billion users worldwide.

**Action** – I broke it down into three layers. First, we stream raw video metadata into a distributed Kafka cluster, then use Apache Beam on Dataflow for feature engineering (view duration, engagement heatmaps). Second, we train a deep neural network with TensorFlow‑XLA on 200 GPU pods in GKE; we shard the model across TPU v3 cores to hit a training time of 4 hours per epoch. Finally, we deploy the model as a gRPC service behind a global Cloud Load Balancer, using edge caching (Cloud CDN) to keep inference latency below 50 ms. I highlighted how we use model distillation to shrink the recommendation engine by 70% without losing accuracy.

**Result** – After this pipeline rollout, YouTube saw a 12% lift in watch‑time per session and reduced GPU usage cost by 35%. The exercise taught me that explaining ML at scale is all about tying concrete engineering choices—streaming, distributed training, edge inference—to business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
