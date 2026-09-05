---
qid: ing_35ffa4e501__star__local
question: 'Explain: Webhook Security — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 328
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:10-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a real‑time analytics dashboard that pulled data from several partner APIs via webhooks. Within the first month, one of our clients reported unexpected spikes in their event counts—our logs showed duplicate webhook payloads arriving within milliseconds.

**Task:**  
I had to redesign the webhook ingestion pipeline to eliminate duplicates, prevent replay attacks, and ensure only authenticated partners could send data, all while keeping latency under 100 ms for real‑time updates.

**Action:**  
First, I introduced a HMAC signature header (SHA‑256) that each partner generated with a shared secret; our server validated the digest before processing. Next, to guard against replay attacks, I stored a rolling window of nonce values and timestamps in Redis, rejecting any payload older than 30 seconds or with a previously seen nonce. For idempotency, every webhook carried a unique UUID; we kept a small LRU cache keyed by that UUID to drop duplicates instantly. Finally, I switched from HTTP/1.1 to HTTP/2 over TLS 1.3 and added rate limiting per partner via Envoy’s Lua filter.

**Result:**  
Duplicate events dropped from ~12% of traffic to <0.01%, and replay attempts were logged but never processed. Latency remained below 80 ms, meeting SLA targets. I learned that combining cryptographic validation with stateless idempotency is the most efficient way to secure high‑throughput webhook systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
