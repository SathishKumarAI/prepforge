---
qid: ing_b6fd1ca8db__eli5__local
question: 'Explain: Uh, you''re doing a federated model here — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 216
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:26:31-05:00'
sources: []
---

Imagine you’re baking a big cake with friends who each have their own kitchen. Each friend adds their own secret spice to a shared batter, but nobody takes out the others’ spices or sees how much they added. After everyone mixes in their portion, all the batters are combined into one huge pot that’s stirred together. The final cake tastes like a blend of all the spices without anyone knowing the exact recipe each friend used.

In federated learning, each “friend” is a device (phone, laptop) that trains a local machine‑learning model on its own data—like adding spice to batter. Instead of sending raw data to a central server, each device sends only its updated model parameters (the “spice amount”) back to the server. The server averages all these updates, creating a new global model that incorporates everyone’s learning while keeping individual data private. This way, the collective knowledge improves, just like our shared cake, but no one sees anyone else’s secret ingredients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
