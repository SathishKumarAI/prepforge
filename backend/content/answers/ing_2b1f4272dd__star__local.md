---
qid: ing_2b1f4272dd__star__local
question: 'Explain: More than 50k Reads — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 396
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:18-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we launched a real‑time fraud detection API that served the front‑end app. By day 14, the endpoint was hit over 50 k reads per minute from mobile clients worldwide, which caused our Redis cache to thrash and the inference server to spike latency.

**Task**  
I had to keep response times below 120 ms while handling the sudden read surge without adding a new infra layer or increasing costs.

**Action**  
1. Instrumented the request pipeline with Prometheus metrics to see cache hit ratios per region.  
2. Switched from a single Redis node to a sharded cluster, using consistent hashing on user‑id to spread traffic.  
3. Added a local in‑process LRU cache (Caffeine) for hot keys and set an expiration of 5 s to keep stale data minimal.  
4. Implemented request coalescing: identical predictions within a 10 ms window were served from the same inference call, reducing GPU usage by ~30%.  
5. Deployed autoscaling policies on the inference pods based on CPU + queue depth, ensuring we always had spare capacity during traffic spikes.

**Result**  
Cache hit ratio jumped from 38 % to 78 %, and average latency fell from 240 ms to 95 ms under peak load. The system handled >50 k reads per minute without extra servers, cutting ops costs by 18 %. I learned that combining fine‑grained caching with request coalescing can dramatically improve scalability for ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
