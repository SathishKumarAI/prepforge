---
qid: ing_e9eee0b424__eli5__local
question: 'Explain: Additional terminology: Origin and Edge servers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 196
total_tokens: 353
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:45:48-05:00'
sources: []
---

In machine‑learning pipelines, data often travels from a **source** (the place where it is created) to the places that actually run the model. Think of a delivery truck that starts at a factory (**origin server**) and stops at local distribution centers (**edge servers**) before reaching your home.

- **Origin server**: The central hub where all raw data, training code, and large models live. It’s powerful but far away from users or devices.
- **Edge server**: A smaller computer closer to the user (in a nearby city, office, or even on a phone). It pulls only what it needs—usually a lightweight version of the model—and runs predictions right there.

This setup keeps heavy computation at the origin while keeping latency low and bandwidth usage small by handling quick, local inference at the edge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
