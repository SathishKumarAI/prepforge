---
qid: ing_ec8c9dd4e4__star__local
question: 'Explain: Fixed Window Counter — Rate Limiting Algorithms Explained with
  Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:59-05:00'
sources: []
---

**Situation** – In my last role as a backend engineer for an AI‑driven recommendation service, we hit a sudden spike: a new marketing campaign pushed traffic up by 250 % overnight. Our real‑time inference API was throttling requests, causing latency spikes and user complaints.

**Task** – I had to implement a fast, memory‑efficient rate limiter that would cap each user’s request rate at 30 calls per minute without blocking legitimate traffic, all while keeping CPU usage below 5 %.

**Action** – I chose the fixed‑window counter algorithm. Using Redis as a shared store, I stored a key like `user:{id}:window:{timestamp}` with an integer counter and an expiry set to the next window boundary. On each request I performed a Lua script: `INCR` the counter; if it exceeded 30, immediately return a 429 status; otherwise proceed. The script runs atomically, avoiding race conditions. I wrapped this in a Python decorator that injected into our FastAPI route handlers and logged violations to a separate Redis stream for later analysis.

**Result** – Within two hours the API latency dropped from 400 ms to under 80 ms during peak periods. User complaints fell by 85 %, and we processed 1.3× more requests per second overall. I learned that a simple counter can be both powerful and lightweight when combined with Redis’s atomic operations, and I added automated alerts for threshold breaches in our monitoring stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
