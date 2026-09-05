---
qid: ing_25f7881797__star__local
question: 'Explain: :thumbsdown: Disadvantages of gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 338
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:41-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with building a real‑time recommendation service for a mobile app that already used RESTful APIs for most of its traffic. The product team wanted to move the recommendation engine to gRPC to reduce latency and improve throughput.

**Task** – My goal was to evaluate whether gRPC would be a net benefit, identify any drawbacks, and propose a migration plan that minimized risk to existing consumers.

**Action** – I set up side‑by‑side benchmarks comparing REST (JSON over HTTP/2) and gRPC (Protocol Buffers). I discovered that while gRPC’s binary payload cut response size by ~70 %, the lack of built‑in caching and the need for a dedicated load balancer introduced complexity. We also had to ship new client libraries in Swift, Kotlin, and JavaScript – a 2‑week effort per platform. Moreover, gRPC’s stricter contract meant any schema change required a coordinated rollout across all apps; we estimated an additional 48 hours of coordination time for each update.

**Result** – The analysis led us to keep the recommendation endpoint on REST but use gRPC internally between microservices where latency mattered most. This hybrid approach cut overall request latency by 15 % and avoided the operational overhead of multi‑language gRPC clients, saving roughly $25k in engineering hours over six months. I learned that protocol choice should align with ecosystem maturity, not just raw performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
