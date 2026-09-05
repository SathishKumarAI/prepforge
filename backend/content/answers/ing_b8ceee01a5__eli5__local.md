---
qid: ing_b8ceee01a5__eli5__local
question: 'Explain: Types of Heartbeats — HeartBeats: How Distributed Systems Stay
  Alive'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 238
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:17-05:00'
sources: []
---

Imagine a city’s power grid as a team of streetlights that must stay on to keep the streets safe. Each light is a server, and the whole grid is a distributed system. To make sure every light (server) is still working, each one sends out a quick “I’m alive!” note—this is called a *heartbeat*.  

There are two main styles of heartbeats:

1. **Unicast heartbeat** – like a single streetlight texting every neighbor in the city to confirm they’re on. It’s simple but can overload the network if many lights do it at once.  
2. **Multicast (or broadcast) heartbeat** – like all lights flashing together so everyone sees one signal that reaches everyone. This reduces traffic and lets the system quickly spot a missing light.

If a light stops replying, its neighbors know something’s wrong and can switch to backup lights, just as a distributed system replaces a failed node with a spare. The heartbeat keeps the whole city bright and safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
