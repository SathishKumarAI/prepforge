---
qid: ing_5bf4d50ff2__star__local
question: 'Explain: Mapping a Key — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 346
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:26-05:00'
sources: []
---

**Situation:**  
At my last role I was leading the redesign of our distributed cache for a high‑traffic e‑commerce platform that had grown from 5 to 20 microservices and needed near‑zero downtime during scaling events.

**Task:**  
I had to implement a key distribution scheme that could add or remove cache nodes without redistributing most keys, while keeping latency low (<30 ms) and balancing load across 10–15 nodes.

**Action:**  
I chose consistent hashing with virtual replicas. I built a ring using SHA‑256 hashes of node identifiers, then mapped each real node to 200 virtual nodes around the ring. For every cache key I hashed it with MD5, found its position on the ring, and looked forward until I hit the first virtual node – that node became the responsible cache server.  
To handle hot spots I added a “sticky bucket” layer: frequently accessed keys were cached in a dedicated high‑capacity node set, reducing cross‑node traffic. I also implemented a gossip protocol to keep replicas synchronized and used Redis Cluster as the underlying store, exposing a thin Java wrapper that abstracted the hashing logic.

**Result:**  
After deployment we saw a 45 % reduction in cache miss rate and a 30 % drop in average request latency during peak sales events. Adding a new node required only 2 % of keys to move, eliminating service interruptions. The experience taught me how subtle design choices—like replica count and sticky buckets—directly impact scalability and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
