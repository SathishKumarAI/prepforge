---
qid: ing_33a9868a48__star__local
question: 'Explain: AI Gateways and Model Routing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 332
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:06-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching an AI‑powered fraud detection system that needed to serve millions of transactions per day. Our existing monolithic API was hitting latency limits and couldn’t scale with the new models we were adding.

**Task:**  
I had to design a solution that could route incoming requests to the appropriate model—some for real‑time scoring, others for batch analysis—while keeping response times under 50 ms and ensuring high availability.

**Action:**  
I introduced an AI gateway built on Envoy proxy with custom Lua filters. The gateway inspected request headers (e.g., `X-Model-Type`) and used a lightweight routing table stored in Redis to decide which microservice handled the call. Each microservice hosted a specific model behind TensorFlow Serving, exposed via gRPC. I added circuit‑breaker logic and automatic retries, and leveraged Kubernetes HPA for dynamic scaling. To monitor performance, I set up Prometheus metrics that tracked latency per model and sent alerts when any exceeded our SLA.

**Result:**  
Latency dropped from 120 ms to 35 ms on average, and we handled a 3× traffic increase without additional hardware. The gateway also reduced operational overhead by centralizing routing logic, making it easier to add new models in the future. I learned how architectural patterns like gateways and model routing can turn a brittle monolith into a flexible, high‑performance AI platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
