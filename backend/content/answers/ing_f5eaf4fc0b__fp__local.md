---
qid: ing_f5eaf4fc0b__fp__local
question: 'Explain: Cache Warming — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 408
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:42:23-05:00'
sources: []
---

**Cache Warming – the Uber case study**

Uber’s real‑time routing needs >40 M reads/s from a distributed key‑value store (e.g., Cassandra).  
The *fundamental problem* is that each read can hit a remote node or even a disk, adding ~10–20 ms latency and risking hot‑spot contention.  A pure cache would reduce latency but risks *stale data* if updates are lost.

**Why the integrated cache must pre‑populate (“warm”)**

1. **Stability of the read‑heavy workload** – most location keys are accessed repeatedly in short bursts (e.g., a driver’s vicinity).  
2. **Consistency guarantees** – Uber uses *eventual consistency*; by warming with the latest snapshot from storage, every cache miss is served correctly the first time and subsequent reads hit the local copy.  
3. **Cost–latency trade‑off** – warming amortizes the expensive read over many subsequent hits, turning a 10 ms disk access into ~1 µs in‑memory lookups.

The system therefore runs a *background bootstrap job* that streams data from Cassandra to an in‑process LRU cache during off‑peak hours.  Each key is tagged with a version; when the underlying store changes, a lightweight “evict‑on‑write” protocol ensures stale entries are purged or refreshed.

**Non‑obvious insight**

A *warm cache* behaves like a *probabilistic Bloom filter with timestamps*: it not only tells you “key exists” but also that you have the most recent value.  This dual role lets Uber treat reads as *read‑through* operations, eliminating the need for a separate consistency layer and keeping latency deterministic even under flash crowds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
