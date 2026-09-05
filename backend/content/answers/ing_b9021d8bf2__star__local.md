---
qid: ing_b9021d8bf2__star__local
question: 'Explain: Summary — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 327
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:13-05:00'
sources: []
---

**Situation** – While leading the backend for a real‑time ad bidding platform, we hit a scaling wall: our in‑memory cache (Redis) was hitting >90 % eviction rates after just 3 million unique campaigns were loaded during peak traffic.

**Task** – I needed to design a horizontal cache sharding strategy that minimized data movement when adding or removing nodes, kept lookup latency under 2 ms, and ensured even key distribution across the cluster.

**Action** – I implemented consistent hashing with virtual replicas. Each cache node received 200 virtual slots on a 32‑bit ring; keys were hashed using Murmur3 to place them on the ring. To handle hot keys, we added a “hot spot” bucket that rerouted high‑frequency campaign IDs to a dedicated cluster of nodes. We also built a lightweight gossip protocol so nodes could quickly share health status and update their hash ranges without a central coordinator. The system was prototyped in Go, with unit tests verifying <5 % variance in key count per node before and after scaling.

**Result** – After deployment, cache hit rates rose from 65 % to 92 %, eviction dropped by 80 %, and the cluster scaled from 8 to 32 nodes with only a 3 % data shuffle overhead. I learned that careful choice of hash function, replica count, and hot‑spot handling can turn a brittle system into a resilient, self‑healing architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
