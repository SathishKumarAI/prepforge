---
qid: ing_d10915f0fd__eli5__local
question: 'Explain: Use idempotency keys — ''10 Principles for Building Resilient
  Payment Systems'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 191
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:33-05:00'
sources: []
---

Imagine you’re ordering a coffee at a busy café. You press the “order” button once, but if the network hiccups your phone might send the request twice. The barista would then make two coffees—an unwanted duplicate.  
An **idempotency key** is like giving that order a unique receipt number. No matter how many times you hit the button, the café sees the same number and knows to prepare only one cup.  

In payment systems, an idempotency key is a short string (e.g., “order‑1234‑abc”) attached to each transaction request. When the server receives a duplicate request with the same key, it simply returns the original result instead of processing the payment again. This prevents double charges and keeps data consistent, even when network glitches or retries happen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
