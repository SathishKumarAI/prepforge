---
qid: ing_86b35b0a9f__star__local
question: How Does the Distributed Counter Work? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 360
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:53-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time click counter for a global video platform that handled 2 million events per second. The existing single‑node Redis solution would have required sharding and complex rebalancing, so we needed a truly distributed counter.

**Task** – Design a fault‑tolerant counter that could aggregate counts from all data centers with sub‑second latency, while keeping the write path simple and avoiding race conditions.

**Action** – I implemented an **event‑sourcing + CRDT** approach. Each edge server appended click events to a local Kafka topic; a lightweight worker converted each event into a `CounterUpdate(id, delta)` and stored it in a Cassandra column family keyed by partition ID. For aggregation, we used a *G-Counter* CRDT: every node maintained a vector of counts per shard, merging with the max of each component on read. Reads hit an aggregator service that performed a lightweight Paxos‑style consensus to pick a leader for each key, then fetched the latest vector from all replicas and summed it. We also added a background compaction job that periodically merged vectors into a single counter per user to keep storage bounded.

**Result** – The system handled 3 million events/sec with <50 ms read latency across regions, and we saw a 40% reduction in data center bandwidth compared to the sharded Redis baseline. I learned how CRDTs eliminate coordination overhead while still guaranteeing eventual consistency, and that careful partitioning of write paths can keep latency low even at massive scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
