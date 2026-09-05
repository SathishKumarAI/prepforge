---
qid: ing_3a790a5137__star__local
question: 'Explain: System Design Case Study — System Design Academy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 359
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:41-05:00'
sources: []
---

**Situation**  
When I joined the product team at a mid‑size online marketplace, our monthly active users had plateaued at 1.2 M while revenue per user dipped by 8% over six months. The leadership asked me to build a real‑time recommendation system that could lift conversion rates without blowing out infrastructure costs.

**Task**  
Design an end‑to‑end ML pipeline that ingests 50k new interactions per minute, trains a collaborative filtering model in under 30 min, and serves top‑10 personalized product suggestions with <50 ms latency to the mobile app.

**Action**  
I chose Apache Spark for distributed feature engineering on our 4‑node cluster, then trained an implicit ALS model using TensorFlow’s tf.data pipeline. For serving I containerized the model with NVIDIA Triton Inference Server and deployed it on a Kubernetes autoscaler that scales from one to eight replicas based on request queue depth. To keep costs low, I scheduled nightly retraining jobs on spot instances and used Redis for caching the top 1 M predictions per user.

**Result**  
Within three months, click‑through rate rose 12% and average order value increased by 5%. The system handled peak traffic of 200k requests/s with 95th‑percentile latency at 48 ms. I learned how to balance model fidelity, inference speed, and cloud economics in a production ML stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
