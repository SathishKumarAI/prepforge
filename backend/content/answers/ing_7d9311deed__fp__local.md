---
qid: ing_7d9311deed__fp__local
question: 'Explain: Example: GitHub Webhook to Your App — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 388
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:32:39-05:00'
sources: []
---

**Why a webhook is needed**

When a third‑party service (GitHub) generates an event, it must notify your application *asynchronously* so that you can react in near real time—e.g., trigger CI/CD or update a dashboard.  
The core problem is: *how to deliver a one‑to‑many, low‑latency message without the sender polling repeatedly?*  

**Fundamental solution**

1. **Publish/Subscribe abstraction** – GitHub acts as a *publisher*, your app a *subscriber*.  
2. **Push over HTTP(S)** – A stateless POST keeps the connection cheap and firewall‑friendly.  
3. **Idempotence & retries** – Each payload carries a unique `X-GitHub-Delivery` ID; if you respond with 200 OK, GitHub stops retrying; otherwise it re‑delivers using exponential backoff.  

**Why this works**

* **Scalability:** HTTP is inherently stateless; each request can be handled by any worker in a pool.  
* **Reliability:** Retries guarantee at‑least‑once delivery without the publisher needing to track state.  
* **Security:** HMAC signatures (`X-Hub-Signature-256`) bind payloads to your secret, preventing spoofing.

**Deep insight often missed**

The webhook’s retry *exponential backoff* is not merely a safety net; it implements an implicit *load‑shedding policy*. If your app cannot keep up (e.g., 429 responses), the sender automatically slows down, giving you time to scale without any explicit coordination. This emergent behavior turns a simple HTTP POST into a self‑regulating event bus that aligns perfectly with distributed system principles of loose coupling and graceful degradation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
