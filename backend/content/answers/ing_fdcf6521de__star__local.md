---
qid: ing_fdcf6521de__star__local
question: 'Explain: This video is on the basics of — System Design BASICS: Horizontal
  vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 371
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:23-05:00'
sources: []
---

**Situation** – I was leading a data‑science sprint for a fintech startup that needed to deploy a real‑time fraud detection model to production. The existing monolithic inference service was only handling about 3,000 requests per second before latency spiked, and the engineering team asked me to explain how we could scale the system without breaking our SLA.

**Task** – My goal was to give a concise, hands‑on rundown of horizontal versus vertical scaling, highlight the trade‑offs for ML inference workloads, and recommend a concrete architecture that would let us hit 10k RPS with <50 ms latency.

**Action** – I started by sketching a diagram on the whiteboard: one node with a single GPU (vertical) versus multiple CPU nodes behind a load balancer (horizontal). I explained that vertical scaling is simple—just add more RAM or upgrade to a higher‑end GPU—but it hits a hard ceiling and increases cost per request. For horizontal scaling, I showed how we could spin up 10 Docker containers on an autoscaling Kubernetes cluster, each running the model with TensorRT for inference acceleration, and use Redis as a lightweight message queue to distribute predictions. I also mentioned that sharding the input data across nodes reduces memory pressure and improves fault isolation.

**Result** – The team adopted the horizontal design: we launched 12 GPU‑enabled pods, achieved 12k RPS with 35 ms average latency, and cut inference cost per request by 30 %. I learned that a clear visual comparison of scaling options can quickly align stakeholders on both performance and budget goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
