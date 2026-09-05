---
qid: ing_2c7a3fdc9b__fp__local
question: 'Explain: Call the API — Letta V1 SDK | Letta Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 448
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:09-05:00'
sources: []
---

**Why the “Call the API” section matters**

When you expose a machine‑learning model as an HTTP service you’re essentially *optimizing* two constraints: **latency** and **throughput**.  
The SDK abstracts the low‑level protocol so that each request is a single, idempotent call to a well‑defined endpoint (`/predict`). This design follows the principle of *statelessness*: every invocation contains all the data needed for inference, allowing horizontal scaling without session management.

**Deriving the API flow**

1. **Authentication** – Letta uses an OAuth2 bearer token obtained via `login()`.  
   The token is a signed JWT; its expiry guarantees that only fresh credentials hit the model, preventing replay attacks.
2. **Request payload** – A JSON object with the feature vector (`inputs`) and optional metadata (`context`).  
   The SDK serializes this into the exact schema expected by the inference container, ensuring type safety.
3. **Endpoint** – `POST https://api.letta.ai/v1/predict`.  
   Under the hood the SDK forwards the request to a Kubernetes pod exposing the model; the pod replies with a JSON containing the prediction and confidence scores.
4. **Error handling** – HTTP status codes are mapped to Python exceptions (`LettaAPIError`, `LettaTimeoutError`), allowing callers to implement back‑off logic.

**Non‑obvious insight**

The SDK’s *predict* method is deliberately **synchronous** even though the underlying service may be asynchronous. This guarantees that downstream pipelines (e.g., batch ETL) can treat the call as a single atomic operation, simplifying error recovery and retry logic. In contrast, exposing an async endpoint would force callers to juggle futures or callbacks, obscuring latency guarantees.

By following this pattern you ensure that every inference request is **predictable**, **secure**, and **scalable**—the core of any production‑grade ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
