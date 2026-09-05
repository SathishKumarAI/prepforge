---
qid: ing_d2b37bc517__star__local
question: 'Explain: Non-functional — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:57-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had built an internal chatbot that leveraged GPT‑4 for customer support. By Q3 the traffic spiked to 12 k requests per minute, and latency was creeping above our SLA of 250 ms.

**Task** – I was tasked with designing a non‑functional LLM gateway and serving platform that could scale horizontally while guaranteeing low latency, high availability, and secure data handling.

**Action** – I started by containerizing the model inference service using Docker and orchestrating it with Kubernetes. For routing, I deployed an Envoy proxy as a lightweight edge gateway; it handled TLS termination, rate limiting (10 req/s per user), and dynamic service discovery via Consul. To keep latency low, I added a caching layer in Redis for repeated prompts, and implemented model sharding so that each node ran a subset of the parameters, reducing memory footprint. For observability, I integrated Prometheus metrics and Jaeger tracing to monitor request latencies and error rates in real time. Finally, I wrote automated health‑checks that trigger pod restarts on anomalies.

**Result** – After deployment, average inference latency dropped from 410 ms to 180 ms, keeping us well under the SLA. The system handled peak traffic of 25 k req/min without any downtime, and the cache hit ratio rose to 68 %. I learned that a well‑architected gateway with proper observability and autoscaling is crucial for production LLM services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
