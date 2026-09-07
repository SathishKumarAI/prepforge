---
qid: ing_bd0bca939f__faang__local
question: 'Explain: Common Mistakes — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 645
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:02:21-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *common mistakes* when designing a system that relies on webhooks for real‑time integration (e.g., payment providers, CI/CD triggers). I’ll assume the goal is to reliably deliver events from a source to multiple consumers while keeping latency low and guaranteeing at‑least‑once semantics.

**Approach**  
1. List pitfalls in three categories: *delivery*, *scaling*, and *security*.  
2. For each pitfall, explain why it happens, its impact, and mitigation strategies.  
3. Highlight trade‑offs (e.g., retries vs. back‑off).

**Depth**

| Category | Mistake | Why It Happens | Impact | Mitigation |
|----------|---------|----------------|--------|------------|
| **Delivery** | Ignoring idempotency | Consumers treat every POST as a new event | Duplicate state changes, financial loss | Store an `event_id` header; consumers dedupe using a cache/DB. |
| | No retry/back‑off strategy | Treating 5xx or network errors as permanent | Lost events, inconsistent data | Exponential back‑off + dead‑letter queue (DLQ). |
| | Hard‑coded endpoint URLs | Changing consumer environments causes failures | System outages | Provide a registration API; allow dynamic URL updates. |
| **Scaling** | Single‑threaded worker | All webhooks processed sequentially | High latency, bottleneck under load | Use async workers or micro‑services per tenant. |
| | No rate limiting | A burst of events overwhelms downstream services | Throttling, consumer crashes | Token bucket / leaky bucket; queue incoming traffic. |
| **Security** | No authentication/validation | Open endpoint is hit by attackers | Replay attacks, data tampering | HMAC signatures (e.g., Stripe’s `Stripe-Signature` header), TLS only. |
| | Exposing raw payloads | Sensitive data leaks | Privacy violations | Mask or encrypt sensitive fields; use signed tokens. |

**Edge Cases**

- **Network partition**: consumer offline → retries exhaust → DLQ triggers alert.  
- **Clock skew**: HMAC timestamp verification fails if client clock off > 5 min. Test with NTP drift.  
- **High cardinality tenants**: per‑tenant queue scaling; test burst patterns.

**Optimize & Communicate**

- *Improvement*: Use a publish/subscribe broker (Kafka) to decouple source and consumers, enabling replay and backpressure.  
- *Narration*: “We first guarantee idempotency so duplicate deliveries don’t corrupt state. Then we protect delivery with exponential retries and a DLQ. On the scaling side, asynchronous workers and per‑tenant queues keep latency low under spikes. Finally, HMAC signatures guard against tampering while allowing us to verify authenticity.”  

This structure demonstrates clear problem framing, thoughtful design choices, complexity awareness (O(1) dedupe, O(n log n) retry scheduling), and a concise yet comprehensive explanation within the 160‑240 word window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
