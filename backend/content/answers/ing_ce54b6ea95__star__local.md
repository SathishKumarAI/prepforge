---
qid: ing_ce54b6ea95__star__local
question: 'Explain: Start quickly and scale — gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 363
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:52-05:00'
sources: []
---

**Situation** – In the fall of 2023 I joined a fintech startup building a real‑time fraud detection pipeline. The model was already trained, but we had no efficient way to expose it as a service; REST calls over HTTP/1.1 were slow and the API gateway kept choking under load.

**Task** – My goal was to spin up a production‑ready inference endpoint in less than 48 hours while ensuring the system could scale to tens of thousands of requests per second without compromising latency.

**Action** – I chose gRPC for its low overhead, binary protocol, and built‑in streaming. First, I defined a protobuf schema that matched the model’s input features (structured JSON converted to a flat `FeatureVector` message). Using TensorFlow Serving, I wrapped the model in a Docker container and exposed it via a gRPC server on port 9000. I leveraged Envoy as a sidecar proxy for load balancing and TLS termination, configured with consistent hashing so that requests from the same user hit the same instance. To monitor performance I integrated Prometheus metrics directly into the gRPC service and set up Grafana dashboards showing latency percentiles.

**Result** – Within 36 hours we had a live inference endpoint delivering sub‑10 ms average latency at peak load, compared to 200 ms with the old REST setup. The system handled 15k requests/sec during a stress test without errors. I learned that gRPC’s code‑generation and streaming capabilities can dramatically cut time‑to‑market while providing a robust scaling foundation for ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
