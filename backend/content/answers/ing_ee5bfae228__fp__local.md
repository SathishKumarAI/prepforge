---
qid: ing_ee5bfae228__fp__local
question: 'Explain: Less Origin Load — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 454
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:25:54-05:00'
sources: []
---

**Why a CDN must off‑load the origin**

The fundamental problem is *latency* + *throughput*: a single web server (the “origin”) can only process ≈ k requests per second before it saturates CPU, disk I/O or network bandwidth. If every user hits that origin directly, response times explode and traffic spikes cause outages.  

A CDN solves this by **caching** content at edge nodes geographically close to users. The cache is a *probabilistic approximation* of the origin’s state: each object has an associated *time‑to‑live (TTL)* or *Least‑Recently‑Used (LRU)* policy that keeps the most likely-to-be‑requested items resident. Because most web traffic follows a Zipfian distribution, a tiny fraction of objects accounts for the majority of requests; caching those reduces origin load by > 90 %.  

**Design principle:**  
1. **Locality** – Place edge nodes where request density is high to minimize round‑trip time (RTT).  
2. **Consistency vs. freshness** – Use *stale‑while‑revalidate* or *cache‑control* headers so the origin sees only a small fraction of traffic that actually needs recomputation.  
3. **Scalable invalidation** – Push *purge* messages to all replicas instead of polling, ensuring eventual consistency without extra load.

**Non‑obvious insight:** The cache hit ratio is maximized not by storing everything but by *sharding* the origin’s key space and replicating only hot shards at edges. This reduces memory usage while still keeping latency low; it also turns the CDN into a distributed *key‑value store* that can be queried directly, further lowering origin load.

In short, a CDN is an engineered trade‑off between **geometric proximity** (RTT) and **probabilistic caching** (Zipfian traffic), turning a single bottleneck into a swarm of lightweight edge workers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
