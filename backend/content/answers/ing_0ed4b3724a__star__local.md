---
qid: ing_0ed4b3724a__star__local
question: 'Explain: How Consistent Hashing Works — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 347
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:08-05:00'
sources: []
---

**Situation:** In a distributed recommendation engine we had to scale the model inference service from 4 to 32 nodes without losing session affinity or causing massive cache misses. The existing round‑robin load balancer caused many cache invalidations and latency spikes during node churn.

**Task:** I needed to design a mechanism that evenly distributes user request keys across nodes, preserves key locality when nodes are added or removed, and keeps the routing table small for low latency lookups.

**Action:** I implemented consistent hashing using a virtual ring of 1024 tokens per physical machine. Each user ID was hashed (MD5) to a point on the ring; the nearest clockwise token mapped to the node owning that range. When scaling up, we only needed to move ~1/32nd of keys to new nodes because each new node takes a few consecutive virtual tokens from the ring. I added a lightweight gossip protocol for topology updates so all services refreshed their hash rings in <200 ms. I also built an LRU cache of token-to-node mappings to avoid recomputing hashes on every request.

**Result:** The system handled 10× traffic with <5 % increase in cold‑start latency and dropped cache miss rates from 23 % to 4 %. Adding a new node required only ~3 % of the total keys to be rehashed, proving the approach’s low‑impact scalability. I learned that careful token allocation and fast topology propagation are key to keeping consistent hashing efficient in real‑world ML serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
