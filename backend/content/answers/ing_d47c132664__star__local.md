---
qid: ing_d47c132664__star__local
question: What's an API? — System Design was HARD until I Learned these 30 Concepts
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 381
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:11-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a team that built an on‑prem recommendation engine for a mid‑size e‑commerce platform. The sales team needed to pull real‑time predictions from our model, but the existing batch pipeline took hours and was impossible to scale to their weekly campaigns.

**Task** – My goal was to expose the model as a low‑latency REST API that could handle 5 k requests per second while keeping CPU usage under 70 % on a single GPU node. We also had to guarantee 99.9 % uptime during peak traffic and allow easy rollback if the model drifted.

**Action** – I chose FastAPI for its async support, wrapped the PyTorch model with TorchServe, and deployed behind an Nginx reverse proxy with HTTP/2. To reduce latency we pre‑warm embeddings in Redis and batch incoming requests into 32‑sample groups using a custom asyncio queue. For reliability I added a Circuit Breaker pattern (pybreaker) that throttled traffic to the GPU when GPU load exceeded 80 %. Finally, we set up Prometheus metrics and Grafana dashboards for real‑time monitoring.

**Result** – The API handled 6 k req/s with <30 ms latency on average, and uptime stayed at 99.97 % over three months of production use. We cut prediction turnaround from hours to milliseconds, enabling dynamic pricing and personalized ads that lifted conversion rates by 12 %. I learned that designing a robust ML API is as much about infrastructure trade‑offs (batching vs latency) as it is about the model itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
