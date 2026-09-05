---
qid: ing_4fae26dcf7__eli5__local
question: 'Explain: New Key on Every Retry — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 228
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:43:17-05:00'
sources: []
---

Imagine you’re sending a postcard to a friend who lives at the same house but sometimes forgets the address. You decide to give every postcard a fresh, unique stamp—like a “new key.” When your mail carrier (the system) drops the postcard, it checks the stamp: if that stamp has never been seen before, the message is delivered and recorded. If the same stamp reappears because you tried again after a hiccup, the carrier sees it’s already handled and simply ignores it instead of sending another copy.

In machine learning pipelines this “new key on every retry” means each request gets a unique identifier (the stamp). The system stores the result once per key; any later retries with the same key are treated as duplicates and safely ignored. This guarantees that even if you retry because of a timeout, your training job or inference call runs only once—making the operation *idempotent* (the same result no matter how many times you try).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
