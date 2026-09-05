---
qid: ing_b6acc425a8__eli5__local
question: 'Explain: API Rate Limiter — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 253
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:26:03-05:00'
sources: []
---

Think of an API rate limiter as a bouncer at a club that controls how many guests can enter in a given time window, just like a traffic light regulates cars on a road.

**How it works:**  
When a user (guest) sends a request, the system checks how many requests have already been allowed from that user in the last minute. If the number is below the limit, the bouncer lets them through; otherwise, they’re politely turned away with a “try again later” message.

**Key parts of the mechanism:**

* **Bucket (or token bucket):** Imagine a small container that holds a fixed number of tokens (e.g., 60). Each request consumes one token.  
* **Refill rate:** Every second, new tokens are added to the bucket up to its maximum capacity, letting more requests pass over time.

By keeping the “token” count low during bursts and replenishing it slowly, the system prevents any single user from flooding the API while still allowing steady use. This simple metaphor captures both the counting logic and the sliding‑window idea that underpins most rate‑limiting designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
