---
qid: ing_d22580b63a__eli5__local
question: 'Explain: Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 229
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:08:14-05:00'
sources: []
---

**Filtering in a Pub/Sub system**

Imagine a town’s bulletin board (the *publisher*) that posts news every day. Many people (the *subscribers*) come to read it, but each only cares about certain topics—some want sports updates, others only the weather.

In this analogy:
- **Publisher** = the source posting messages.
- **Subscriber** = a listener that receives messages.
- **Topic/Filter** = a keyword or tag (e.g., “sports”, “weather”) that tells the board which posts to hand over to each person.

When the publisher writes a message, it tags it with one or more keywords. The system then checks every subscriber’s filter: if a subscriber has requested “sports,” the message is sent only to them; others ignore it. This way, each person gets only what matters without sifting through everything themselves. That’s filtering in a publish/subscribe design—simple, efficient, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
