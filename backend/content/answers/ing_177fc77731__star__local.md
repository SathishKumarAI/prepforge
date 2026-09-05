---
qid: ing_177fc77731__star__local
question: 'Explain: Response Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 340
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:49-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had just finished training a fraud‑detection model that scored transactions in real time. The engineering team needed a way to expose the model to the existing payment gateway without rewriting any legacy code.

**Task** – Build a robust, low‑latency API that could receive transaction data, return risk scores, and log usage for compliance, all while scaling to 10 k requests per second during peak hours.

**Action** – I chose FastAPI with Uvicorn workers for Pythonic simplicity and async handling. The endpoint accepted JSON payloads (transaction ID, amount, user history) and returned a probability score. To keep latency under 50 ms, I containerized the model with ONNX Runtime, pinned CPU cores, and used Redis caching for repeated feature lookups. For scaling, I deployed on Kubernetes with HPA based on request queue depth, and added circuit‑breaker logic to fall back to a cached “safe” score if the service was overloaded. I also instrumented Prometheus metrics (request latency, error rate) and set up alerting.

**Result** – The API handled 12 k RPS during a holiday surge with <45 ms average latency, reducing false positives by 18 % compared to rule‑based checks. I learned that careful choice of framework, containerization, and observability is key when turning ML models into production APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
