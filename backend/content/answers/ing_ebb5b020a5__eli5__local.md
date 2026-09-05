---
qid: ing_ebb5b020a5__eli5__local
question: 'Explain: 8 System Design - Heartbeats — HeartBeats: How Distributed Systems
  Stay Alive'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 215
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:48:34-05:00'
sources: []
---

Imagine a group of friends on a long hike, each carrying a small lantern that glows whenever they’re still moving forward. Every few minutes the friends send a quick “I’m here” message to everyone else by tossing a pebble into a shared basket. If someone stops sending pebbles, the others know that friend has fallen behind or lost the way and can decide to help or reroute the group.

In distributed systems, each computer (node) is like one of those hikers. A **heartbeat** is the small “I’m alive” signal it sends over the network at regular intervals. If a node stops sending heartbeats, other nodes assume it has failed or become unreachable and can take action—such as reallocating its work to another node or alerting an administrator. This simple, continuous pulse keeps the whole system aware of who is still functioning, much like the lanterns keep the hikers in sync on their trek.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
