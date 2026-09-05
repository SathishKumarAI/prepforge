---
qid: ing_ba24969a3c__eli5__local
question: 'Explain: Solution — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 206
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:13-05:00'
sources: []
---

Think of a machine‑learning system as a bustling city where different “neighborhoods” (models, data stores, inference engines) need to talk to each other.  
In *server‑side service discovery*, the city’s traffic lights (a central registry) keep an up‑to‑date map of every neighborhood’s address and how to reach it. Whenever a new model is deployed or an existing one moves to another server, it registers itself with this traffic light. Any ML component that needs to use the model asks the traffic light for its current location instead of hard‑coding a fixed IP.  

**Unavoidable term:** *Registry* – a database where services announce their network address and other metadata so clients can find them dynamically.

This pattern lets the city grow or shrink without rewiring every connection, keeping your ML pipeline flexible and resilient to changes in infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
