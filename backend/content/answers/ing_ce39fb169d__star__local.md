---
qid: ing_ce39fb169d__star__local
question: 'Explain: Routing tiers — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 339
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:37-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new customer‑support chatbot that had to serve 10,000 concurrent users on peak holiday sales day. The first prototype kept all traffic in a single monolithic server; latency spiked to 1.2 s and the error rate hit 8%.

**Task:**  
I was tasked with redesigning the request flow so that we could handle the load while keeping response time under 300 ms and maintaining a 99.9% uptime during the surge.

**Action:**  
I split the system into two routing tiers: an **LLM Gateway** and a **Serving Platform**. The gateway, built on Envoy with a custom Lua filter, acted as the front‑door router—balancing requests across regional edge nodes, performing JWT auth, rate‑limiting, and A/B testing for new model versions. Behind it we deployed the serving platform using TorchServe, containerized per model, and autoscaled via Kubernetes HPA. The gateway forwarded only the intent token to the serving cluster, which returned a concise JSON payload. We also added a caching layer with Redis for high‑frequency FAQ responses.

**Result:**  
After the split, peak latency dropped to 180 ms, error rate fell below 0.1%, and we handled a 4× traffic spike without any downtime. I learned that decoupling routing from model inference not only improves performance but also gives us agility for rapid iteration on new LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
