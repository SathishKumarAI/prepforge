---
qid: ing_81e1a727f8__star__local
question: 'Explain: Caching and Conditional Requests — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 319
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:59-05:00'
sources: []
---

**Situation:**  
While leading the deployment of a real‑time recommendation engine at a fintech startup, we noticed that our model inference API was hitting the database 4× per second, causing latency spikes and a 12% drop in user engagement during peak hours.

**Task:**  
I needed to reduce round‑trip time for the inference endpoint, lower backend load, and keep predictions fresh within a one‑second window without adding expensive caching infrastructure.

**Action:**  
Implemented HTTP/HTTPS conditional requests by exposing an ETag header tied to the model’s version hash. The client (our mobile SDK) cached responses locally and sent `If-None-Match` on subsequent calls. On the server, I added logic in the Flask route to compare incoming ETags with the current model hash; if unchanged, we returned a 304 Not Modified, bypassing database look‑ups and heavy tensor computations. For cache invalidation, whenever the model was retrained, a new hash was generated and pushed via a small webhook that updated the CDN edge caches automatically. I also enabled gzip compression on responses to cut payload size by ~35%.

**Result:**  
Latency dropped from 350 ms to 120 ms (a 66% reduction), database queries fell by 75%, and user engagement rose by 9%. The team learned how lightweight HTTP mechanisms can be leveraged for ML inference scaling without costly infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
