---
qid: ing_b195a3858e__star__local
question: 'Explain: Do Not Confuse Routing with Rebalancing — Consistent Hashing |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 322
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:26:48-05:00'
sources: []
---

**Situation** – At my previous company we were scaling a distributed caching layer for a real‑time analytics platform. The cache had 200 nodes and we started seeing hot spots after a new feature pushed more traffic to a handful of partitions, causing latency spikes.

**Task** – I needed to redesign the key distribution so that adding or removing nodes wouldn’t trigger massive data movement (rebalancing) while still keeping routing simple for client requests.

**Action** – I introduced consistent hashing with virtual buckets. Each cache node was assigned 100 virtual positions on a 64‑bit ring. Clients hash keys to a point on the ring and simply look up the next clockwise node—no lookup tables, just a binary search over sorted bucket endpoints. When a node joined or left, only the keys that mapped to its immediate neighbors needed moving; we avoided full rebalancing by using “range stealing” from adjacent nodes. I also implemented a lightweight gossip protocol so each node could detect changes in ring membership and update its routing table locally without a global coordinator.

**Result** – After deployment, cache hit latency dropped from 120 ms to 35 ms on average, and the number of key migrations per rebalance fell below 1% of total keys. I learned that clear separation between routing (key lookup) and rebalancing (data movement) is essential for scalable distributed systems, and consistent hashing provides a practical, low‑overhead solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
