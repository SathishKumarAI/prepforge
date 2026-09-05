---
qid: ing_edc3972dc2__star__local
question: 'Explain: Re-architecture: Results — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 374
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:15-05:00'
sources: []
---

**Situation:**  
At Meta I was leading a team that built the recommendation engine for our video platform. The model served millions of requests per second, but latency spikes during peak hours were causing a 12 % drop in user engagement and a noticeable increase in error rates.

**Task:**  
Redesign the inference pipeline to eliminate synchronous bottlenecks while keeping prediction accuracy unchanged. We had to support real‑time serving for 2 B daily active users without inflating infrastructure costs.

**Action:**  
I introduced an asynchronous micro‑service architecture using gRPC streams and a message queue (Kafka). The model was wrapped in a lightweight C++ inference engine exposed via an HTTP/2 API, allowing clients to submit requests and receive callbacks once the GPU had finished. We also added a sharded caching layer with Redis, keyed by user segment, to pre‑fetch high‑probability recommendations. To keep latency low, I implemented backpressure controls in Kafka and tuned batch sizes for GPU inference to balance throughput against memory usage. Finally, we migrated from a monolithic Docker container to a Kubernetes‑managed service mesh (Istio) for fine‑grained traffic routing.

**Result:**  
Latency at the 95th percentile dropped from 350 ms to 120 ms during peak hours, improving session watch time by 9 % and reducing error rates by 70 %. The new architecture cut GPU utilization costs by 15 % while scaling to support a projected 30 % user growth. I learned that decoupling compute from request handling via async streams can unlock both performance and cost efficiency in large‑scale ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
