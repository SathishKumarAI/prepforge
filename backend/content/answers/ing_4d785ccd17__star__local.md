---
qid: ing_4d785ccd17__star__local
question: 'Explain: Async Retry library — Exponentialbackoff'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 297
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:11-05:00'
sources: []
---

**Situation**  
In a real‑time fraud detection service, we were pulling transaction data from an external API that occasionally throttled requests. The latency spike caused our batch job to miss the nightly SLA of 5 % error rate.

**Task**  
I had to design a resilient retry mechanism that would keep throughput high while avoiding hitting the API again immediately after a failure, and keep our error budget within limits.

**Action**  
I implemented an async retry library using Python’s `asyncio` with an exponential back‑off strategy. Each failed request was retried up to five times, doubling the wait time from 100 ms to 3 s, capped at 5 s, and jittered by ±20 %. I wrapped the HTTP client in a context manager that logged each attempt’s latency, failure reason, and back‑off delay. The library also exposed a configurable “max_concurrent_requests” knob so we could throttle concurrency during peak load.

**Result**  
After deployment, the job’s error rate dropped from 12 % to 3 %, keeping us within SLA while maintaining an average throughput of 1,200 transactions per second. I learned that combining exponential back‑off with jitter prevents thundering herd problems and that exposing retry parameters at runtime gives ops real‑time control over resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
