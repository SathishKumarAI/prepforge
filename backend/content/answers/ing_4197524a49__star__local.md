---
qid: ing_4197524a49__star__local
question: 'Explain: Retries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 329
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:36-05:00'
sources: []
---

**Situation**  
In my last role I was building a real‑time recommendation engine that pulled user data from a third‑party analytics service via its REST API. The upstream service had a 30 % latency spike during peak hours, causing our batch jobs to stall and the SLA for fresh recommendations to slip past the 5‑minute window.

**Task**  
I needed to design a resilient ingestion pipeline that could keep up with the data stream without compromising on freshness or overloading the downstream cache.

**Action**  
First I wrapped every API call in an exponential backoff retry loop using Polly in .NET, capping retries at five and adding jitter to avoid thundering herd. I exposed the API as a thin abstraction layer so that the rest of the system interacted with a simple `GetUserMetricsAsync` method rather than raw HTTP calls. To handle eventual consistency, I implemented idempotent writes to Redis, using a version stamp from the API response to prevent stale data from overwriting newer records. Finally, I added circuit‑breaker logic: if three consecutive failures occurred, the system would fall back to a cached snapshot for 30 seconds while logging alerts.

**Result**  
The retry strategy reduced average recommendation latency by 42%, keeping the 5‑minute SLA in 99.7% of requests during peak load. I learned that combining backoff, idempotency, and circuit breaking turns an unreliable API into a predictable service component.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
