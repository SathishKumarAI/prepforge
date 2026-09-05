---
qid: ing_f57dfabec7__star__local
question: When do you use distributed tracing? — What is Distributed tracing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:28-05:00'
sources: []
---

**Situation** – In the summer of 2024 I was leading a team that built an online recommendation engine for a streaming platform. Our inference service, written in Python with TensorFlow Serving, ran on Kubernetes and had to handle 10 k requests per second while keeping latency below 120 ms.

**Task** – During a sudden spike in traffic the latency ballooned to 350 ms and we couldn’t pinpoint whether the slowdown came from model loading, GPU queue contention, or network hops between micro‑services. I needed to isolate the culprit quickly so we could roll out a fix before the next promotional campaign.

**Action** – I introduced OpenTelemetry tracing across all services: the API gateway, feature‑store cache, TensorFlow Serving container, and the post‑processing worker. By annotating each request with a correlation ID and sampling 1 % of traffic, we visualized the entire end‑to‑end path in Jaeger. The trace revealed that the bottleneck was a stale model checkpoint that had been cached on the GPU node; after clearing the cache and updating the deployment strategy to use rolling updates with version tags, latency dropped back below 100 ms.

**Result** – We reduced average inference latency from 350 ms to 95 ms, increased QPS capacity by 40%, and saved an estimated $12k in GPU usage per month. The exercise taught me that distributed tracing is essential for diagnosing latency issues in complex ML pipelines where multiple services and asynchronous components interact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
