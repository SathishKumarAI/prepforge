---
qid: ing_74d5ac1c17__eli5__local
question: 'Explain: Exactly once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 225
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:09-05:00'
sources: []
---

**Exactly‑once delivery** means every piece of data is handed to a machine‑learning model only one time—no duplicates and no losses.  
Think of it like mailing a single postcard to a friend: you want the card to arrive, but not two copies or none at all. In a data pipeline, the “postman” (the system) must keep track of each record’s journey so that if a hiccup occurs (a network glitch, a crash), it can retry sending the same postcard without accidentally sending a second one.  
The key terms: **record** – an individual data item; **pipeline** – the chain of steps that moves and transforms records; **retry** – attempting to deliver again after a failure. By guaranteeing exactly‑once delivery, the model learns from clean, reliable data, just as your friend receives precisely one postcard each time you send it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
