---
qid: ing_a0343411c8__fp__local
question: 'Explain: Dedicated Endpoint — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 370
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:46:04-05:00'
sources: []
---

**Why a *Dedicated Endpoint* for webhook callbacks is essential**

When an ML model is deployed behind an HTTP service, clients usually send data and wait synchronously for a response. In many real‑world scenarios (e.g., fraud detection, image moderation) the inference may be long‑running or require external resources. If we force every client to poll until completion, we waste bandwidth, increase latency, and expose the server to time‑outs.

A *dedicated webhook endpoint* solves this by decoupling “request” from “response.”  
1. **Request phase** – Client POSTs a payload to `/predict`. The service immediately returns a lightweight `job_id` and an optional callback URL (or uses a pre‑registered one).  
2. **Processing phase** – The model runs asynchronously, possibly spawning workers, GPU jobs, or batch pipelines.  
3. **Callback phase** – When the job finishes, the system sends an HTTP POST to the webhook endpoint with the result.

This architecture is rooted in *asynchronous event‑driven design*, a form of *information theory* where the client’s knowledge (the prediction) is transmitted only when it changes state—from “pending” to “completed.” It eliminates unnecessary polling traffic, reduces server load, and provides a clear contract for error handling and retries.

**Non‑obvious insight:**  
The webhook endpoint should **not** be a simple “return value” URL; instead, it must expose an *idempotent* handler that can safely accept duplicate callbacks. This guarantees correctness even if network glitches cause retransmissions—an often overlooked but critical property for robust ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
