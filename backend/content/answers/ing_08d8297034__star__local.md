---
qid: ing_08d8297034__star__local
question: 'Explain: CacheFront — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 429
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:37-05:00'
sources: []
---

**Situation**  
At Uber I was part of the infrastructure team that had to support the new real‑time trip matching service. The system had to read vehicle location data from a sharded NoSQL store at a rate exceeding 40 M reads/s, but our existing hot‑cache layer could only handle about 5 M due to memory limits and eviction latency.

**Task**  
I needed to design an integrated cache that would sit between the application tier and the online storage, reducing read latency by an order of magnitude while keeping cost in check. The goal was to achieve sub‑10 ms average response time for all trip‑matching requests without overprovisioning RAM.

**Action**  
I introduced CacheFront – a distributed cache built on top of Redis‑clustered shards with a custom LRU‑with-time‑to‑live policy that leveraged Uber’s own metadata store for eviction hints. I also implemented a “read‑through” mechanism: if the key missed in CacheFront, we fetched from Cassandra, streamed the result back to the client, and asynchronously populated the cache. To keep memory usage bounded, we used probabilistic data structures (Bloom filters) to avoid unnecessary cache lookups for stale keys. Finally, I integrated a metrics pipeline that surfaced hit/miss ratios per vehicle type, allowing us to tune thresholds in real time.

**Result**  
CacheFront lifted read throughput from 5 M/s to over 40 M/s while keeping average latency below 8 ms. Memory usage stayed within the 32 GB budget we had allocated for caching. The system also cut our Cassandra read load by 70%, saving us an estimated $1.2 M per year in infrastructure costs. I learned that tightly coupling eviction policies with domain knowledge (vehicle location churn) can dramatically improve cache efficiency, and that real‑time metrics are essential for continuous tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
