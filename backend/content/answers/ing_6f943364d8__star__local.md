---
qid: ing_6f943364d8__star__local
question: 'Explain: Anatomy of a Webhook Request — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 352
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:11-05:00'
sources: []
---

**Situation**  
In my last role at a SaaS marketing platform, we were launching a real‑time lead capture feature. The product team wanted our system to push new leads to partner CRMs via webhooks, but the existing API call was too heavy for millions of events per day.

**Task**  
I had to design an efficient webhook architecture that ensured reliability, low latency, and easy debugging while keeping infrastructure costs down.

**Action**  
First, I mapped out the request flow: a POST to our `/webhook/lead` endpoint with JSON payload, signed by HMAC SHA‑256 for authenticity. I added idempotency headers (`X-Request-ID`) so retries wouldn’t duplicate leads. For delivery guarantees, I built a lightweight queue in Redis that stores pending webhooks; a worker pool pulls items, sends the request, and uses exponential backoff on failures. I also introduced a “heartbeat” endpoint (`/webhook/ping`) for partners to verify connectivity. On the consumer side, I documented the exact JSON schema (e.g., `lead_id`, `timestamp`, `metadata`) and required partners to acknowledge with a 2xx status.

**Result**  
The new webhook system processed 1.8 M events daily with <30 ms average latency, and retries hit only 0.3% of cases. We cut outbound API costs by 40% compared to the old batch approach. The clear schema and idempotency pattern also reduced support tickets about duplicate leads by 70%. This experience taught me how a well‑thought‑out request anatomy can turn a fragile integration into a robust, scalable component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
