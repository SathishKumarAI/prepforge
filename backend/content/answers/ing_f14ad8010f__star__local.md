---
qid: ing_f14ad8010f__star__local
question: 'Explain: Do Not Depend on Delivery Order — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:30:53-05:00'
sources: []
---

**Situation:**  
In a recent SaaS integration project for a marketing automation platform, we had to deliver real‑time campaign events to multiple third‑party analytics services via webhooks. The external systems were unreliable; they sometimes dropped messages or delivered them out of order, which caused duplicate conversions and skewed reporting.

**Task:**  
Design the webhook delivery system so that downstream consumers could safely process events without assuming any particular order or single delivery, while still guaranteeing eventual consistency for critical metrics like total conversion count.

**Action:**  
I introduced a lightweight event broker (Kafka) to buffer all outbound messages. Each event was tagged with a monotonically increasing sequence number and a UUID, and the payload included a deterministic hash of its content. The webhook dispatcher performed idempotent writes: it stored a small state table keyed by UUID in Redis, marking events as “sent” once acknowledged. For ordering‑sensitive consumers (e.g., fraud detection), we exposed an optional `X-Sequence` header so they could reorder locally if needed. Retries were capped at three attempts with exponential back‑off, and we used signed JWT tokens to authenticate the payloads.

**Result:**  
After deployment, the platform’s webhook reliability improved from 78% to 99.9%, duplicate conversion counts dropped by 92%, and the average latency per event stayed under 120 ms. I learned that coupling delivery guarantees with idempotency and lightweight sequencing is essential for robust real‑time integrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
