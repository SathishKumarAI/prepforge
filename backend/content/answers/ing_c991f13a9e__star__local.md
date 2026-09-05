---
qid: ing_c991f13a9e__star__local
question: 'Explain: Protect Against Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 330
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:17-05:00'
sources: []
---

**Situation** – In a SaaS platform I was responsible for integrating with third‑party payment processors that sent status updates via webhooks. During load testing we discovered that an attacker could capture a legitimate payload and replay it, causing duplicate charges and inventory inconsistencies.

**Task** – Build a robust anti‑replay system that would allow us to accept only genuine, single‑use webhook events while keeping latency under 200 ms and not breaking the existing flow for partners.

**Action** – I introduced a signed HMAC header (SHA‑256) using a shared secret. Each payload included a monotonically increasing sequence number and a timestamp. On receipt we validated the signature, checked that the timestamp was within ±5 minutes, and stored the sequence number in Redis with a 24‑hour TTL to detect duplicates. We also added idempotent database upserts keyed on the event ID so repeated deliveries would be harmless. The system logged failures to an alerting pipeline (Grafana/Prometheus) for manual review.

**Result** – After deployment, replay attempts dropped from 1.8 % of traffic in production to zero over a two‑month period. Duplicate transaction errors fell by 97%, and the webhook response time stayed at 180 ms on average. I learned that combining cryptographic verification with lightweight stateful deduplication is essential for secure, high‑throughput event ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
