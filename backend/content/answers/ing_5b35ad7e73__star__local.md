---
qid: ing_5b35ad7e73__star__local
question: 'Explain: Context — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 349
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:58-05:00'
sources: []
---

**Situation:**  
When I joined a cloud‑native fintech startup, our recommendation engine was running on Kubernetes but the data‑processing microservice kept hitting “unknown host” errors during nightly batch jobs. The team had to spin up new worker pods for each job run, and the service registry wasn’t updated fast enough.

**Task:**  
I needed to build a robust server‑side service discovery mechanism so that any new or scaled‑out instance of the data‑processing microservice could be found automatically by the recommendation engine without manual DNS updates, while keeping latency under 10 ms per request.

**Action:**  
I chose Consul for its health checks and key/value store. I wrote a lightweight Go agent that registered each worker pod with Consul on startup, sending periodic heartbeats and exposing a `/health` endpoint. On the recommendation side, I replaced hard‑coded URLs with a Consul client that resolved service names to IPs and cached them for 5 seconds. I added circuit‑breaker logic using Hystrix so that if a worker failed health checks, calls would fall back to a queued retry pool. Finally, I automated deployment scripts to update the Consul service catalog whenever new pods were created or destroyed.

**Result:**  
Service discovery latency dropped from ~200 ms (DNS lookups) to <10 ms, and job failures due to missing services fell 92%, improving nightly throughput by 35%. The team now scales workers on demand without manual configuration. I learned how to balance fast resolution with fault tolerance in a dynamic microservice environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
