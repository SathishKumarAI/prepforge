---
qid: ing_0a8c755167__star__local
question: 'Explain: Hosting Options — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 371
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:49-05:00'
sources: []
---

**Situation** – At my last startup we had built a conversational AI that answered customer queries in real time. The beta test showed latency over 1 s on the edge device, causing a 12% drop in user satisfaction.

**Task** – I needed to decide where to host the model: keep it on-device for privacy, or move it to a cloud endpoint for speed and scalability, while still allowing incremental updates via an agent‑building pipeline.

**Action** – I first benchmarked the inference time of our 300 M‑parameter transformer on Raspberry Pi vs. AWS Lambda. The device took 1.4 s per request; Lambda returned 0.18 s with a cold start penalty of 200 ms. To balance privacy and performance, I deployed the model to an Azure Functions container behind an API gateway, then wrapped it in an “agent” layer that pulls configuration from Azure App Configuration. This agent can hot‑swap only the top‑k classification head without redeploying the whole container, cutting update time to under 30 s. I also added a caching layer with Redis to handle burst traffic.

**Result** – End‑to‑end latency dropped to 0.25 s on average, boosting NPS from 68 to 82 within two weeks of launch. The agent architecture allowed us to roll out new intent models without downtime, and the cost per inference fell by 35% compared to a monolithic cloud deployment. I learned that the right hosting choice often lies between pure edge and pure cloud, and that an adaptive agent layer can deliver both privacy and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
