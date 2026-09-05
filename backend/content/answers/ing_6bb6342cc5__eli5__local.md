---
qid: ing_6bb6342cc5__eli5__local
question: 'Explain: Confusing Idempotency with Exactly-Once — Idempotency | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 210
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:26:27-05:00'
sources: []
---

Imagine you’re sending a single postcard to a friend. **Idempotency** is like having a special mailbox that, no matter how many times you drop the same postcard in it, your friend will only ever see one copy of that message—extra drops are ignored.  
**Exactly‑once**, on the other hand, guarantees two things: first, the postcard reaches the friend at all; second, it arrives exactly once and never twice or not at all.

In a machine‑learning pipeline, idempotent operations (e.g., adding a label to a dataset) can be safely retried without duplicating data. Exactly‑once delivery is harder—it must ensure that each training example is processed only one time and no example is missed, even if the system crashes or retries. Idempotency protects against duplicates; exactly‑once protects against both duplicates and losses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
