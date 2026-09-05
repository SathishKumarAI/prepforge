---
qid: ing_93f0dab15e__eli5__local
question: 'Explain: Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 282
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:18-05:00'
sources: []
---

Imagine a live comment system as a bustling coffee shop where people shout their thoughts across the room, and everyone can hear them instantly.  
**Functional requirements** are the rules that keep this shop running smoothly:

* **Real‑time delivery** – every new comment must appear on all listeners within a second, like shouting in the same breath.  
* **Ordering** – comments should be shown in the exact order they were sent, so the conversation feels natural, just as people speak one after another.  
* **Scalability** – when thousands of patrons rush in, the shop must still serve each voice without lag—think of a coffee machine that can handle many orders at once.  
* **Reliability** – if a server hiccups, the system should recover and not lose any spoken words, like having backup microphones.  
* **Security & moderation** – only allowed speakers (authorized users) can shout, and offensive remarks are filtered out automatically, similar to a barista letting in only approved patrons.

These requirements map directly onto the components you’ll design: message queues for real‑time flow, databases for order and persistence, load balancers for scaling, and safety nets for reliability and moderation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
