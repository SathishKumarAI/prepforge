---
qid: ing_becb7bf7ac__star__local
question: How can each cache replica be updated? — Urlshorteningservicetinyurl
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 338
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:28-05:00'
sources: []
---

**Situation**  
At my last role I was responsible for the TinyURL micro‑service that served a global user base of 30 M daily hits. The service used a Redis cluster to cache shortened URLs; however, we had only one write node and all replicas were stale during high traffic spikes, causing >5 % latency increase.

**Task**  
I needed to design an automated mechanism so every replica reflected writes within milliseconds while keeping consistency and not adding significant overhead to the main request pipeline.

**Action**  
I implemented a lightweight publish/subscribe pattern. Each time the write node updated a key, it published a JSON message (key, new value, TTL) to a dedicated “cache‑updates” channel. A background worker on every replica subscribed to this channel and performed `SET` with the same TTL. To avoid race conditions I used Redis’ `EVALSHA` script that checked the current version before overwriting, ensuring out‑of‑order messages didn’t corrupt data. The worker also logged metrics to Prometheus so we could detect lag.

**Result**  
Replica staleness dropped from ~120 ms to <5 ms on average, reducing overall request latency by 4 %. We also cut cache miss traffic by 18 %, freeing up compute for new features. I learned that a simple pub/sub with version checks can give strong eventual consistency without blocking the main flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
