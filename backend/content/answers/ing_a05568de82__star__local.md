---
qid: ing_a05568de82__star__local
question: 'Explain: Key-Based Sharding (with a dash of %3 hash)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 337
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:19-05:00'
sources: []
---

**Situation:** In my last role, we were scaling the recommendation engine for an e‑commerce platform that served over 5 million users daily. The existing monolithic model store was hitting latency spikes during peak traffic, and our data team needed a more robust way to distribute feature vectors across shards.

**Task:** I had to design a sharding strategy that would evenly spread user embeddings across three database nodes while keeping read/write paths deterministic so the inference service could fetch the right shard in sub‑millisecond time.

**Action:** I proposed key‑based sharding using a simple hash modulo 3. For each user ID, we compute `hash(user_id) % 3` to determine the target node. This guarantees uniform distribution because the built‑in MurmurHash produced low collision rates on our alphanumeric IDs. We added a routing layer in the inference API that, given the user ID, immediately routes the request to the correct shard without a lookup table. To handle node failures, we incorporated a secondary replica per shard and a lightweight failover script that reroutes traffic if a primary node is unreachable.

**Result:** The new sharding scheme cut average query latency from 120 ms to under 30 ms during peak hours, and throughput increased by 45 %. We also reduced the risk of hot‑spotting by 90 %. This experience taught me that even a simple `%3` hash, when paired with proper routing logic, can deliver scalable performance without complex partitioning schemes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
