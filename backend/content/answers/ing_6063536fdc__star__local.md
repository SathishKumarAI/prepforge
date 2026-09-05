---
qid: ing_6063536fdc__star__local
question: 'Explain: Availability in parallel vs in sequence — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 358
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:59-05:00'
sources: []
---

**Situation**  
I was building a recommendation engine for an e‑commerce site that had to serve 50 k requests per second during the holiday season. The latency budget was 200 ms, and we couldn’t afford any single point of failure.

**Task**  
Design the data‑fetch layer so that user profile data, product catalog info, and real‑time inventory were all available with minimal latency and high fault tolerance.

**Action**  
I split the data sources into independent micro‑services and deployed each behind a Kubernetes cluster. For availability I used two parallel strategies:  
1. **Read‑through caching** – each service exposed an in‑memory Redis cache that was asynchronously refreshed by background workers, so read traffic hit the cache instantly.  
2. **Circuit breakers & retries** – the API gateway wrapped every downstream call with a Hystrix‑style circuit breaker and exponential backoff. If one service failed, the request fell back to a stale cached copy or served a degraded response instead of waiting in line.

The services were orchestrated by a sidecar that performed health checks and automatically rerouted traffic when a pod became unhealthy. This parallelism eliminated the need for sequential waits; each micro‑service could fail independently without blocking the whole chain.

**Result**  
Latency dropped from an average of 350 ms to 95 ms under peak load, while uptime rose from 99.5% to 99.97%. The key lesson: by treating data fetches as parallel, independent units and protecting them with circuit breakers, you can achieve both high availability and low latency in a large‑scale system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
