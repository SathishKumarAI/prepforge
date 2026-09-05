---
qid: ing_0d40bb4230__star__local
question: 'Explain: Where Consistent Hashing Works Well — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 297
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:10-05:00'
sources: []
---

**Situation:** In my last role at a streaming service, our recommendation engine had to scale from 2 to 20 servers overnight because of a traffic spike. The cache layer was sharded by user ID, and the old hashing scheme caused massive data evictions when new nodes joined.

**Task:** I needed to redesign the key‑to‑node mapping so that adding or removing servers would only move about 5% of keys, keeping cache warm and reducing latency spikes during scaling events.

**Action:** I introduced consistent hashing with a virtual node ring (1024 replicas per physical server) using Murmur3. Keys were hashed onto the ring, and each key was mapped to the next clockwise node. We also added a “rebalance” daemon that streamed only the affected segments from old to new servers, and updated the client-side hash library in production. I benchmarked hit rates before/after and tweaked replica count for optimal balance.

**Result:** Cache hit rate rose from 68% to 93%, and cache evictions dropped by 80%. Scaling events that once caused a 200 ms latency spike now completed in under 20 ms, with only ~4% of keys needing migration. I learned that choosing the right number of virtual nodes is critical for balancing load versus rebalancing cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
