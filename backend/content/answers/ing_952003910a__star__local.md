---
qid: ing_952003910a__star__local
question: 'Explain: Momento — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 347
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:07-05:00'
sources: []
---

**Situation**  
During a product launch for our recommendation engine, we hit a bottleneck: the inference latency kept rising as user traffic doubled from 10k to 80k requests per second. Our real‑time model was too slow for the SLA of 50 ms.

**Task**  
I had to reduce end‑to‑end latency by at least 30% while keeping the recommendation quality unchanged, and do it within two weeks before the next release cycle.

**Action**  
I introduced a hybrid caching layer using **Momento** as an in‑memory key/value store backed by **Valkey** (the open‑source Redis fork). I serialized the model’s top‑k item vectors into Momento for hot users and used Valkey to persist cold‑start embeddings with 10 % higher durability. I added a Lua script that atomically checked both stores, falling back to on‑demand recomputation only when both caches missed. I also tweaked the eviction policy to `LFU` in Valkey to keep frequently requested items alive. The integration was wrapped in our existing microservice with a simple REST endpoint.

**Result**  
Latency dropped from 70 ms to 45 ms, a 36% improvement, and throughput stayed above 90k RPS during load testing. We also cut GPU usage by 20 %, freeing compute for other models. This experience taught me how to combine Momento’s ultra‑fast cache with Valkey’s persistence to balance speed and reliability in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
