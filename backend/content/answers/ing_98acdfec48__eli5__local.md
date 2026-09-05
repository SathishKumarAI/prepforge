---
qid: ing_98acdfec48__eli5__local
question: 'Explain: Zero Copy — Why is Kafka Fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 218
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:39:41-05:00'
sources: []
---

**Zero‑Copy – why Kafka can be lightning fast**

Imagine you’re a chef who must pass a hot soup from the stove to a customer’s plate. A “copy” would mean scooping the soup into one bowl, moving it to another, then pouring it again—each scoop is extra work and takes time. *Zero‑copy* is like sliding the same pot directly onto the customer’s plate without ever lifting or transferring it. The data (the soup) never leaves its original place; it just changes hands.

In Kafka, a message lives in memory until a consumer reads it. With zero‑copy, that memory block is handed straight to the network stack, which streams it out over the wire. No extra copying happens inside the JVM or kernel, so CPU cycles and cache traffic are saved. That’s why Kafka can push millions of messages per second—because it avoids the “scoop” step entirely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
