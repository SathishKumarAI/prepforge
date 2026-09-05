---
qid: ing_a4dbc00f84__eli5__local
question: 'Explain: Fixed Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 226
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:59:38-05:00'
sources: []
---

**Fixed‑Window Rate Limiting (like a coffee shop’s “take‑away” rule)**  
Imagine a small café that only lets you grab a cup of coffee every minute, no matter how many times you ask. The café counts the number of coffees taken in each one‑minute block: if you’ve already taken three in this block, it says, “Sorry, wait until the next minute.” When the clock rolls over to the next minute, the counter resets to zero and you’re allowed again.

In computing, a *fixed‑window algorithm* does exactly that for requests. It divides time into equal windows (e.g., 60 seconds), counts how many times a user or IP has called an API in the current window, and blocks further calls once a preset limit is reached. When the next window starts, the count restarts, letting traffic flow again. This simple rule keeps services from being overwhelmed while remaining easy to understand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
