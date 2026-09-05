---
qid: ing_7cc673f63d__star__local
question: 'Explain: F3: Adapter cache thrash under traffic spike'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 423
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:07-05:00'
sources: []
---

**Situation**  
At my previous company we were running a recommendation engine that used an on‑prem GPU cluster. Every morning the batch job would load pre‑trained language adapters into a shared in‑memory cache to serve real‑time inference requests via a REST gateway. On a product launch day, traffic spiked 4× over peak, and the adapter cache started thrashing – adapters were evicted and reloaded for each request, causing latency to balloon from 12 ms to 250 ms.

**Task**  
I needed to stabilize cache behavior under load so that latency stayed below 20 ms while keeping GPU memory usage within the 32 GB limit. The goal was a smooth user experience during the traffic surge without adding expensive hardware.

**Action**  
1. Instrumented the cache with Prometheus metrics (hit rate, eviction count, queue depth).  
2. Implemented an LRU‑based eviction policy tuned to keep only adapters that had been requested in the last 5 minutes, instead of a naïve size‑only limit.  
3. Added a prefetcher: when a request hit a cold adapter, the system queued it for background loading while immediately returning a “loading” placeholder to avoid blocking.  
4. Optimized adapter serialization: switched from pickle to ONNX Runtime’s native format, cutting load time by ~70 %.  
5. Deployed A/B tests with traffic‑shaped backends to validate latency improvements before rolling out globally.

**Result**  
Cache hit rate jumped from 32% to 92%, and average inference latency dropped to 15 ms even during the peak surge. GPU memory usage stayed at ~24 GB, leaving headroom for future models. I learned that fine‑tuning eviction policies and asynchronous prefetching can dramatically reduce cache thrashing without scaling hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
