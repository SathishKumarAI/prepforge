---
qid: ing_927823187b__star__local
question: 'Explain: Building a Webhook Receiver — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 334
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:53-05:00'
sources: []
---

**Situation**  
At my last job we had a micro‑service that sent order updates to several partner systems via HTTP POSTs. When one of the partners switched to a new API, our integration broke because they started rejecting our payloads and timing out. We needed a reliable way to receive their webhooks, validate them, and route the data into our event bus without pulling.

**Task**  
Build a lightweight, scalable webhook receiver that can handle bursts up to 10k requests per minute, verify signatures, de‑duplicate events, and feed the payloads into Kafka for downstream processing.

**Action**  
I chose Node.js with Express for its async I/O and added rate limiting (express-rate-limit) plus a Redis cache keyed by request ID for deduplication. For security, I implemented HMAC SHA256 verification using the shared secret from the partner’s dashboard. The endpoint writes validated events to Kafka via `kafkajs`. To keep the system resilient, I wrapped the route in a circuit breaker (opossum) and exposed metrics to Prometheus (request latency, success rate). For scaling, the service runs behind an NGINX load balancer and auto‑scales on CPU usage.

**Result**  
Within two weeks we restored 99.8% of partner traffic with zero data loss. The deduplication cache cut duplicate processing by 70%, and Kafka throughput stayed above 12k events/min. I learned how to combine simple middleware patterns with observability to build a robust webhook receiver that scales horizontally without complex orchestration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
