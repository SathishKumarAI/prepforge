---
qid: ing_f535be2e81__star__local
question: 'Explain: Challenges — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 401
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:51-05:00'
sources: []
---

**Situation** – At Uber we were pushing the limits of our real‑time trip‑matching service: the database layer had to deliver more than 40 million read requests per second from a distributed online storage cluster (Cassandra + DynamoDB) while keeping latency under 10 ms for every passenger. The existing cache layer was either too coarse or suffered from cache‑miss storms during surge events.

**Task** – Design an integrated caching solution that could absorb the majority of traffic, reduce read latency by at least 50%, and scale elastically without introducing stale data or race conditions in a highly concurrent environment.

**Action** – I led a cross‑functional squad to build a hybrid cache: a per‑region LRU tier on Redis for hot keys, backed by a low‑latency in‑memory store (Caffeine) inside the application JVM. We added a write‑through policy with optimistic locking via CAS on the underlying storage and implemented a “cache‑aside” fallback that served stale data only when the backend was temporarily unreachable. To avoid cache‑miss storms we introduced a probabilistic request coalescing layer that deduplicated identical keys for up to 5 ms, reducing burst traffic by ~30%. We also instrumented the entire pipeline with Prometheus alerts and added auto‑scaling rules based on read‑through rates.

**Result** – The integrated cache pushed our effective hit rate from 60% to 92%, cutting average read latency from 18 ms to 7 ms. During peak surge, we handled a sustained 45 M reads/sec without any service degradation. I learned that blending multiple caching strategies and careful back‑pressure controls can unlock performance at scale while keeping consistency guarantees intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
