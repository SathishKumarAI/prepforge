---
qid: ing_1e86b16fe6__star__local
question: 'Explain: High Latency — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 325
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:35-05:00'
sources: []
---

**Situation:**  
At my last role I was leading the redesign of a recommendation engine that had just hit a 400 ms average response time after a sudden 30% traffic spike. Users were dropping off before they saw any suggestions, and our SLA demanded sub‑200 ms latency.

**Task:**  
My goal was to identify the root causes of the high latency and deliver a scalable architecture that could sustain peak loads while keeping inference times under 150 ms per request.

**Action:**  
I first instrumented the pipeline with distributed tracing (OpenTelemetry) and identified three bottlenecks: (1) a monolithic model server, (2) synchronous feature store lookups over HTTP, and (3) an inefficient batch‑to‑stream conversion. I refactored the model into a lightweight TensorRT container, moved the feature store to Redis cache with prefetching, and switched to asynchronous gRPC calls. Additionally, I introduced a request queue that capped concurrent inferences to 200 per node and implemented dynamic scaling via Kubernetes HPA based on CPU usage.

**Result:**  
Latency dropped from 400 ms to 110 ms average, and the system handled a 50% traffic surge without any SLA violations. I learned that micro‑optimizing each layer—model serving, data retrieval, and orchestration—often yields larger gains than merely adding hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
