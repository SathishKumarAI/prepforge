---
qid: ing_b5beca9d82__eli5__local
question: 'Explain: 3.5. Configuration Management Systems — System Design: What is
  Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 207
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:24:46-05:00'
sources: []
---

**Service discovery** is like a city’s directory for its cafés.  
Imagine you’re an app that needs to talk to a “model‑inference” café. Each time the café opens, it gets a new address (a computer IP and port) because the city keeps moving buildings around. If your app knew only one fixed address, it would break when the café relocates.

Instead, the city publishes a *real‑time map* that lists every open café’s current address and lets cafés register or deregister themselves whenever they move. Your app first asks the directory: “Where is the inference café?” The directory replies with the latest address, so your app can connect immediately—no manual updates needed.

In machine‑learning infrastructure, service discovery does exactly this for components (model servers, data stores, etc.), keeping them linked automatically as they scale or shift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
