---
qid: ing_a6438d33e6__eli5__local
question: 'Explain: Some REST API implementations might break them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 218
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:40-05:00'
sources: []
---

Imagine your machine‑learning model is a very careful recipe that needs the exact same ingredients every time you bake it: flour, sugar, eggs, and a precise oven temperature. A REST API is like the kitchen counter where those ingredients are delivered. If the counter’s “delivery system” (the API) suddenly changes how it labels the ingredients—maybe it calls “flour” “fine powder” or drops the exact amount in the bowl—the recipe can turn out wrong, even if the rest of the process is fine.

In machine‑learning terms, the API might alter data formats, drop fields, change value ranges, or add unexpected noise. The model, trained on clean, consistent data, then receives something that doesn’t match what it expects, leading to mispredictions or failures. So a “broken” REST API is just a delivery glitch that throws off the precise inputs your ML system relies on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
