---
qid: ing_bd0bca939f__fp__local
question: 'Explain: Common Mistakes — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 514
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:45:32-05:00'
sources: []
---

### Why a webhook is *not* just an “HTTP callback”

A webhook is the system’s way of turning **asynchronous events** into **push notifications** for downstream services.  
From first principles:

1. **Event‑driven nature** – The source emits a state change; the consumer wishes to react immediately without polling.  
2. **Statelessness of HTTP** – Each POST is independent, so the sender cannot rely on a persistent connection or session.  
3. **Reliability vs. Latency trade‑off** – You must guarantee delivery (or at least eventual consistency) while keeping response times low.

These constraints force a design that treats webhooks as *message streams* rather than simple REST calls.  

### Common mistakes

| Mistake | Why it fails |
|---------|--------------|
| **Blocking on the callback** | The sender waits for the consumer’s ACK, violating point 1 and inflating latency. |
| **No retry policy** | A transient network hiccup can lose an event; without exponential back‑off you violate reliability. |
| **Unbounded payloads** | Large JSON blobs overwhelm bandwidth and memory, breaking point 2. |
| **Lack of idempotency tokens** | Duplicate retries produce side effects (double charges, duplicate records). |
| **Hard‑coded URLs** | Fails when consumers rotate endpoints; you lose the decoupling advantage. |

### Deeper principle: *Back‑pressure as a form of graceful degradation*

Treat each webhook as a producer–consumer pair in a **bounded queue**. If the consumer is slow, buffer up to capacity and then apply back‑pressure (e.g., 429 or throttling). This aligns with the *Law of Conservation of Work*—you never lose work, you only delay it.

### Non‑obvious insight

**Webhook security can be inverted:** instead of verifying every incoming request, design the consumer to **publish a “ready” status**. The sender then retries only if the consumer explicitly rejects or times out, reducing false positives and simplifying authentication (e.g., using signed payloads that expire). This flips the classic “verify before you trust” pattern into an *opt‑in* model, which is far more scalable for high‑volume event streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
