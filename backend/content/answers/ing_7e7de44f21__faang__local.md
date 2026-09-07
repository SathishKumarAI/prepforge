---
qid: ing_7e7de44f21__faang__local
question: 'Explain: When to Use Webhooks — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:39:26-05:00'
sources: []
---

**Clarify**

> *Question:* “When should we use webhooks in a system design context?”  
> **Assumptions to confirm:**  
> - The system must react to events from external services (e.g., payments, GitHub commits).  
> - Latency tolerance is on the order of seconds, not milliseconds.  
> - The volume of events is moderate; we can afford a few dozen concurrent HTTP callbacks.

**Approach**

1. Identify *event‑driven* use cases where the source already emits an HTTP POST.  
2. Verify that the consumer can receive and process the payload idempotently.  
3. Design a retry strategy and security (HMAC, secret headers).  

**Depth**

- **Use webhooks when:**  
  - The external system provides a push API (e.g., Stripe `invoice.payment_succeeded`).  
  - You need near‑real‑time updates without polling.  
  - The callback payload contains all data needed to update your state; you don’t want to hit the source again.  
- **Implementation details:**  
  - Expose an HTTPS endpoint with a unique secret per subscriber.  
  - Validate the signature before processing.  
  - Store events in a durable queue (e.g., SQS) and idempotently apply changes.  
  - Retry with exponential back‑off; cap attempts to avoid infinite loops.

**Edge Cases**

- Network failures or downtime of the receiver → missed event.  
- Duplicate deliveries → must dedupe via `idempotency_key`.  
- Payload size limits → compress or paginate.  

**Optimize & Communicate**

- If event volume spikes, switch from direct POSTs to a message bus (Kafka) and expose webhooks as producers.  
- Document the contract: HTTP method, headers, JSON schema, retry window.  
- Highlight trade‑offs: lower latency vs. added complexity in security and idempotence.

*Bottom line:* Use webhooks for low‑to‑moderate event streams that require near‑real‑time ingestion and where the source already pushes data; otherwise fallback to polling or a message queue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
