---
qid: ing_127110d725__eli5__local
question: 'Explain: Conclusion — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 204
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:56-05:00'
sources: []
---

**Service discovery** is like a smart home where every appliance (lights, thermostat, fridge) can find each other automatically. Imagine you’re setting up a new room: instead of writing down the exact address for each device, you ask the house’s central hub “Who’s in this room?” The hub replies with a list of devices and their current addresses. In a distributed machine‑learning system, many services—data loaders, model trainers, inference engines—are constantly starting, stopping, or moving to new servers. Service discovery lets any component ask the registry for the up‑to‑date location of another service (e.g., “Where’s the tokenizer now?”) and receive that information instantly. This keeps the system flexible and resilient without hard‑coding addresses, just as your smart hub keeps your appliances reachable no matter where they roam in the house.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
