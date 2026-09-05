---
qid: ing_c78d153ddf__star__local
question: 'Explain: Choose Horizontal Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 364
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:08:38-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time recommendation engine that processed millions of user events per hour on a single GPU cluster. By the end of Q2, latency had climbed from 120 ms to 350 ms and our SLA slipped below 99.5 %.  

**Task** – I was tasked with redesigning the inference pipeline so we could keep sub‑200 ms latency while handling an expected 3× traffic surge in the next release cycle.

**Action** – First, I benchmarked a single node upgrade: adding a second GPU and more memory pushed latency to 180 ms but cost $12k/month and still left us under‑utilized during off‑peak hours. Next, I explored horizontal scaling by partitioning the request stream across multiple stateless inference services deployed in Kubernetes. I added model caching with Redis, implemented request sharding based on user ID hash, and set up a lightweight gRPC load balancer that automatically scaled pods up to 8 instances using CPU/latency metrics. The trade‑off was increased network overhead, which I mitigated by batching requests of 64 events each.

**Result** – Latency dropped to an average of 95 ms under peak traffic, and the system sustained a 4× increase in throughput with only a 25 % rise in operational cost. I learned that horizontal scaling is preferable when workloads are stateless, highly parallelizable, and need elasticity; vertical scaling works best for tightly coupled, memory‑intensive tasks where adding hardware gives diminishing returns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
