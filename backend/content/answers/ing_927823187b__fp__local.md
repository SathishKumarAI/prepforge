---
qid: ing_927823187b__fp__local
question: 'Explain: Building a Webhook Receiver — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 389
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:50-05:00'
sources: []
---

**Why a webhook receiver is needed**

When an external service (e.g., Stripe, GitHub) must notify your application *as soon as* something happens, polling would waste bandwidth and introduce latency. A webhook turns the notification into a **push**: the provider sends an HTTP request to a URL you expose, guaranteeing eventual delivery.

**Design principles that shape the receiver**

1. **Idempotence & deduplication** – The same event may be retried by the sender; your handler must ignore duplicates. Store a hash of each payload in a fast key‑value store (Redis) and return *200 OK* immediately after recording, before any heavy processing.

2. **Scalability via decoupling** – Do not perform business logic inside the HTTP handler. Emit a lightweight message to a queue (Kafka/NSQ). Workers consume the queue, allowing horizontal scaling without tying up web threads.

3. **Security through signature verification** – The provider signs each payload with a shared secret (HMAC‑SHA256). Verify this before accepting; otherwise reject with *401*. This guarantees authenticity and protects against replay attacks.

4. **Observability & retry strategy** – Log the raw request, response code, and processing time. If a worker fails, let the queue’s dead‑letter policy surface the issue rather than silently dropping data.

**Non‑obvious insight**

Most designs treat the webhook as “just another HTTP endpoint.” The key subtlety is that *latency of the external provider* should not constrain your service’s throughput. By acknowledging receipt instantly and offloading work to a queue, you convert a potentially blocking I/O operation into an asynchronous pipeline, keeping both the sender and receiver responsive even under bursty traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
