---
qid: ing_d2b7ec1477__fp__local
question: 'Explain: Summary — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 405
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:09-05:00'
sources: []
---

**Why Webhooks Exist**

In distributed systems the *fundamental problem* is synchronizing state changes across services without burdening either side with constant polling. Polling wastes bandwidth and introduces latency; a push model solves both, but naïve pushes can overload receivers or miss events.

A webhook is a lightweight **publish‑subscribe** primitive that transforms *“change occurred”* into an HTTP POST to a pre‑registered URL. The sender only needs to know the event type; the receiver owns its endpoint and security credentials. This separation aligns with the *principle of least astonishment*: each side declares intent once, then reacts automatically.

**How It Works**

1. **Registration** – Receiver posts a callback URL + filter to the publisher.
2. **Event Generation** – Publisher emits an event payload (JSON or XML).
3. **Delivery** – Publisher performs an HTTP POST with idempotency‑key header and retries on 5xx/timeout, ensuring eventual consistency.
4. **Acknowledgement** – A `200 OK` signals success; any other response triggers retry.

The design is essentially a *stateless push* that leverages the ubiquitous HTTP protocol for transport and TLS for security, avoiding extra message brokers while preserving scalability.

**Non‑Obvious Insight**

Most people treat webhooks as simple callbacks, but their true power lies in **idempotent retries**. Because network failures are inevitable, each payload must be uniquely identifiable (e.g., a UUID or hash). The receiver then guarantees that repeated deliveries of the same event result in only one state transition—this transforms an unreliable push into a reliable, eventually‑consistent notification channel without extra infrastructure.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
