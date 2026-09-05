---
qid: ing_73ba01a6bd__star__local
question: 'Explain: Code Implementation — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:19:21-05:00'
sources: []
---

**Situation:** At my previous company we built a real‑time recommendation engine that served millions of users per day. The model weights were sharded across a cluster of GPU nodes, but the sharding scheme caused hotspots: some nodes received twice as many requests as others, leading to 30 % higher latency on those shards.

**Task:** I was asked to redesign the key‑to‑node mapping so that request traffic and storage load would be evenly distributed, while keeping the system able to add or remove nodes with minimal data movement.

**Action:** I implemented consistent hashing using a virtual node (vnode) ring in Python. Each physical GPU node owned 200 vnodes; keys were hashed with SHA‑256 and mapped onto the ring via modulo arithmetic. When a node joined or left, only the adjacent vnodes needed to be reallocated, reducing data migration to under 2 % of total weight. I wrapped the ring logic in a lightweight REST service so other services could query the responsible shard for any key. To keep lookup fast, I cached the vnode mapping locally with a TTL of 60 s and used multiprocessing pools to parallelize hash calculations.

**Result:** After deployment, node load variance dropped from 2.8× to 1.1×, overall request latency improved by 25 %, and we added two new GPU nodes without any downtime or manual re‑balancing. I learned that a careful choice of vnode count balances memory overhead against migration cost, and that exposing the hash ring as a service simplifies integration across heterogeneous components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
