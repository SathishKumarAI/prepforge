---
qid: ing_4ee017ee1d__star__local
question: 'Explain: Virtual Nodes — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:15-05:00'
sources: []
---

**Situation:**  
At my last role I was leading the redesign of our distributed recommendation engine. The cluster had grown from 12 to 48 physical nodes, but we kept hitting uneven load spikes—some shards were handling twice the traffic of others, causing cache thrashing and high latency.

**Task:**  
I needed a sharding scheme that would spread data evenly across the expanded cluster while minimizing data movement when nodes joined or left. The goal was to keep read latency below 120 ms for 99th‑percentile requests and reduce rebalancing churn.

**Action:**  
I implemented consistent hashing with virtual nodes (vnodes). Each physical machine was assigned 200 vnodes, and the key space was hashed using Murmur3. I stored a small mapping table in ZooKeeper so that any node could discover its vnodes quickly. When scaling, only ~5% of keys needed to be moved because each vnode’s hash range was tiny. I also added a “hot‑key” sharding layer: frequently accessed items were pinned to dedicated high‑capacity nodes, while the rest used the vnode scheme. We monitored the distribution with Grafana dashboards and tweaked the vnode count to hit our target.

**Result:**  
After deployment, cache hit ratios rose from 68% to 93%, average read latency dropped from 210 ms to 95 ms, and rebalancing downtime fell below 30 seconds. I learned that virtual nodes turn consistent hashing into a practical solution for dynamic clusters, and that coupling it with targeted hot‑key handling can deliver both stability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
