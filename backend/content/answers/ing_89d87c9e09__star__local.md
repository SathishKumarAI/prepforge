---
qid: ing_89d87c9e09__star__local
question: 'Explain: Docstore Query Patterns — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 352
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:34-05:00'
sources: []
---

**Situation**  
At my previous role, we were tasked with scaling a recommendation engine for a ride‑hailing platform that had to serve over 40 M read requests per second from a distributed document store (Cassandra). The latency budget was under 10 ms and any cache miss could ripple into user dissatisfaction.

**Task**  
Design an integrated caching layer that would reduce the load on the online storage, keep data fresh for real‑time pricing updates, and guarantee high availability across multiple regions.

**Action**  
I introduced a two‑tier cache: (1) a local in‑process LRU buffer per service instance to absorb burst traffic; (2) a distributed Redis cluster with a read‑through policy. We used Redis’ pipelining and bulk GETs to fetch 32 documents at once, mapping the document keys to a composite hash of user ID + region. To keep consistency, we leveraged Redis' key expiration tied to the underlying Cassandra TTL and implemented an event‑driven invalidation via Kafka topics that pushed updates whenever pricing or driver availability changed. For fault tolerance, each node replicated its cache slice across two shards with quorum reads.

**Result**  
The integrated cache cut read latency from 12 ms average to 3.5 ms and reduced Cassandra read traffic by ~85 %. We handled the full 40 M RPS load during peak hours without any service outages, and the system stayed within our SLA of <1 % error rate. This experience taught me how careful cache partitioning, event‑driven invalidation, and bulk operations can unlock massive scalability in a real‑world ML serving pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
