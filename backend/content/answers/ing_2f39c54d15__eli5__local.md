---
qid: ing_2f39c54d15__eli5__local
question: 'Explain: Subscription — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 215
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:50:47-05:00'
sources: []
---

Think of a **subscription‑based publish/subscribe (pub/sub) system** like a community newsletter office.  

*Publishers* are people who write newsletters (messages). They drop their letters into the mailbox labeled “Technology.”  
*Subscribers* are readers who sign up for that newsletter; each subscriber gets a copy of every letter mailed to the mailbox, but only if they have signed up.

In system design, a **publisher** sends data to a *topic* (the mailbox). A **subscription** is a named link that tells the broker “give me all messages from this topic.” The broker (like the post office) keeps track of who subscribed and pushes each new message to every active subscription.  

This decouples writers from readers: publishers never need to know who will read, and subscribers can join or leave without affecting others. It’s a clean, scalable way to distribute events in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
