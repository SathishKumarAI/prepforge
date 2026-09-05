---
qid: ing_8cbd58a167__eli5__local
question: 'Explain: Throttling type and algorithms — System Design Interview Cheat
  Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 325
total_tokens: 490
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:44-05:00'
sources: []
---

Imagine a busy café where the barista can only serve so many customers at once. **Throttling** is like that limit: it restricts how often or how many requests (customers) the system will let through in a given time.

| Throttle type | What it does | Everyday analogy |
|---------------|--------------|------------------|
| **Rate‑based** | Caps the number of requests per second. | A cashier who lets one person in every 5 seconds. |
| **Quota‑based** | Gives each user a fixed budget (e.g., 1,000 calls/day). | Each customer gets a ticket that expires after 10 drinks. |
| **Burst‑aware** | Allows short spikes but smooths them over time. | The café lets a few rushes in, then slows down to avoid chaos. |

Typical algorithms:

* **Token Bucket** – tokens are added at a steady rate; a request consumes a token. If none left, it waits or fails. (Like a refillable water bottle that only lets you sip when there's a drop.)
* **Leaky Bucket** – requests enter a queue and leave at a fixed rate, smoothing out bursts. (Think of a leaky bucket that pours water slowly no matter how fast you pour in.)

By using these throttles, systems keep traffic under control, avoid overload, and maintain good service for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
