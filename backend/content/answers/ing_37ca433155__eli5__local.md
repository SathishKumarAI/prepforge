---
qid: ing_37ca433155__eli5__local
question: 'Explain: arguments goes away we never know that — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 236
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:04:19-05:00'
sources: []
---

Imagine a town where every action—like turning on a light or opening a door—creates a tiny “message” (an event) that is dropped into a shared mailbox everyone can read. In an *event‑driven* system, software components don’t call each other directly; they just publish events and listen for the ones they care about.  
Martin Fowler’s talk shows that this idea appears in many guises:  

* **Bus architecture** – a single channel where every component sends and receives.  
* **Message queues** – messages are stored until a consumer is ready, giving reliability.  
* **Publish/subscribe** – the sender never knows who will read its message; it just “publishes” it.  

The key point: *the publisher never needs to know the subscriber*. The event’s meaning is decided by whoever reads it—just as any town‑sitter can decide what to do with a note from the mailbox. This loose coupling lets systems grow, change, and recover without one part breaking another.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
