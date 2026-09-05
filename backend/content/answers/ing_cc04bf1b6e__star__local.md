---
qid: ing_cc04bf1b6e__star__local
question: 'Explain: Built on HTTP 2 Instead of HTTP 1.1 — Grpc'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 359
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:54-05:00'
sources: []
---

**Situation** – In late‑2023 I led the rollout of our recommendation engine for a mobile e‑commerce app that was hitting 30 k concurrent users during flash sales. The existing REST API (HTTP/1.1) was throttling under burst traffic, with average latency creeping to 350 ms and request failures rising to 2 % during peak.

**Task** – I had to redesign the inference service so it could handle the load while keeping latency below 200 ms and reducing bandwidth usage by at least 30 %.

**Action** – I chose gRPC over HTTP/2 for its multiplexed streams and binary protocol. Using Python’s `grpcio` library, I wrapped our TensorFlow model into a protobuf service, added server‑push headers to enable flow control, and tuned the max concurrent streams setting from 10 to 1000. I also implemented client‑side load balancing with gRPC’s round‑robin resolver and used HTTP/2’s priority frames to favor critical user requests. For monitoring, I integrated Prometheus metrics on stream counts and latency percentiles.

**Result** – Post‑migration, peak latency dropped to 145 ms (a 59 % improvement), error rates fell below 0.1 %, and network bandwidth usage decreased by 35 %. The experience taught me that HTTP/2’s multiplexing is a game changer for real‑time ML inference under high concurrency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
