---
qid: ing_528af98201__star__local
question: 'Explain: I I decided that what if so — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 401
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:23-05:00'
sources: []
---

**Situation**  
When I joined the YouTube analytics team, traffic was growing 30 % month‑over‑month and our real‑time recommendation pipeline was hitting latency limits during peak hours in Seattle. The engineering conference on scalability was coming up, so we needed a concrete demo of how ML could keep recommendations fresh without overloading the infra.

**Task**  
I had to design a scalable feature‑weighting model that could run at 10 k requests per second while staying under 50 ms latency and keeping CPU usage below 70 % on our GPU cluster.

**Action**  
I chose a lightweight factorization machine trained offline on click‑through logs, then distilled it into a tiny decision tree ensemble using SHAP‑based feature importance pruning. The model was serialized with ONNX and served through a CUDA‑accelerated inference engine that batched requests at 512 per GPU. I added a dynamic throttling layer: if GPU utilisation exceeded 75 %, the system automatically fell back to a cached popularity list. Continuous A/B testing fed real‑time gradients back into the nightly retraining job.

**Result**  
Latency dropped from 120 ms to 35 ms, throughput increased by 4×, and CPU usage stayed under 60 %. The live demo at the conference won “Best Use of ML for Scalability”, and we rolled out the architecture across all regions, reducing overall recommendation cost by 18 % while boosting CTR by 2.5 %. I learned that aggressive model compression combined with adaptive throttling is key to scaling ML in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
