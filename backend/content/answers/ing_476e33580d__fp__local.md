---
qid: ing_476e33580d__fp__local
question: 'Explain: Table Schemas — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 349
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:37:33-05:00'
sources: []
---

### Why an *Integrated Cache* is essential for millions of reads

When a service must serve **>40 M RPS** from a distributed key‑value store (e.g., Cassandra or DynamoDB), the raw latency of disk‑backed storage (~10–20 ms) turns into unacceptable end‑to‑end delays.  
The fundamental problem is *latency amplification*: each read touches two layers—network + storage—which multiplies variance and degrades tail latencies.  

**Solution principle:** **Cache = low‑variance, high‑throughput buffer that absorbs hot traffic** while still maintaining consistency with the underlying store.  
Uber’s architecture treats the cache as an *integrated component* rather than a separate tier:

1. **Single‑source reads** – Every request first consults the in‑memory cache; only misses propagate to the distributed storage.  
2. **Write‑through + background sync** – Updates hit both cache and store, guaranteeing eventual consistency without read amplification.  
3. **Adaptive eviction** – A cost‑aware policy (e.g., LRU weighted by request frequency) ensures that the most valuable entries stay resident, driven by the *information‑theoretic* principle of minimizing expected miss penalty.

#### Non‑obvious insight
The cache does not merely reduce read latency; it **reduces system entropy**. By concentrating traffic on a deterministic, low‑variance path, Uber transforms a noisy, high‑variance storage layer into a predictable, low‑tail service—essential for real‑time dispatch and surge pricing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
