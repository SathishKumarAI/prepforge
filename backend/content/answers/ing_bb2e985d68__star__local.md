---
qid: ing_bb2e985d68__star__local
question: 'Explain: Return the Right Status Code — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 399
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:26-05:00'
sources: []
---

**Situation:**  
At my last company we built a payment‑processing platform that sent transaction events to partner merchants via webhooks. After launch, several partners complained that their integrations were timing out or misbehaving because our API kept returning HTTP 500s even when the event payload was correctly received.

**Task:**  
I had to redesign the webhook delivery logic so that each callback returned an appropriate status code—ensuring idempotent processing, clear error signaling, and smooth retry behavior for partners while keeping our own metrics accurate.

**Action:**  
1. Added a “delivery state” table keyed by webhook ID + event hash, marking states as `PENDING`, `SUCCESS`, or `FAILURE`.  
2. On sending, we immediately insert a row with `PENDING`.  
3. The partner’s endpoint is called; if it responds 200–299 we set the state to `SUCCESS` and return HTTP 204 (no content).  
4. For client‑side errors (400–499) we mark `FAILURE` and send an HTTP 422 so partners can inspect payloads without retrying automatically.  
5. Server‑side failures trigger a 503 with a Retry‑After header, and the job is re‑queued using exponential backoff.  
6. Added circuit‑breaker logic to pause sending if downstream latency spikes.

**Result:**  
Webhook success rates rose from 84 % to 99.7 % within two weeks; partner complaints dropped by 70 %. We also reduced unnecessary retries, cutting our outbound traffic by ~30 %. I learned that mapping business states to HTTP codes and handling idempotency explicitly is critical for reliable event delivery in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
