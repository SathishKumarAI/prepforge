---
qid: ing_6248aa3832__eli5__local
question: 'Explain: Reserving a Key — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 271
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:12:08-05:00'
sources: []
---

**Idempotency key = “the one‑time ticket” for an action**

Imagine you’re ordering a coffee online and the payment button keeps glitching, so you click it several times. Each click could charge your card again, but you only want one cup. A *reservable key* works like a unique coupon code: every time you send the order, you attach that same code. The server checks “Have we already processed this code?” If yes, it simply repeats the original result (one coffee, one charge). If no, it processes the request and remembers the key.

In machine learning pipelines or APIs, an idempotency key is a small string (e.g., UUID) you send with a request to create a model or submit data. The system stores that key with the outcome. Subsequent identical requests—whether from retry logic or accidental duplicates—are detected as repeats and return the same result instead of re‑running expensive training jobs or corrupting data.

**Key terms**
- *Idempotency*: an operation can be performed many times without changing the final state beyond the first execution.
- *Key*: a unique identifier you attach to each request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
