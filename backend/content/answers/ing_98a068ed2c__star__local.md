---
qid: ing_98a068ed2c__star__local
question: 'Explain: Features — How Uber Serves Over 40 Million Reads Per Second from
  Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 404
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:45-05:00'
sources: []
---

**Situation** – At my previous role I was part of the Uber data‑platform team that had to expose a new recommendation API. The service needed to serve over 40 million read requests per second from a distributed online storage layer (Cassandra) while keeping latency under 50 ms for every user request.

**Task** – My goal was to design an integrated caching strategy that would reduce direct hits to Cassandra, preserve data freshness, and keep the system cost‑effective. I had to balance cache hit ratios against eviction policies and memory usage across a fleet of 200 edge nodes.

**Action** – I implemented a multi‑layer cache:  
1. A local in‑process LRU cache (≈4 GB) for ultra‑fast hot keys, using Guava with weak references to avoid GC stalls.  
2. A shared Redis cluster as a second tier, sharded by user ID, with a time‑to‑live of 30 seconds and key prefixes that allowed us to prefetch related recommendation vectors in bulk.  
3. An automated cache warm‑up script that ran every minute, scanning Cassandra for keys whose access frequency had spiked in the last hour (using counter tables). I also added a Bloom filter at the front of Redis to reject non‑existent keys before touching Cassandra.

**Result** – The integrated cache lifted our read throughput from 15 M/s to 42 M/s while keeping average latency at 38 ms. Cache hit ratio climbed to 92 %, and we reduced Cassandra I/O by 70 %. I learned that combining per‑node LRU with a sharded Redis layer, plus smart prefetching, can turn a hot‑spot problem into a scalable, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
