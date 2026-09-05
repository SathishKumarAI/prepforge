---
qid: ing_bc46f4ecc6__eli5__local
question: 'Explain: Fan-Out and Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 207
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:38-05:00'
sources: []
---

Imagine a town’s emergency siren system. When a fire breaks out (the **publisher** sends a message), the siren (the **fan‑out**) rings in every neighborhood—every house gets the signal at once. But not every house needs to hear every alert; some only care about earthquakes, others only about floods. That’s where **filtering** comes in: each house has a small switch that turns on only the alerts it cares about.

In pub/sub architecture, the publisher pushes one message to a topic. The system then fans it out to all subscribers (like the siren hitting every house). Each subscriber can set a filter—an easy rule that says “only receive messages whose type is ‘fire’ or ‘weather’.” This keeps bandwidth low and ensures each component only processes what matters, just as houses only listen for their relevant alarms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
