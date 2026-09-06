---
qid: ing_6a882e3779__fp__local
question: 'Explain: Docstore Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 435
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:25-05:00'
sources: []
---

**DocStore Architecture – Uber’s “Over‑40 M reads/s” Engine**

At its core Uber needs a *single source of truth* for billions of service records (drivers, riders, trips) while answering millions of queries per second with sub‑millisecond latency.  
The problem is twofold:  

1. **Write‑through consistency** – updates must propagate to all replicas before the next read can see them; otherwise a rider could be matched to an already‑assigned driver.  
2. **Read scalability** – most traffic is reads, and any per‑request disk hit would throttle the system.

Uber solves this by coupling an *online, sharded key–value store* (the “docstore”) with a *distributed cache* that lives in the same process space as the server logic.  

- **Cache as a write buffer**: every mutation first updates the cache and writes through to disk.  
- **Read‑through with staleness window**: reads hit the cache; if a key is missing, the request falls back to the underlying store. The cache is invalidated on write or after a configurable TTL, guaranteeing *eventual* consistency while keeping most traffic hot in memory.  

The deeper principle is **“bounded staleness for high‑throughput read amplification.”** By accepting a tiny window where a reader may see an older version (but not one that violates business rules), Uber trades strict serializability for orders of magnitude higher throughput, which is acceptable because the domain logic can tolerate such delays.  

*Non‑obvious insight*: The cache does **not** just accelerate reads; it also acts as a *synchronization barrier* that enforces ordering between concurrent writes and subsequent reads without a heavyweight lock manager. This dual role keeps the system both consistent and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
