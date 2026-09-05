---
qid: ing_10e76dd599__eli5__local
question: 'Explain: Push vs Pull Delivery — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 269
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:24-05:00'
sources: []
---

**Push vs. Pull in Pub/Sub – a kitchen‑delivery picture**

Imagine you’re cooking in a big kitchen (the *publisher*). Every time a dish is ready, the chef can **push** it to a waiting waiter’s tray (a “push” delivery) or let the waiter **pull** it when they’re ready (a “pull” delivery).

- **Push**: The kitchen sends every new message straight to the subscriber’s queue. Think of an automatic conveyor belt that drops plates at your station as soon as they’re made. It works fast, but if you can’t eat right away, the plate sits there and may get cold.

- **Pull**: The waiter walks to the conveyor only when they need more food. They request (“pull”) a batch of plates from the kitchen. If you’re busy, nothing waits up on your tray; you’ll just pick up what you need later.

In machine‑learning pipelines, push is great for real‑time alerts (you want instant updates), while pull suits batch training jobs that can wait until resources are free. The key trade‑off: **speed vs. control over load**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
