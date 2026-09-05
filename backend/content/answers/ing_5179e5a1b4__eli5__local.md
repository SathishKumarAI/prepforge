---
qid: ing_5179e5a1b4__eli5__local
question: 'Explain: Making liberal use of idempotency — Designing robust and predictable
  APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 237
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:46:14-05:00'
sources: []
---

Think of an API call like a vending machine that dispenses the same snack each time you press the button.  
**Idempotent** means “doing it again gives the same result.” If you press the button twice, you still get one candy and no extra charge—just as sending the same request to an API should return the identical response every time.

In machine‑learning services, clients often send training or inference requests that might be retried because of network hiccups. By making those endpoints idempotent (e.g., using a unique “request ID” you provide), the server can safely ignore duplicate calls: it checks whether that request ID was already processed and simply returns the stored outcome instead of re‑running the costly computation.

This makes the API **robust**—errors or retries don’t create duplicate models or double charges—and **predictable**, because the same input always yields the same output, just like a vending machine that never gives you more than one candy for one press.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
